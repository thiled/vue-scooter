import VueLoader from '../../vue-scooter/index.js';
window.VueLoader = VueLoader;
import router from './router.js';
import store from './store/index.js';
let App = () => VueLoader.load('app.vue');
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
