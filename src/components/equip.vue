<template>
<div>
  <div class='equip_box'>
    <equip-search></equip-search>
    <div>
    <div class='total'>查询结果 共检索出<span class='total_num'>20000</span>家机构，共含有<span class='total_num'>20000</span>台设备</div>
    <ul>
      <li class='title'>
        <span>序号</span>
        <span>机构名称</span>
        <span>设备id</span>
        <span>设备型号</span>
        <span>国产/进口</span>
        <span>设备类型</span>
        <span>设备子类</span>
        <span>设备厂家</span>
        <span>完整信息</span>
      </li>
      <li v-for='(item,index) in lists' :key='item.id' :class='{bgcolor:index%2==0?false:true}'>
        <span>{{index+1}}</span>
        <span>{{item.instName}}</span>
        <span>{{item.id}}</span>
        <span>{{item.modelName}}</span>
        <span>{{item.originName}}</span>
        <span>{{item.typeName}}</span>
        <span>{{item.subTypeName}}</span>
        <span>{{item.origin}}</span>
        <span class='link' @click='showDetail(item.id)'><span>点击查看</span></span>
      </li>
    </ul>
  </div>
  </div>
</div>
</template>
<script>
import equipSearch from "@/components/equipsearch";
import Ajax from "../components/ajax/ajax_service";
export default {
  data() {
    return {
      lists: []
    };
  },
  methods: {
    showDetail(x) {
      this.$router.push("/backStage/equipment/singleequipdetail");
    }
  },
  components: {
    equipSearch
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
