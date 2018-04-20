// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueHighcharts from 'highcharts'
import axios from 'axios'
import variablePie from 'highcharts/js/modules/variable-pie'
Vue.config.productionTip = false
Vue.use(VueHighcharts)
variablePie(VueHighcharts)
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  data: {},
  router,
  components: {
    App
  },
  template: '<App/>'
})
