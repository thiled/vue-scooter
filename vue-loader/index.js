/**
 * https://github.com/thiled/vue-loader
 * Released under the MIT License.
 */
/**
 * https://github.com/thysultan/stylis.js
 * Released under the MIT License.
 */
import {
  compile,
  serialize,
  stringify,
} from 'https://cdn.jsdelivr.net/npm/stylis/dist/stylis.mjs';
//相对路径转换
import resolvePath from './resolve-path.js';
//
const defaultRoot = location.origin + location.pathname;
let rootPath = defaultRoot;
let vueComponents = (window.vueComponents = {}); //vue组件存储
// 从vue文件读取template/script/style tag
const getBlock = (data, tag) => {
  let regx = new RegExp(`<${tag}>([\\w\\W]*)<\\/${tag}>`);
  let templateStr = data.match(regx);
  return templateStr[1].replace(/\s*(.*)/, '$1');
};
// 更改默认前缀，部署用
const setRoot = (path) => {
  rootPath = path;
};
//
const load = (vueFileUrl, isFullPath = false) => {
  if (!isFullPath) {
    vueFileUrl = resolvePath(rootPath, vueFileUrl);
  }
  return new Promise((resolve, reject) => {
    if (window[vueFileUrl]) {
      // 读取缓存的组件对象
      resolve(window[vueFileUrl]);
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = async (e) => {
      let data = xhr.responseText;
      // 解析vue文件
      let template = getBlock(data, 'template');
      let style = getBlock(data, 'style');
      let script = getBlock(data, 'script');
      let vueImports = [];
      // 清除注释
      script = script.replace(/(?:^|\s)(\/\/.*)|(\/\*[\w\W]*?\*\/)/g, '');
      // 识别import,转换路径,提取vue import
      script = script.replace(
        /(import\s+(\w+|.*)\s+from\s+['"])(.*?)(['"])/gs,
        ($0, $1, $2, $3, $4) => {
          // import相对路径转换
          let fullPath = resolvePath(vueFileUrl, $3);
          let importStatement = $1 + fullPath + $4;
          if ($3.match(/\.vue$/)) {
            // 识别import vue语句
            vueImports.push({
              importStatement: importStatement,
              name: $2,
              path: fullPath,
            });
          }
          return importStatement;
        }
      );
      // 遍历vue文件, 递归解析
      while (vueImports.length > 0) {
        let element = vueImports.shift();
        let componentName = element.name;
        let componentPath = element.path;
        let component = await load(componentPath, true);
        if (!vueComponents[componentPath]) {
          // 组件对象存储, 相同路径组件只加载一次
          vueComponents[componentPath] = component;
        }
        // 替换import vue文件的语句
        script = script.replace(
          element.importStatement,
          `const ${componentName}= window.vueComponents['${componentPath}']`
        );
      }
      // 替换tempate中src的相对路径
      template = template.replace(/(\ssrc=['"])(.*?)(?=['"])/g, ($0, $1, $2) => {
        return $1 + resolvePath(vueFileUrl, $2);
      });
      // 字符串js转脚本, 未知是否需要URI编码?
      // script = encodeURIComponent(script);
      const dataUri = 'data:text/javascript;charset=utf-8,' + script;
      import(dataUri).then((res) => {
        let component = res.default;
        component.template = template;
        // style apply
        // TODO css scoped
        //替换style中的url路径
        style = style.replace(/(url\(['"])(.*?)(?=["']\))/g, ($0, $1, $2) => {
          return $1 + resolvePath(vueFileUrl, $2);
        });
        style = serialize(compile(style), stringify);
        let styleElement = document.createElement('style');
        styleElement.append(style);
        document.head.appendChild(styleElement);
        resolve(component);
      });
    };
    xhr.open('GET', vueFileUrl);
    xhr.send();
  });
};
export default {
  load,
  setRoot,
};
