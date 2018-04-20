export default {
  //用户登录
  login: function () {
    return '/province/supervise/web/login'
  },
  //省区域
  provinceArea: function () {
    return '/province/supervise/web/drop/areaList'
  },
  //地区统计
  area: function () {
    return '/province/supervise/web/stat/statArea'
  },
  //医疗机构信息查询列表
  hospitalList: function () {
    return '/province/supervise/web/device/findByPage'
  },
  //机构列表查询
  inst: function () {
    return '/province/supervise/web/inst/findByPage'
  },
  //设备分类
  device:function(){
    return '/province/supervise/web/drop/list'
  }

}
