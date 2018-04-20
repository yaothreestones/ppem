<template>
<div>
    <div class='total'>查询条件</div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
          <div class='col-lg-2'>
          <label for="city" class='col-2'>城&nbsp;&nbsp;&nbsp;&nbsp;市:</label>
            <select name="" id="city" class='city_select'>
                <option value="" v-for='city of citys' :key='city.id' @change='select(city.id)'>{{city.name}}</option>
            </select>
        </div>
        <div class='col-lg-2'>
          <label for="">区/县:</label>
            <select name="" id="city" class='city_select'>
                <option value="" v-for='city of citys' :key='city.id' @change='select(city.id)'>{{city.name}}</option>
            </select>
        </div>
        <div class="col-lg-2">
          <label for="">进/出口:</label>
        <select name="" id="city" class='city_select'>
                <option value="" v-for='city of citys' :key='city.id' @change='select(city.id)'>{{city.name}}</option>
            </select>
        </div>
        <div class="col-lg-2">
          <label for="">机构名称:</label>
        <input type="text" class='factory'>
        </div>
        <div>
          <button type="button" class="search">搜索</button>
        </div>
        </div> 
        </div>
    </div>
    <div class='thirdsearch ' :class='{showAll:isshow[0]}'>
      <div class='economic_row'>
        <div class="economic_type">
        <div class="col-lg-2 type_item">
          <span class=''>设备类型:</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        </div>
        <div class='chooseButton'>
            <span @click='more(0)' class='chooseMore chooseAll'>{{showAll[0]}}</span>
            <span class='chooseAll'>全部</span>
        </div>
      </div>
    </div>
    <div class='thirdsearch ' :class='{showAll:isshow[1]}'>
      <div class='economic_row'>
        <div class="economic_type">
        <div class="col-lg-2 type_item">
          <span class=''>设备子类:</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        </div>
        <div class='chooseButton'>
            <span @click='more(1)' class='chooseMore chooseAll'>{{showAll[1]}}</span>
            <span class='chooseAll'>全部</span>
        </div>
      </div>
    </div>
    <div class='thirdsearch ' :class='{showAll:isshow[2]}'>
      <div class='economic_row'>
        <div class="economic_type">
        <div class="col-lg-2 type_item">
          <span class=''>设备厂家:</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        </div>
        <div class='chooseButton'>
            <span @click='more(2)' class='chooseMore chooseAll'>{{showAll[2]}}</span>
            <span class='chooseAll'>全部</span>
        </div>
      </div>
    </div>
    <div class='thirdsearch thirdsearch_bottom' :class='{showAll:isshow[3]}'>
      <div class='economic_row'>
        <div class="economic_type">
        <div class="col-lg-2 type_item">
          <span class=''>设备型号:</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        <div class="col-lg-2 type_item">
          <span >国有全资</span>
        </div>
        </div>
        <div class='chooseButton'>
            <span @click='more(3)' class='chooseAll chooseMore'>{{showAll[3]}}<span></span></span>
            <span class='chooseAll'>全部</span>
        </div>
      </div>
    </div>
      
</div>
</template>
<script>
export default {
  data() {
    return {
      showAll: ["更多", "更多", "更多", "更多"],
      citys: [
        { id: 0, name: "全省" },
        { id: 1, name: "南京" },
        { id: 2, name: "无锡" },
        { id: 3, name: "徐州" },
        { id: 4, name: "常州" },
        { id: 5, name: "全部" },
        { id: 6, name: "全部" },
        { id: 7, name: "全部" },
        { id: 8, name: "全部" },
        { id: 9, name: "全部" },
        { id: 10, name: "全部" }
      ],
      isshow: [false, false,false,false]
    };
  },
  methods: {
    more(x) {
        this.$set(this.isshow, x, !this.isshow[x]);
        this.isshow[x] == true
          ? this.$set(this.showAll, x, "收起")
          : this.$set(this.showAll, x, "更多");
    }
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
.firstsearch {
  display: flex;
  height: 5.41rem;
  align-items: center;
  border-left: 1px solid #cfd0d2;
  border-right: 1px solid #cfd0d2;
}
.secondsearch {
  display: flex;
  height: 5.41rem;
  align-items: center;
  border-top: 1px dashed #cfd0d2;
  border-left: 1px solid #cfd0d2;
  border-right: 1px solid #cfd0d2;
}
button {
    cursor: pointer;
}
.thirdsearch {
  overflow: hidden;
  height: 4.5rem;
  border-top: 1px dashed #cfd0d2;
  transition: height 0.3s ease;
  border-left: 1px solid #cfd0d2;
  border-right: 1px solid #cfd0d2;
}
.thirdsearch_bottom {
  border-bottom: 1px solid #cfd0d2;
  margin-bottom: 3.5rem;
  border-radius: 0 0 5px 5px;
}
.total_num {
  color: #529ad4;
}
.row {
  height: 3rem;
  line-height: 3rem;
  display: flex;
  width: 100%;
  font-weight: 600;
}
.economic_row {
  height: 4.5rem;
  line-height: 4.5rem;
  display: flex;
  width: 100%;
  font-weight: 600;
}
.economic_row div {
  text-align: left;
  padding-left: 1rem;
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
  width: 75.5%;
  display: flex;
  margin-left: 1rem;
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
.economic_type {
  width: 80%;
}
.type_item {
  float: left;
}
.showAll {
  height: 10rem;
}
.chooseMore {
  margin-right: 1.3rem;
}
.chooseAll {
  width: 6rem;
  height: 2.5rem;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 2.5rem;
  margin-right: 1.3rem;
  border-radius: 5px;
  cursor: pointer;
}
.chooseButton {
  display: flex;
  align-items: center;
}
</style>
