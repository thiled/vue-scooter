import VueLoader from '../vue-loader/index.js';
import 'https://cdn.jsdelivr.net/npm/vue-router';

const Page = async () => VueLoader.load('./views/page/index.vue');
const Page2 = async () => VueLoader.load('./views/page2/index.vue');

const routes = [
  { path: '/page2', component: Page2 },
  { path: '/', component: Page },
];
const router = new VueRouter({
  routes,
});
const init = async () => {
  let App = await VueLoader.load('app.vue');
  new Vue({
    router,
    el: '#app',
    template: '<App />',
    components: {
      App,
    },
  });
};
init();
