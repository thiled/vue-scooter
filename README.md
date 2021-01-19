## Introduction
**vue-scooter** parses single vue file components directly in the browser. It is designed for those projects with low browser compatibility requirements, for people who need to start modular static pages development quickly with good development and maintainance experience.

## Features
scripts in .vue
- suport importing ESM script files
- does not support require()
  
styles in .vue
 - support nested css  
 - support scoped css with ::v-deep{} as exceptions  

using vue-scooter-cli
- instantly dev-server start
- fast hmr
- fast build

## Usage
See [demo](https://github.com/thiled/vue-scooter/tree/master/demo) for a taste

## Browser compatibility
Chrome 63+  
Firefox 67+  
Edge 79+  
Safari 11.1+

## Dependencies
[stylis](https://github.com/thysultan/stylis.js)  
[vue-hot-reload-api](https://github.com/vuejs/vue-hot-reload-api)  

## License
[MIT](http://opensource.org/licenses/MIT)
