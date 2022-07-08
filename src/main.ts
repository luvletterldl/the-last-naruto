import Vue from 'vue';
import App from './App.vue';
// import { createRouter, createWebHistory } from 'vue-router';
// import routes from '~pages';
import '@unocss/reset/tailwind.css';
import 'uno.css';

Vue.config.productionTip = false;

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes,
// });

// Vue.use(router);
new Vue({
  render: (h) => h(App),
}).$mount('#app');
