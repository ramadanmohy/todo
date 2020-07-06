import '@babel/polyfill'
import Vue from 'vue'
import '../src/plugins/vuetify'
import App from './App'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
