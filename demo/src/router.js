import 'https://cdn.jsdelivr.net/npm/vue-router@3';

const Page = () => VueScooter.load('./views/page/index.vue');
const Page2 = () => VueScooter.load('./views/page2/index.vue');

const routes = [
  { path: '/page2', component: Page2 },
  { path: '/', component: Page },
];
export default new VueRouter({
  routes,
});
