import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import './plugins/element.js'

Vue.prototype.$http= Axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
