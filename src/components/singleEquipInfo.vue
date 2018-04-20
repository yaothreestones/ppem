<template>
<div>
  <modal-euip @cancel='cancel' v-if="isModal"></modal-euip>
    <div class='equip_box'>
    <div class='total'>设备信息
      <span class='operation'>
        <span>操作记录</span>
        <span @click="edit">编辑</span>
      </span>   
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="city">二维码:</label>
                <button type='button' class='city_select newButton'>点击查看</button>
            </div>
            <div class='col-lg-2'>
                <label for="">设备类型:</label>
                <div name="" id="city" class='city_select'>X射线影像诊断设备</div>
            </div>
            <div class='col-lg-2'>
                <label for="">所在场所:</label>
                <div name="" id="city" class='city_select'>介入科</div>
            </div>
            <div class='col-lg-2'>
                <label for="">设备型号:</label>
                <div name="" id="city" class='city_select'>XXXX</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch firstsearch_fixed'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="city">设备编号:</label>
                <div class='city_select'>xxxxx</div>
            </div>
            <div class='col-lg-2'>
                <label for="">设备值:</label>
                <div name="" id="city" class='city_select'>xxxx</div>
            </div>
            <div class='col-lg-2'>
                <label for="">生产厂家:</label>
                <div name="" id="city" class='city_select'>xxxx</div>
            </div>
            <div class='col-lg-2'>
                <label for="">放射诊疗项目:</label>
                <div name="" id="city" class='city_select'>xxxxxx</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch firstsearch_fixed'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="city">防护检测合格日期:</label>
                <div type='button' class='city_select '>xxxxx</div>
            </div>
            <div class='col-lg-2'>
                <label for="">防护检测机构:</label>
                <div name="" id="city" class='city_select'>xxxxx</div>
            </div>
            <div class='col-lg-2'>
                <label for="">防护检测报告:</label>
                <div type='button'  class='city_select'>点击查看</div>
            </div>
            <div class='col-lg-2'>
                <label for="">注册登记开始时间:</label>
                <div name="" id="city" class='city_select'>xxxxx</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch firstsearch_fixed'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="city">防护检测时间:</label>
                <div type='button' class='city_select'>xxxxxx</div>
            </div>
            <div class='col-lg-2'>
                <label for="">防护检测结果:</label>
                <div name="" id="city" class='city_select'>我是地址</div>
            </div>
            <div class='col-lg-2'>
                <label for="">防护检测报告:</label>
                <button name="" id="city" class='city_select newButton'>2018-4-14</button>
            </div>
            <div class='col-lg-2'>
                <label for="">性能检测时间:</label>
                <div name="" id="city" class='city_select'>我是单位类别</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch firstsearch_fixed'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="city">性能检测结果:</label>
                <div type='button' class='city_select'>点击查看</div>
            </div>
            <div class='col-lg-2'>
                <label for="">性能检测报告:</label>
                <div name="" id="city" class='city_select'>我是地址</div>
            </div>
            <div class='col-lg-2'>
                <label for="city">主要参数:</label>
                <div type='button' class='city_select'>点击查看</div>
            </div>
            <div class='col-lg-2'>
                <label for="">设备图片:</label>
                <div name="" id="city" class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    </div>
</div>
</template>
<script>
import modalEuip from "@/components/modal_equip";
export default {
  data() {
    return {
      showAll: ["更多", "更多"],
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
      isshow: [false, false],
      isModal: false
    };
  },
  components: {
    modalEuip
  },
  methods: {
    edit() {
      this.isModal = true;
      document.getElementsByTagName("body")[0].style = "overflow:hidden";
    },
    cancel() {
      this.isModal = false;
      document.getElementsByTagName("body")[0].style = "";
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
    }
  }
};
</script>
<style scoped>
.equip_box {
  margin: 1.33rem;
}
.city_select {
  width: 60%;
  background: url("../assets/infoshow.png") repeat-x right bottom;
  background-size: auto 100%;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-radius: 5px;
}
.total {
  font-size: 16px;
  position: relative;
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
  height: 8.83rem;
  align-items: center;
  border-left: 1px solid #cfd0d2;
  border-right: 1px solid #cfd0d2;
  padding: 0 2rem;
  border-bottom: 1px solid #cfd0d2;
}
.firstsearch_fixed {
  border-radius: 0 0 5px 5px;
}
.row {
  height: 3rem;
  line-height: 3rem;
  display: flex;
  width: 100%;
  font-weight: 600;
}
.col_box {
  width: 90%;
  margin: auto;
  display: flex;
}
.newButton {
  background: url("../assets/button.png") repeat-x right center;
  background-size: auto;
  border: 0;
  border-radius: 10px;
  color: #fff;
  outline: none;
  width: 46%;
}
.col-lg-2 {
  width: 25%;
  text-align: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
}
label {
  margin-right: 1rem;
}
.operation {
  position: absolute;
  right: 1rem;
}
.operation span {
  cursor: pointer;
}
</style>
