<template>
<div class='head_box'>
    <header>
      <div class='title'>
        <img src="" alt="图标">
        <h1>江苏省放射诊疗设备管理</h1>
      </div>
        <div class='userinfo'>
          <img src="" alt="头像">
          <div>xxx 您好！</div>
          <button @click='loginOut' class='logout'>退出</button>
        </div>  
    </header>
    <div class='backstage_location'>
      <span class='back' @click='goback' v-if='isShow'>《</span>
      <span v-if='titleArr[2]' :class='{title_right:isShow}'>
        <span class='thirdtitle'>当前位置:</span>&nbsp;<span  class='thirdtitle'>{{titleArr[1] | firstTitle}}</span>&nbsp;/&nbsp;<span  class='thirdtitle'>{{titleArr[2] | secondTitle}}&nbsp;</span>/&nbsp;<span class='thirdtitle thirdtitle_fixed'>{{titleArr[3] | thirdTitle}}</span>
      </span>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: this.$route.fullPath,
      titleArr: [],
      isShow: false
    };
  },
  methods: {
    loginOut() {
      this.$router.push("/login");
    },
    goback() {
      this.$router.go(-1);
    }
  },
  filters: {
    firstTitle: function(x) {
      switch (x) {
        case "backStage":
          return "首页";
      }
    },
    secondTitle: function(x) {
      switch (x) {
        case "equipment":
          return "机构信息";
          break;
        case "organization":
          return "设备信息";
          break;
        case "total":
          return "统计信息";
          break;
        case "dictionary":
          return "字典说明";
          break;
      }
    },
    thirdTitle: function(x) {
      switch (x) {
        case "hospital":
          return "医疗机构信息";
          break;
        case "hospitaldetail":
          return "医疗机构完整信息";
          break;
        case "singleequipdetail":
          return "医疗设备完整信息";
          break;
        case "equip":
          return "医疗设备信息";
          break;
        case "province":
          return "区域统计分析";
          break;
        case "manufacturer":
          return "厂商统计分析";
          break;
        case "type":
          return "类型统计分析";
          break;
        case "dictionaryinfo":
          return "设备厂商";
          break;
      }
    }
  },
  created() {
    this.titleArr = this.title.split("/");
  },
  watch: {
    $route: function(newV, oldV) {
      if (newV) {
        this.title = newV.fullPath;
        this.titleArr = this.title.split("/");
      }
    },
    title: function(newV, oldV) {
      if (this.titleArr[3]) {
        if (
          this.titleArr[3] === "singleequipdetail" ||
          this.titleArr[3] === "hospitaldetail"
        ) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
      }
    }
  }
};
</script>

<style scoped>
.head_box {
  height: 12.5rem;
}
header {
  display: flex;
  align-items: center;
  height: 9rem;
  background-color: #ebeffa;
  justify-content: space-between;
}
h1 {
  text-align: left;
  letter-spacing: 2px;
  color: #444875;
}
.title_right {
  position: relative;
  left: 5rem;
}
.backstage_location {
  height: 3.5rem;
  background-color: #ebeffa;
  border-top: 1px solid #d1d1d9;
  border-bottom: 1px solid #d1d1d9;
  line-height: 3.5rem;
  padding-left: 1.33rem;
  position: relative;
}
.userinfo {
  display: flex;
  align-items: center;
}
.logout {
  border: 0;
  outline: none;
  margin: 0 7.5rem 0 3rem;
  padding: 0;
  background: transparent;
}
.title {
  display: flex;
  align-items: center;
  margin-left: 2rem;
}
.thirdtitle {
  font-weight: 600;
}
.thirdtitle_fixed {
  color: #36266d;
  font-weight: 600;
}
.back {
  width: calc(6.25rem - 1.33rem);
  text-align: center;
  position: absolute;
  left: 0;
  border-right: 1px solid #d1d1d9;
}
</style>
