import router from './router.js';
let App = () => VueScooter.load('app.vue');
new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
});
