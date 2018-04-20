<template>
<div>
    <div class='total'>查询条件</div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
          <div class='col-lg-2'>
          <label for="city" class='col-2'>城&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;市:</label>
            <select name="" id="city" class='city_select' v-model='selectCity'>
                <option value="320000" v-if='isProvince&&isCity'>全省</option>
                <option :value="city.code" v-for='city of cities' :key='city.code' @change='citycode(city.code)'>{{city.name}}</option>
                <!-- <option value="320000">全省</option>
                <option :value="city.code" v-for='city of citys' :key='city.code' @change='select(city.code)'>{{city.name}}</option> -->
            </select>
        </div>
        <div class='col-lg-2'>
          <label for="">区/县:</label>
            <select name="" id="city" class='city_select' v-model='district'>
              <option value="0" v-if='isProvince&&isCity'>全部</option>
                <option :value="area.code" v-for='area of areas' :key='area.code' @change='areacode(area.code)'>{{area.name}}</option>
                <!-- <option value="" v-for='city of citys' :key='city.id' @change='select(city.id)'>{{city.name}}</option> -->
            </select>
        </div>
        <div class='col-lg-2'>
          <label for="">单位类别:</label>
            <select name="" id="city" class='city_select'>
                <option value="" v-for='city of cities' :key='city.id' @change='select(city.id)'>{{city.name}}</option>
            </select>
        </div>
        </div> 
        </div>
    </div>
    <div class='secondsearch'>
      <div class='row'>
        <div class="col_box">
        <div class="col-lg-2">
          <label for="">进口/国产:</label>
          <select name="" id="city" class='city_select' v-model='deviceOrigin'>
                <option value="0">全部</option>
                <option value="2">进口</option>
                <option value="1">国产</option>
            </select>
        </div>
        <div class="col-lg-2">
          <label for="">厂&nbsp;家:</label>
        <input type="text" class='factory'>
        </div>
        <div class="col-lg-2">
          <label for="">机构名称:</label>
        <input type="text" class='factory'>
        </div>
        </div>
        <div>
          <button type="button" class="search">搜索</button>
        </div>
      </div>
    </div>
    <div class='thirdsearch ' :class='{showAll:isshow[0]}'>
      <div class='economic_row'>
        <div class="economic_type">
        <div class="col-lg-2 type_item">
          <span class='searchfont'>经济类型:</span>
        </div>
        <div class="col-lg-2 type_item" v-for='(list,index) of economicType' :key='index'>
          <span :class='{selected:isSelect1[index]}' @click='select(1,index)' class='select_defaultstyle'>{{list.name}}</span>
        </div>
        </div>
        <div class='chooseButton'>
            <span @click='more(0)' class='chooseMore chooseAll' :class='{selected:this.isshow[0]===false}'>{{showAll[0]}}</span>
            <span class='chooseAll' :class='{selected:selectAll1}'  @click='selectAll(1)'>全部</span>
        </div>
      </div>
    </div>
    <div class='thirdsearch thirdsearch_bottom' :class='{showAll:isshow[1]}'>
      <div class='economic_row'>
        <div class="economic_type">
        <div class="col-lg-2 type_item">
          <span class='searchfont'>许可证申请类别:</span>
        </div>
        <div class="col-lg-2 type_item" v-for='(list,index) of lists2' :key='index'>
          <span :class='{selected:isSelect2[index]}' @click='select(2,list.id)' class='select_defaultstyle'>{{list.name}}</span>
        </div>
        </div>
        <div class='chooseButton'>
            <span @click='more(1)' class='chooseAll chooseMore' :class='{selected:this.isshow[1]===false}'>{{showAll[1]}}<span></span></span>
            <span class='chooseAll' :class='{selected:selectAll2}' @click='selectAll(2)'>全部</span>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import Ajax from "@/components/ajax/ajax_service";
import Store from "@/components/store";
export default {
  data() {
    return {
      selectCity: "320000",
      lists1: [],
      lists2: [],
      selectAll1: false,
      selectAll2: false,
      isSelect1: [],
      isSelect2: [],
      showAll: ["更多", "更多"],
      citys: [],
      isshow: [false, false],
      isProvince: false,
      isCity: false,
      isArea: false,
      deviceOrigin: "0",
      district: "0",
      cities: [],
      areas: [],
      economicType:[]
    };
  },
  created() {
    if (Store.state.admin.type === 2) {
      this.isProvince = true;
      this.isCity = true;
      //获得城市
      Ajax.getArea({ province: 320000 })
        .then(res => {
          console.log(res);
          this.cities = res.data.data.list;
        })
        .catch(err => console.log(err));
    }
    Ajax.getDevice({ property: 'economicType' })
      .then(res => {
        console.log('经济类型',res);
        this.economicType = res.data.data;
        this.isSelect1 = new Array(this.economicType.length).fill(false)
      })
      .catch(err => console.log(err));
  },
  Store,
  watch: {
    //监视城市选择获取对应区/县
    selectCity(newV, oldV) {
      Ajax.getArea({ city: newV })
        .then(res => {
          console.log(res);
          this.areas = res.data.data.list;
        })
        .catch(err => console.log(err));
    }
  },
  mounted() {
    this.isSelect1.length = this.lists1.length;
    this.isSelect1.fill(false);
    this.isSelect2.length = this.lists2.length;
    this.isSelect2.fill(false);
  },
  methods: {
    selectAll(x) {
      if (x === 1) {
        this.selectAll1 = true;
        this.isSelect1.filter((data, index, arr) => {
          this.$set(arr, index, false);
        });
      } else {
        this.selectAll2 = true;
        this.isSelect2.filter((data, index, arr) => {
          this.$set(arr, index, false);
        });
      }
    },
    more(x) {
      if (x === 0) {
        this.$set(this.isshow, 0, !this.isshow[0]);
        this.isshow[0] == true
          ? this.$set(this.showAll, 0, "收起")
          : this.$set(this.showAll, 0, "更多");
      } else {
        this.$set(this.isshow, 1, !this.isshow[1]);
        this.isshow[1] == true
          ? this.$set(this.showAll, 1, "收起")
          : this.$set(this.showAll, 1, "更多");
      }
    },
    select(type, id) {
      if (type === 1) {
        this.isSelect1.filter((data, index, arr) => {
          id  == index
            ? this.$set(this.isSelect1, index, true)
            : this.$set(this.isSelect1, index, false);
          this.selectAll1 = false;
        });
      } else {
        this.isSelect2.filter((data, index, arr) => {
          id  == index
            ? this.$set(this.isSelect2, index, true)
            : this.$set(this.isSelect2, index, false);
          this.selectAll2 = false;
        });
      }
    }
  }
};
</script>
<style scoped>
.select_defaultstyle {
  cursor: pointer;
  color: #434343;
  font-weight: 500;
}
.selected {
  color: #529ad4;
}
.searchfont {
  color: #999;
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
button {
  cursor: pointer;
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
