import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import About from './components/AboutPage'
import dataCalculator from './components/dataCalculator'
import AchiVements from './components/AchiVements'
import conTacts from './components/conTacts'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

Vue.use(VueRouter);
const routes=[
  {path: '/', component:About},
  {path: '/dataCalculator', component:dataCalculator},
  {path: '/AchiVements', component:AchiVements},
  {path: '/conTacts', component:conTacts}
]
const router= new VueRouter({
  routes
})
Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
