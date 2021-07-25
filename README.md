# vue-scooter
<img src="https://user-images.githubusercontent.com/28561045/126886028-2c3916a8-1543-4683-ae5e-04475a7bf703.png" width="100px"/>

## Introduction  
**vue-scooter** parses single vue file components directly in the browser. It is designed for those projects with low browser compatibility requirements, for people who need to start modular static pages development quickly without any module bundler.

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
