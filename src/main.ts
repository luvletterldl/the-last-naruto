import Vue from 'vue';
import App from './App.vue';
import '@unocss/reset/tailwind.css';
import 'uno.css';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
