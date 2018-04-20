import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default {
  tokenAcess: function () {
    if (window.Storage && window.localStorage && window.localStorage instanceof Storage) { //判断是否支持localStorage
      if (window.localStorage.getItem("Traintoken")) { //存在
        return window.localStorage.getItem("Traintoken")
      } else { //不存在
        
      }

    } else { //不支持localStorage

    }
  }
}
