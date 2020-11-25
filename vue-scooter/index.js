/**
 * last updated 2020-10-15 19:55:21
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
  middleware,
} from 'https://cdn.jsdelivr.net/npm/stylis/dist/stylis.mjs';
import hotReloadApi from './vue-hot-reload-api.js';
hotReloadApi.install(Vue);
//
const defaultRoot = location.origin + location.pathname;
let rootPath = defaultRoot;
let vueComponents = (window.vueComponents = {}); //vue组件存储
let vueFileLoadCount = 0;

/**
 * 更改默认前缀，部署用
 * @param {*} path
 */
const setRoot = (path) => {
  rootPath = path;
};

/**
 * 相对路径转换
 * @param {*} currentPath
 * @param {*} relativePath
 */
const _resolvePath = (currentPath, relativePath) => {
  // relativePath
  // 如果是url,取消处理
  if (relativePath.match(/^https?:\/\//)) {
    return relativePath;
  }
  // remove ./
  relativePath = relativePath.replace(/^\.\//, '');
  // 拆分'../'
  let match = relativePath.match(/\.\.\//g);
  let count = (match && match.length) || 0;
  // 去掉相对路径后的剩余路径
  let cleanPath = relativePath.replace(/\.\.\//g, '');
  // currentPath
  // 拆分'.+/'
  let currentPathArr = currentPath.match(/.+?\/+/g);
  // 移除相对路径层级
  currentPathArr.splice(currentPathArr.length - count, count);
  return currentPathArr.join('') + cleanPath;
};

/**
 * 从vue文件读取template/script/style tag
 * @param {*} data
 * @param {*} tag
 */
const _getBlock = (data, tag) => {
  let regx = new RegExp(`<${tag}(.*?)>([\\w\\W]*)<\\/${tag}>`);
  let templateStr = data.match(regx);
  return {
    value: templateStr[2].replace(/\s*(.*)/, '$1'),
    attrs: templateStr[1],
  };
};

/**
 * 处理script
 * @param {*} vueFileUrl
 * @param {*} script
 */
const _handleScript = (vueFileUrl, script) => {
  return new Promise(async (resolve) => {
    let vueImports = [];
    // 清除注释
    script = script.replace(/(?:^|\s)(\/\/.*)|(\/\*[\w\W]*?\*\/)/g, '');
    // 识别import,转换路径,提取vue import
    script = script.replace(
      /(import\s+(\w+|.*)\s+from\s+['"])(.*?)(['"])/gs,
      ($0, $1, $2, $3, $4) => {
        // import相对路径转换
        let fullPath = _resolvePath(vueFileUrl, $3);
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
      await _load(componentPath, true);

      // 替换import vue文件的语句
      script = script.replace(
        element.importStatement,
        `const ${componentName}= window.vueComponents['${componentPath}']`
      );
    }
    resolve(script);
  });
};

/**
 * 处理template
 * @param {*} vueFileUrl
 * @param {*} template
 * @param {*} scopedDataAttr
 */
const _handleTemplate = (vueFileUrl, template, scopedDataAttr) => {
  // 替换tempate中src的相对路径
  template = template.replace(/(\ssrc=['"])(.*?)(?=['"])/g, ($0, $1, $2) => {
    return $1 + _resolvePath(vueFileUrl, $2);
  });
  if (scopedDataAttr) {
    // template中所有tag加scoped相关data属性
    template = template.replace(/(<[\w-]+)/g, `$1 ${scopedDataAttr}`);
  }
  return template;
};

/**
 * 处理style
 * @param {*} vueFileUrl
 * @param {*} style
 * @param {*} scopedDataAttr
 */
const _handleStyle = (vueFileUrl, style, scopedDataAttr) => {
  // 替换style中的url路径
  style = style.replace(/(url\(['"])(.*?)(?=["']\))/g, ($0, $1, $2) => {
    return $1 + _resolvePath(vueFileUrl, $2);
  });
  // 嵌套解析
  if (scopedDataAttr) {
    // style中所有选择器添加scoped相关data属性匹配
    style = serialize(
      compile(style),
      middleware([
        (element) => {
          if (element.type === 'rule') {
            element.props[0] += `[${scopedDataAttr}]`;
          }
        },
        stringify,
      ])
    );
  } else {
    style = serialize(compile(style), stringify);
  }
  // 应用style
  let styleElement = document.createElement('style');
  styleElement.append(style);
  document.head.appendChild(styleElement);
};

/**
 * vue文件加载
 * @param {*} vueFileUrl
 * @param {*} isFullPath
 */
const _load = (vueFileUrl, isFullPath = false, isReload = false) => {
  let scopedDataAttr;
  if (!isFullPath) {
    vueFileUrl = _resolvePath(rootPath, vueFileUrl);
  }
  return new Promise((resolve, reject) => {
    if (vueComponents[vueFileUrl] && !isReload) {
      // 读取缓存的组件对象
      resolve(vueComponents[vueFileUrl]);
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = async (e) => {
      vueFileLoadCount++;
      let data = xhr.responseText;
      // 解析vue文件
      let template = _getBlock(data, 'template').value;
      let script = _getBlock(data, 'script').value;
      let styleObj = _getBlock(data, 'style');
      let style = styleObj.value;
      if (/scoped/.test(styleObj.attrs)) {
        scopedDataAttr = `data-v-${vueFileLoadCount}`;
      }
      script = await _handleScript(vueFileUrl, script);
      // 字符串js转脚本, 未知是否需要URI编码?
      // script = encodeURIComponent(script);
      const dataUri =
        'data:text/javascript;charset=utf-8,' + script + vueFileLoadCount;
      import(dataUri).then((res) => {
        let component = res.default;
        template = _handleTemplate(vueFileUrl, template, scopedDataAttr);
        component.template = template;
        if (!vueComponents[vueFileUrl]) {
          // 组件对象存储, 相同路径组件只加载一次
          vueComponents[vueFileUrl] = component;
          //
          hotReloadApi.createRecord(vueFileUrl, component);
        } else if (isReload) {
          hotReloadApi.reload(vueFileUrl, component);
        }
        _handleStyle(vueFileUrl, style, scopedDataAttr);
        //
        resolve(component);
      });
    };
    xhr.open('GET', vueFileUrl);
    xhr.send();
  });
};

/**
 * load vue file
 * @param {*} vueFileUrl
 * @param {*} isFullPath
 */
const load = (vueFileUrl, isFullPath = false) => {
  return _load(vueFileUrl, isFullPath);
};

/**
 * hot reload vue file
 * @param {*} vueFileUrl
 */
const reload = (vueFileUrl) => {
  _load(vueFileUrl, false, true);
};

export default {
  load,
  setRoot,
  reload,
};
