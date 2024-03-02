import Vue from 'vue'
import routes from 'virtual:generated-pages'
import VueRouter from 'vue-router'
import App from './App.vue'

import '@unocss/reset/tailwind-compat.css'
import '~/styles/main.css'
import 'uno.css'

Vue.config.productionTip = false

export const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
