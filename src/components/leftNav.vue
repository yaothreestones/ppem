<template>
<ol class='leftNavlist'>
    <li v-for='list of lists' :key='list.id' class='leftNavlist_li' :class='{select:isactive[list.id-1],border_bottom:list.id===lists[lists.length-1].id}'>
        <div @click='select(list.id)' class='top_select' :class='{change_border_bottom:isactive[list.id-1],cborder_bottom:list.id===lists[lists.length-1].id}'>
            {{list.name}}
        </div>
        <ol :class='{ol_show:!isactive[list.id-1]}' class='transtion'>
            <li v-for='item of list.children' :key='item.cid' class='list_show' @click="child_select(item.cid)" :class='{color_change:Cisactive[item.cid-1]}'>{{item.name}}</li>
        </ol>
    </li> 
</ol>
</template>

<script>
export default {
  data() {
    return {
      isactive: [],
      lists: [],
      Cisactive: []
    };
  },
  mounted() {
    this.lists = [
      {
        id: 1,
        name: "机构信息",
        children: [{ cid: 1, name: "医疗机构信息" }]
      },
      {
        id: 2,
        name: "设备信息",
        children: [{ cid: 7, name: "医疗设备信息" }]
      },
      {
        id: 3,
        name: "统计分析",
        children: [
          { cid: 2, name: "区域统计分析" },
          // { cid: 3, name: "市级统计分析" },
          // { cid: 4, name: "区级统计分析" },
          { cid: 5, name: "厂商统计分析" },
          { cid: 6, name: "类型统计分析" }
        ]
      },

      {
        id: 4,
        name: "字典说明",
        children: [{ cid: 8, name: "设备厂商    " }]
      }
    ];
    for (let i = 0; i < this.lists.length; i++) {
      this.isactive.push(false);
    }
    var Cisactive = [];
    console.log(Cisactive.length);
    this.lists.filter((data, i, arr) => {
      if (data.children) {
        Cisactive.length += data.children.length;
      }
    });
    Cisactive.fill(false);
    console.log(Cisactive);
    this.Cisactive = Cisactive;
  },
  methods: {
    select(x) {
      this.isactive.filter((data, i, arr) => {
        x - 1 != i ? (arr[i] = false) : "";
      });
      console.log(this.isactive);
      this.$set(this.isactive, x - 1, !this.isactive[x - 1]);
    },
    child_select(x) {
      console.log(x);
      this.Cisactive.filter((data, i, arr) => {
        x - 1 != i ? (arr[i] = false) : "";
      });
      this.$set(this.Cisactive, x - 1, !this.Cisactive[x - 1]);
      this.$router.push(this.child_routerGo(x));
    },
    child_routerGo(x) {
      switch (x) {
        case 1:
          return "/backStage/equipment/hospital/1/2/3/4/1/1/1/1";
          break;
        case 2:
          return "/backStage/total/province";
          break;
        case 3:
          return "/backStage/total/city";
          break;
        case 4:
          return "/backStage/total/area";
          break;
        case 5:
          return "/backStage/total/manufacturer";
          break;
        case 6:
          return "/backStage/total/type";
          break;
        case 7:
          return "/backStage/organization/equip";
          break;
        case 8:
          return "/backStage/dictionary/dictionaryinfo";
          break;
      }
    }
  }
};
</script>

<style scoped>
.top_select {
  line-height: 6rem;
  font-size: 1.33rem;
  border-bottom: 1px solid #50557d;
  border-top: 2px solid #50557d;
}
.leftNavlist {
  padding: 0;
  padding-top: 12.5rem;
  margin: 0;
  /* background-color: #444875; */
  color: #fff;
  box-sizing: border-box;
  padding-bottom: 3000px;
  margin-bottom: -3000px;
  overflow: hidden;
  background: url("../assets/leftbg.png") repeat-y right center;
  background-size: 100% auto;
}
.leftNavlist_li {
  cursor: pointer;
  text-align: center;
  min-height: 6rem;
  border-top: 1px solid #31365e;
}
.change_border_bottom {
  border-bottom: 1px solid #31365e;
}
.border_bottom {
  border-bottom: 2px solid #31365e;
}
.cborder_bottom {
  border-bottom: 2px solid #50557d;
}
ol {
  padding: 0;
  margin: 0;
  margin-top: -1px;
}
.list_show {
  text-align: left;
  padding-left: 7rem;
  height: 3rem;
  line-height: 3rem;
  font-size: 1.16rem;
}

.transtion {
  transition: all 0.3s ease;
  overflow: hidden;
}
.ol_show {
  height: 0;
}
.select {
  background-color: #2b324f;
}
.color_change {
  color: #0399ce;
}
</style>
