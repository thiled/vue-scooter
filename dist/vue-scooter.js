var VueScooter = (function () {
	'use strict';

	var c="comm";var n="rule";var t="decl";var i="@import";var k=Math.abs;var d=String.fromCharCode;function g(e){return e.trim()}function y(e,r,a){return e.replace(r,a)}function z(e,r){return e.charCodeAt(r)|0}function C(e,r,a){return e.slice(r,a)}function A(e){return e.length}function M(e){return e.length}function O(e,r){return r.push(e),e}var q=1;var B=1;var D=0;var E=0;var F=0;var G="";function H(e,r,a,c,n,t,s){return {value:e,root:r,parent:a,type:c,props:n,children:t,line:q,column:B,length:s,return:""}}function J(){return F}function K(){F=E<D?z(G,E++):0;if(B++,F===10)B=1,q++;return F}function L(){return z(G,E)}function N(){return E}function P(e,r){return C(G,e,r)}function Q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function R(e){return q=B=1,D=A(G=e),E=0,[]}function T(e){return G="",e}function U(e){return g(P(E-1,Y(e===91?e+2:e===40?e+1:e)))}function W(e){while(F=L())if(F<33)K();else break;return Q(e)>2||Q(F)>3?"":" "}function Y(e){while(K())switch(F){case e:return E;case 34:case 39:return Y(e===34||e===39?e:F);case 40:if(e===41)Y(e);break;case 92:K();break}return E}function Z(e,r){while(K())if(e+F===47+10)break;else if(e+F===42+42&&L()===47)break;return "/*"+P(r,E-1)+"*"+d(e===47?e:K())}function _(e){while(!Q(L()))K();return P(e,E)}function ee(e){return T(re("",null,null,null,[""],e=R(e),0,[0],e))}function re(e,r,a,c,n,t,s,u,i){var f=0;var o=0;var l=s;var v=0;var h=0;var p=0;var w=1;var b=1;var $=1;var k=0;var m="";var g=n;var x=t;var j=c;var z=m;while(b)switch(p=k,k=K()){case 34:case 39:case 91:case 40:z+=U(k);break;case 9:case 10:case 13:case 32:z+=W(p);break;case 47:switch(L()){case 42:case 47:O(ce(Z(K(),N()),r,a),i);break;default:z+="/";}break;case 123*w:u[f++]=A(z)*$;case 125*w:case 59:case 0:switch(k){case 0:case 125:b=0;case 59+o:if(h>0)O(h>32?ne(z+";",c,a,l-1):ne(y(z," ","")+";",c,a,l-2),i);break;case 59:z+=";";default:O(j=ae(z,r,a,f,o,n,u,m,g=[],x=[],l),t);if(k===123)if(o===0)re(z,r,j,j,g,t,l,u,x);else switch(v){case 100:case 109:case 115:re(e,j,j,c&&O(ae(e,j,j,0,0,n,u,m,n,g=[],l),x),n,x,l,u,c?g:x);break;default:re(z,j,j,j,[""],x,l,u,x);}}f=o=h=0,w=$=1,m=z="",l=s;break;case 58:l=1+A(z),h=p;default:switch(z+=d(k),k*w){case 38:$=o>0?1:(z+="\f",-1);break;case 44:u[f++]=(A(z)-1)*$,$=1;break;case 64:if(L()===45)z+=U(K());v=L(),o=A(m=z+=_(N())),k++;break;case 45:if(p===45&&A(z)==2)w=0;}}return t}function ae(e,r,a,c,t,s,u,i,f,o,l){var v=t-1;var h=t===0?s:[""];var p=M(h);for(var w=0,b=0,$=0;w<c;++w)for(var d=0,m=C(e,v+1,v=k(b=u[w])),x=e;d<p;++d)if(x=g(b>0?h[d]+" "+m:y(m,/&\f/g,h[d])))f[$++]=x;return H(e,r,a,t===0?n:i,f,o,l)}function ce(e,r,a){return H(e,r,a,c,d(J()),C(e,2,-2),0)}function ne(e,r,a,c){return H(e,r,a,t,C(e,0,c),C(e,c+1,-1),c)}function se(e,r){var a="";var c=M(e);for(var n=0;n<c;n++)a+=r(e[n],n,e,r)||"";return a}function ue(e,r,a,s){switch(e.type){case i:case t:return e.return=e.return||e.value;case c:return "";case n:e.value=e.props.join(",");}return A(a=se(e.children,s))?e.return=e.value+"{"+a+"}":""}function ie(e){var r=M(e);return function(a,c,n,t){var s="";for(var u=0;u<r;u++)s+=e[u](a,c,n,t)||"";return s}}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var dist = createCommonjsModule(function (module, exports) {
	var Vue; // late bind
	var version;
	var map = Object.create(null);
	if (typeof window !== 'undefined') {
	  window.__VUE_HOT_MAP__ = map;
	}
	var installed = false;
	var initHookName = 'beforeCreate';

	exports.install = function (vue, browserify) {
	  if (installed) { return }
	  installed = true;

	  Vue = vue.__esModule ? vue.default : vue;
	  version = Vue.version.split('.').map(Number);

	  // compat with < 2.0.0-alpha.7
	  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
	    initHookName = 'init';
	  }

	  exports.compatible = version[0] >= 2;
	  if (!exports.compatible) {
	    console.warn(
	      '[HMR] You are using a version of vue-hot-reload-api that is ' +
	        'only compatible with Vue.js core ^2.0.0.'
	    );
	    return
	  }
	};

	/**
	 * Create a record for a hot module, which keeps track of its constructor
	 * and instances
	 *
	 * @param {String} id
	 * @param {Object} options
	 */

	exports.createRecord = function (id, options) {
	  if(map[id]) { return }

	  var Ctor = null;
	  if (typeof options === 'function') {
	    Ctor = options;
	    options = Ctor.options;
	  }
	  makeOptionsHot(id, options);
	  map[id] = {
	    Ctor: Ctor,
	    options: options,
	    instances: []
	  };
	};

	/**
	 * Check if module is recorded
	 *
	 * @param {String} id
	 */

	exports.isRecorded = function (id) {
	  return typeof map[id] !== 'undefined'
	};

	/**
	 * Make a Component options object hot.
	 *
	 * @param {String} id
	 * @param {Object} options
	 */

	function makeOptionsHot(id, options) {
	  if (options.functional) {
	    var render = options.render;
	    options.render = function (h, ctx) {
	      var instances = map[id].instances;
	      if (ctx && instances.indexOf(ctx.parent) < 0) {
	        instances.push(ctx.parent);
	      }
	      return render(h, ctx)
	    };
	  } else {
	    injectHook(options, initHookName, function() {
	      var record = map[id];
	      if (!record.Ctor) {
	        record.Ctor = this.constructor;
	      }
	      record.instances.push(this);
	    });
	    injectHook(options, 'beforeDestroy', function() {
	      var instances = map[id].instances;
	      instances.splice(instances.indexOf(this), 1);
	    });
	  }
	}

	/**
	 * Inject a hook to a hot reloadable component so that
	 * we can keep track of it.
	 *
	 * @param {Object} options
	 * @param {String} name
	 * @param {Function} hook
	 */

	function injectHook(options, name, hook) {
	  var existing = options[name];
	  options[name] = existing
	    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
	    : [hook];
	}

	function tryWrap(fn) {
	  return function (id, arg) {
	    try {
	      fn(id, arg);
	    } catch (e) {
	      console.error(e);
	      console.warn(
	        'Something went wrong during Vue component hot-reload. Full reload required.'
	      );
	    }
	  }
	}

	function updateOptions (oldOptions, newOptions) {
	  for (var key in oldOptions) {
	    if (!(key in newOptions)) {
	      delete oldOptions[key];
	    }
	  }
	  for (var key$1 in newOptions) {
	    oldOptions[key$1] = newOptions[key$1];
	  }
	}

	exports.rerender = tryWrap(function (id, options) {
	  var record = map[id];
	  if (!options) {
	    record.instances.slice().forEach(function (instance) {
	      instance.$forceUpdate();
	    });
	    return
	  }
	  if (typeof options === 'function') {
	    options = options.options;
	  }
	  if (record.Ctor) {
	    record.Ctor.options.render = options.render;
	    record.Ctor.options.staticRenderFns = options.staticRenderFns;
	    record.instances.slice().forEach(function (instance) {
	      instance.$options.render = options.render;
	      instance.$options.staticRenderFns = options.staticRenderFns;
	      // reset static trees
	      // pre 2.5, all static trees are cached together on the instance
	      if (instance._staticTrees) {
	        instance._staticTrees = [];
	      }
	      // 2.5.0
	      if (Array.isArray(record.Ctor.options.cached)) {
	        record.Ctor.options.cached = [];
	      }
	      // 2.5.3
	      if (Array.isArray(instance.$options.cached)) {
	        instance.$options.cached = [];
	      }

	      // post 2.5.4: v-once trees are cached on instance._staticTrees.
	      // Pure static trees are cached on the staticRenderFns array
	      // (both already reset above)

	      // 2.6: temporarily mark rendered scoped slots as unstable so that
	      // child components can be forced to update
	      var restore = patchScopedSlots(instance);
	      instance.$forceUpdate();
	      instance.$nextTick(restore);
	    });
	  } else {
	    // functional or no instance created yet
	    record.options.render = options.render;
	    record.options.staticRenderFns = options.staticRenderFns;

	    // handle functional component re-render
	    if (record.options.functional) {
	      // rerender with full options
	      if (Object.keys(options).length > 2) {
	        updateOptions(record.options, options);
	      } else {
	        // template-only rerender.
	        // need to inject the style injection code for CSS modules
	        // to work properly.
	        var injectStyles = record.options._injectStyles;
	        if (injectStyles) {
	          var render = options.render;
	          record.options.render = function (h, ctx) {
	            injectStyles.call(ctx);
	            return render(h, ctx)
	          };
	        }
	      }
	      record.options._Ctor = null;
	      // 2.5.3
	      if (Array.isArray(record.options.cached)) {
	        record.options.cached = [];
	      }
	      record.instances.slice().forEach(function (instance) {
	        instance.$forceUpdate();
	      });
	    }
	  }
	});

	exports.reload = tryWrap(function (id, options) {
	  var record = map[id];
	  if (options) {
	    if (typeof options === 'function') {
	      options = options.options;
	    }
	    makeOptionsHot(id, options);
	    if (record.Ctor) {
	      if (version[1] < 2) {
	        // preserve pre 2.2 behavior for global mixin handling
	        record.Ctor.extendOptions = options;
	      }
	      var newCtor = record.Ctor.super.extend(options);
	      // prevent record.options._Ctor from being overwritten accidentally
	      newCtor.options._Ctor = record.options._Ctor;
	      record.Ctor.options = newCtor.options;
	      record.Ctor.cid = newCtor.cid;
	      record.Ctor.prototype = newCtor.prototype;
	      if (newCtor.release) {
	        // temporary global mixin strategy used in < 2.0.0-alpha.6
	        newCtor.release();
	      }
	    } else {
	      updateOptions(record.options, options);
	    }
	  }
	  record.instances.slice().forEach(function (instance) {
	    if (instance.$vnode && instance.$vnode.context) {
	      instance.$vnode.context.$forceUpdate();
	    } else {
	      console.warn(
	        'Root or manually mounted instance modified. Full reload required.'
	      );
	    }
	  });
	});

	// 2.6 optimizes template-compiled scoped slots and skips updates if child
	// only uses scoped slots. We need to patch the scoped slots resolving helper
	// to temporarily mark all scoped slots as unstable in order to force child
	// updates.
	function patchScopedSlots (instance) {
	  if (!instance._u) { return }
	  // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/resolve-scoped-slots.js
	  var original = instance._u;
	  instance._u = function (slots) {
	    try {
	      // 2.6.4 ~ 2.6.6
	      return original(slots, true)
	    } catch (e) {
	      // 2.5 / >= 2.6.7
	      return original(slots, null, true)
	    }
	  };
	  return function () {
	    instance._u = original;
	  }
	}
	});

	var hotReloadApi = unwrapExports(dist);
	var dist_1 = dist.install;
	var dist_2 = dist.compatible;
	var dist_3 = dist.createRecord;
	var dist_4 = dist.isRecorded;
	var dist_5 = dist.rerender;
	var dist_6 = dist.reload;

	/**
	 * https://github.com/thiled/vue-scooter
	 * Released under the MIT License.
	 */
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
	  if (relativePath.match(/^((https?:)?\/\/)/)) {
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
	  return templateStr
	    ? {
	        value: templateStr[2].replace(/\s*(.*)/, '$1'),
	        attrs: templateStr[1],
	      }
	    : {};
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
	  if (!style) return;
	  // 替换style中的url路径
	  style = style.replace(/(url\(['"])(.*?)(?=["']\))/g, ($0, $1, $2) => {
	    return $1 + _resolvePath(vueFileUrl, $2);
	  });
	  // 嵌套解析
	  if (scopedDataAttr) {
	    // style中所有选择器添加scoped相关data属性匹配
	    style = se(
	      ee(style),
	      ie([
	        (element) => {
	          if (element.type === 'rule') {
	            let prop = element.props[0];
	            if (prop.match(/::v-deep/)) {
	              prop = prop.replace(/\s?::v-deep/, '');
	            } else if (prop.match(/::/)) {
	              prop = prop.replace(/::/, `[${scopedDataAttr}]::`);
	            } else {
	              prop += `[${scopedDataAttr}]`;
	            }
	            element.props[0] = prop;
	          }
	        },
	        ue,
	      ])
	    );
	  } else {
	    style = se(ee(style), ue);
	  }
	  // 应用style
	  let styleElement = document.createElement('style');
	  styleElement.setAttribute('file', vueFileUrl);
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
	      // 字符串js转脚本, 编码处理特殊字符
	      script = encodeURIComponent(script);
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
	          // 移除旧样式
	          let lastStyleDom = document.querySelector(
	            `style[file="${vueFileUrl}"]`
	          );
	          lastStyleDom && lastStyleDom.remove();
	          // 组件重载
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

	var index = {
	  load,
	  setRoot,
	  reload,
	};

	return index;

}());
