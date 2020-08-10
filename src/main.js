import Vue from 'vue'
import Axios from 'axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import '@/assets/css/bootstrap.css'
// import '@/assets/js/bootstrap.js'

Vue.prototype.$http = Axios
// Vue.use(Axios)
// const axios = require('Axios').default;

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
