import VueScooter from '../../vue-scooter/index.js';
window.VueScooter = VueScooter;
import router from './router.js';
import store from './store/index.js';
let App = () => VueScooter.load('app.vue');
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
