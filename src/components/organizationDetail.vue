<template>
<div>
    <modal v-if="isModal" @cancel='cancel'></modal>
    <div class='total'>机构信息
        <div class='rightbutton'>
            <span>记录</span>
            <span @click="edit">编辑</span>
            <span @click='droplist'>收起</span>
        </div> 
    </div>
    <div class='droplist' :class='{drop:isdrop}'>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="city">在岗职工数:</label>
                <div name=""  class='city_select'>我是在岗人数</div>
            </div>
            <div class='col-lg-2'>
                <label for="">单位类别:</label>
                <div name=""  class='city_select'>我是机构名称</div>
            </div>
            <div class='col-lg-2'>
                <label for="">上岗前:检出职业禁忌人数:</label>
                <div name=""  class='city_select'>我是注册地址</div>
            </div>
            <div class='col-lg-2'>
                <label for="">注册地址:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2'>
                <label for="city">放射诊疗许可证号:</label>
                <button type='button' class='city_select newButton'>点击查看</button>
                
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">在岗期间:应体检人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">注册地址行政区划代码:</label>
                <div name=""  class='city_select'>2018-4-14</div>
            </div>
            <div class='col-lg-2'>
                <label for="">校验日期:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2 col-lg-2-fixed'>
                <label for="">在岗期间:实体检人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">地址:</label>
                <div name=""  class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">放射诊疗许可证申请类别:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">在岗期间:检出疑似放射病病人:</label>
                <div name=""  class='city_select'>2018-4-14</div>
            </div>
            <div class='col-lg-2'>
                <label for="">地址行政区划代码:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2 col-lg-2-fixed'>
                <label for="">行政许可机关名称:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">在岗期间:检出职业禁忌或健康损害人数:</label>
                <div name=""  class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">社会信用代码:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">个人剂量应监测人数:</label>
                <div name=""  class='city_select'>2018-4-14</div>
            </div>
            <div class='col-lg-2'>
                <label for="">在岗期间:调离人数:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2 col-lg-2-fixed'>
                <label for="">经济类型代码:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">建立放射工作人员职业健康监护档案人数:</label>
                <div name=""  class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">离岗时:应体检人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">法定代表人(负责人):</label>
                <div name=""  class='city_select'>2018-4-14</div>
            </div>
            <div class='col-lg-2'>
                <label for="">上岗前:应体检人数:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2 col-lg-2-fixed'>
                <label for="">离岗时:实体检人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">身份证件类型:</label>
                <div name=""  class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">上岗前:实体检人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">离岗时:检出疑似放射病病人数:</label>
                <div name=""  class='city_select'>2018-4-14</div>
            </div>
            <div class='col-lg-2'>
                <label for="">证件号码:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2 col-lg-2-fixed'>
                <label for="">上岗前培训人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">建立放射工作人员个人剂量检测档案人数:</label>
                <div name=""  class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">机构名称:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">在岗培训人数:</label>
                <div name=""  class='city_select'>2018-4-14</div>
            </div>
            <div class='col-lg-2'>
                <label for="">个人剂量应检测人数:</label>
                <div name=""  class='city_select'>我是单位类别</div>
            </div>
            <div class='col-lg-2 col-lg-2-fixed'>
                <label for="">放射工作人员数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
            <div class='col-lg-2'>
                <label for="">个人剂量大于等于20msv人数:</label>
                <div name=""  class='city_select'>我是地址</div>
            </div>
        </div> 
      </div>
    </div>
    <div class='firstsearch firstsearch_fixed'>
      <div class='row'>
        <div class='col_box'>
            <div class='col-lg-2'>
                <label for="">实监测人数:</label>
                <div name=""  class='city_select'>12312312</div>
            </div>
        </div> 
      </div>
    </div>
    </div>
</div>
</template>
<script>
import modal from "@/components/modal";
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
      isdrop: false,
      isModal: false
    };
  },
  components: {
    modal
  },
  methods: {
    edit() {
      this.isModal = true;
      document.getElementsByTagName("body")[0].style = "overflow:hidden";
    },
    cancel() {
      this.isModal = false;
      document.getElementsByTagName("body")[0].style = '';
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
    droplist() {
      this.isdrop = !this.isdrop;
    }
  }
};
</script>
<style scoped>
.droplist {
  height: calc(10.82rem + 2px);
  overflow: hidden;
  transition: height 0.3s ease;
}
.drop {
  height: 44rem;
}
.city_select {
  width: 11.8rem;
  background: url("../assets/infoshow.png") repeat-x right bottom;
  background-size: auto 100%;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  border-radius: 5px;
  line-height: 3rem;
}
.city_select_fixed {
  width: 48%;
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
  padding: 0 2rem;
  border-bottom: 1px solid #cfd0d2;
}
.firstsearch_fixed {
  border-radius: 0 0 5px 5px;
}
.row {
  width: 100%;
  font-weight: 600;
}
.col_box {
  width: 100%;
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
  width: 20%;
  text-align: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.col-lg-2-fixed {
  flex: 1.3;
}
label {
  margin: 0 0.5rem;
  width: 8rem;
}
.showAll {
  height: 10rem;
}
.rightbutton {
  float: right;
}
.rightbutton span {
  cursor: pointer;
}
</style>
