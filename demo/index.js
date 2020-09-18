import VueLoader from '../vue-loader/index.js';
import router from './router/index.js';
import store from './store/index.js';
let App = () => VueLoader.load('app.vue');
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
