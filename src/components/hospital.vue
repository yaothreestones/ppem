<template>
<div>
  <div class='equip_box'>
    <hospital-search></hospital-search>
    <div>
    <div class='total'>查询结果 共检索出<span class='total_num'>20000</span>家机构，共含有<span class='total_num'>20000</span>台设备<button type='button'  class="search">导出</button></div>
    <ul>
      <li class='title'>
        <span>序号</span>
        <span>机构名称</span>
        <span>城市</span>
        <span>区/县</span>
        <span>机构类型</span>
        <span>许可证申请类别</span>
        <span>设备总量</span>
        <span>机构完整信息</span>
      </li>
      <li v-for='(item,index) in lists' :key='item.id' :class='{bgcolor:index%2==0?false:true}'>
        <span>{{index+1}}</span>
        <span class=''>{{item.instName}}</span>
        <span class=''>{{item.cityName}}</span>
        <span class=''>{{item.districtName}}</span>
        <span class=''>{{item.instClass}}</span>
        <span class=''>{{item.subType}}</span>
        <span class=''>{{item.origin}}</span>
        <span class='link' @click='showDetail(item.id)'><span>点击查看</span></span>
      </li>
    </ul>
  </div>
  </div>
</div>
</template>
<script>
import hospitalSearch from "@/components/hospitalsearch";
import Ajax from "../components/ajax/ajax_service";
export default {
  data() {
    return {
      lists:[],
    };
  },
  methods: {
    showDetail(x) {
      this.$router.push("/backStage/equipment/hospitaldetail");
    }
  },
  components: {
    hospitalSearch
  },
  
  mounted() {
    Ajax.getHospitalList({ province: 320000, page: 1, size: 10 })
      .then(res => {
        console.log(res), (this.lists = res.data.data.list);
      })
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.search {
  width: 6rem;
  height: 2.1rem;
  border: 0;
  background: linear-gradient(#679ff2, #3c72da);
  box-shadow: 0px 2px 0px 0px #595dd8;
  border-radius: 5px;
  color: #fff;
  box-sizing: border-box;
  outline: none;
  margin-top: -1px;
  float: right;
  margin-top: 1.03rem;
  margin-right: 3rem;
}
button {
  cursor: pointer;
}
.total {
  font-size: 16px;
  height: 4.16rem;
  background-color: #f0f1f2;
  line-height: 4.16rem;
  padding-left: 2rem;
  letter-spacing: 2px;
  background: url("../assets/search.png") repeat right bottom;
  background-size: auto 100%;
  border-radius: 5px 5px 0 0;
  border-left: 1px solid #cfd0d2;
  border-right: 1px solid #cfd0d2;
}
.total_num {
  color: #529ad4;
}
.equip_box {
  margin: 1.33rem;
}
ul {
  padding: 0;
  margin: 0;
}
h1 {
  display: flex;
  align-items: center;
}
.title {
  border-top: 1px solid #dadee1;
  background-color: #e8eff7;
  font-weight: 900;
}
li {
  list-style: none;
  display: flex;
  border-bottom: 1px solid #dadee1;
}
span {
  flex: 1;
  text-align: center;
  height: 4rem;
  border-right: 1px solid #dadee1;
  line-height: 4rem;
}
.bgcolor {
  background-color: #e8eff7;
}
.link {
  color: #00a6df;
}
.link > span {
  cursor: pointer;
  border: 0;
  text-decoration: underline;
}
</style>
