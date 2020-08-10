import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'

Vue.prototype.$http = Axios
// Vue.use(Axios)
// const axios = require('Axios').default;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
