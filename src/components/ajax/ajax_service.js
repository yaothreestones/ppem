import ajax from './ajax.js'
import axios from 'axios'

const config = {
  headers: {
    "X-Auth-Token": window.localStorage.getItem("Traintoken")
  }
}
export default {
  //登陆
  login: function (data) {
    return axios.post(ajax.login(), data)
  },
  //获取省区域
  provinceArea: function (data) {
    return axios.post(ajax.provinceArea(), data, config)
  },
  //获取区域
  getArea: function (data) {
    return axios.post(ajax.area(), data, config)
  },
  //医疗机构信息查询列表
  getHospitalList: function (data) {
    return axios.post(ajax.hospitalList(), data, config)
  },
  //获取机构
  getInst: function (data) {
    return axios.post(ajax.inst(), data, config)
  },
  //设备分类
  getDevice:function(data){
    return axios.post(ajax.device(),data,config)
  }
}
