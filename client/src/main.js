import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.use(VueRouter)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
