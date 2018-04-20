<template>
<div>
    <div class='total'>江苏省共有医疗设备<span class='total_num'>20000</span>家，诊疗设备<span class='total_num'>20000</span>台</div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_filter'>区域筛选项:</div>
        <div class='col_box'>
          <div class='col-lg-2'>
          <label for="city" class='col-2'>城市</label>
            <select name="" id="city" class='city_select' :disabled='!isProvince&&!isCity' v-model='selectCity'>
                <option value="320000" v-if='isProvince&&isCity'>全省</option>
                <option :value="city.code" v-for='city of cities' :key='city.code' @change='citycode(city.code)'>{{city.name}}</option>
            </select>
        </div>
        <div class='col-lg-2'>
          <label for="">区/县</label>
            <select name="" id="city" class='city_select' :disabled='!isProvince' v-model='district'>
                <option value="0" v-if='isProvince&&isCity'>全部</option>
                <option :value="area.code" v-for='area of areas' :key='area.code' @change='areacode(area.code)'>{{area.name}}</option>
            </select>
        </div>
        </div> 
        </div>
    </div>
    <div class='secondsearch'>
      <div class='row'>
        <div class="col_filter">
          <div>设备筛选项:</div>
        </div>
        <div class="col_box">
        <div class="col-lg-2">
          <label for="">大类</label>
        <select name="" id="city" class='city_select' v-model='mainDevice'>
              <option value="0">全部</option>
                <option :value="item.id" v-for='item of maintypies' :key='item.code' @change='select(item.code)'>{{item.value}}</option>
            </select>
        </div>
        <div class="col-lg-2">
          <label for="">子&nbsp;类</label>
          <select name="" id="city" class='city_select' v-model='device'>
            <option value="0">全部</option>
                <option :value="item.id" v-for='item of selectType' :key='item.code' @change='select(item.code)'>{{item.value}}</option>
            </select>
        </div>
        <div class="col-lg-2"> 
          <label for="">国产/进口</label>
          <select name="" id="city" class='city_select' v-model='deviceOrigin'>
              <option value="0">全部</option>
              <option value="1">国产</option>
              <option value="2">进口</option>
                
            </select>
        </div>
        <div class="col-lg-2">
          <label for="">厂家</label>
        <input type="text" class='factory'>
        </div>
        </div>
        <div>
          <button type="button" class="search">搜索</button>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import Ajax from "@/components/ajax/ajax_service";
export default {
  data() {
    return {
      selectCity: "320000",
      cities: [],
      isProvince: false,
      isCity: false,
      isArea: false,
      areas: [],
      deviceOrigin: 0,
      maintypies: [],
      typies: [],
      mainDevice: "0",
      device: "0",
      selectType: [],
      district: "0"
    };
  },
  watch: {
    selectCity(newV, oldV) {
      Ajax.getArea({ city: newV })
        .then(res => {
          console.log(res);
          this.areas = res.data.data.list;
        })
        .catch(err => console.log(err));
    },
    mainDevice(newV, oldV) {
      if (newV) {
        this.selectType = [];
        this.typies.forEach((data, index, arr) => {
          if (data.parentId == newV) {
            this.selectType.push(data);
          }
        });
      }
    }
  },
  methods: {},
  props: ["provinceArea", "admin"],
  created() {
    if (!localStorage.getItem("admin")) {
      this.$router.push("/");
      return;
    }
    if (this.admin.type === 2) {
      this.isProvince = true;
      this.isCity = true;
      Ajax.getArea({ province: 320000 })
        .then(res => {
          console.log(res);
          this.cities = res.data.data.list;
        })
        .catch(err => console.log(err));
    }
    Ajax.getDevice({ property: "deviceType" })
      .then(res => {
        console.log(res.data.data);
        res.data.data.forEach((data, index, arr) => {
          if (data.level === 1) {
            this.maintypies.push(data);
          } else if (data.level === 2) {
            this.typies.push(data);
          }
        });
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
}
.firstsearch {
  display: flex;
  height: 5.41rem;
  align-items: center;
}
.secondsearch {
  display: flex;
  height: 5.41rem;
  align-items: center;
  border-top: 1px dashed #cfd0d2;
  border-bottom: 1px solid #cfd0d2;
}
.total_num {
  color: #529ad4;
}
button {
  cursor: pointer;
}
.row {
  height: 3rem;
  line-height: 3rem;
  display: flex;
  width: 100%;
  font-weight: 600;
}
.col-2 {
  width: 3rem;
}
.col_filter {
  width: 10.33%;
  text-align: center;
}
.col-lg-2 select {
  width: 66%;
}
.col_box {
  width: 66.5%;
  display: flex;
}
.col-lg-2 {
  width: 25%;
  text-align: center;
}
option {
  text-align: center;
}
select::-ms-expand {
  display: none;
}
/* --火狐、谷歌清除--*/
select {
  border-radius: 5px;
  box-shadow: 0 -1px 1px -1px #cfd0d2;
  border: 1px solid #cfd0d2;
  height: 3rem;
  padding: 0 15%;
  -moz-appearance: none;
  -webkit-appearance: none;
  background: url("../assets/total.png") no-repeat scroll right center
    transparent;
  outline: none;
}
label {
  margin-right: 1rem;
}
.factory {
  height: 3rem;
  width: 66%;
  padding: 0;
  border: 1px solid #cfd0d2;
  line-height: 2.8rem;
  font-size: 1.33rem;
  box-sizing: border-box;
  outline: none;
  box-shadow: 0 -1px 1px -1px #cfd0d2;
  border-radius: 5px;
}
.search {
  width: 7.5rem;
  height: 3rem;
  border: 0;
  background: linear-gradient(#679ff2, #3c72da);
  box-shadow: 0px 2px 0px 0px #595dd8;
  border-radius: 5px;
  color: #fff;
  box-sizing: border-box;
  outline: none;
  margin-top: -1px;
}
</style>
