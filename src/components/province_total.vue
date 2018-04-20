<template>
<div>
  <h1>
      <x-chart :id='id1' :option='option1' :fn='fn1' class='chart' :fn1='fn2'></x-chart>
      <x-chart :id='id2' :option='option2' class='chart'></x-chart>
  </h1>
  <div>
    <ul>
      <li class='title'>
        <span>序号</span>
        <span v-if='isCity'>市级单位</span>
        <span>机构名称</span>
        <span v-if='isCity'>医疗机构数量</span>
        <span>放射诊疗设备数量</span>
      </li>
      <li v-for='(item,index) in items' :key='item.id' :class='{bgcolor:index%2==0?false:true}'>
        <span>{{index+1}}</span>
        <span @click='choosename()' class='link'><span>{{item.name}}</span></span>
        <span @click='choosename()' class='link' v-if='isCity'><span>{{item.name}}</span></span>
        <span @click='choosenum1()' class='link' v-if='isCity'><span>{{item.insNum}}</span></span>
        <span @click='choosenum2()' class='link'><span>{{item.deviceNum}}</span></span>
      </li>
    </ul>
  </div>
</div>
  
</template>
<script>
import Ajax from "@/components/ajax/ajax_service";
import XChart from "@/components/highcharts";
import options from "./options";
export default {
  data() {
    return {
      id1: "test",
      option1: {},
      id2: "test1",
      option2: {},
      deviceNum: 0,
      instNum: 0,
      isProvice: false,
      isCity: false,
      isArea: false,
      items: [],
      fn1: options.fn1,
      cities: [],
      data: "",
      fn2:options.fn2
    };
  },
  props: ["provinceArea", "admin"],
  components: {
    XChart
  },
  watch: {
    data(newV, oldV) {
      if (newV) {
        this.option1 = options.instance(
          "variablepie",
          "江苏卫监",
          "扇区长度（圆周方法）表示设备数量，宽度（纵向）表示机构数量",
          newV
        );
        this.option2 = options.instance(
          "bar",
          "江苏卫监",
          "扇区长度（圆周方法）表示设备数量，宽度（纵向）表示机构数量",
          newV
        );
      }
    }
  },
  methods: {
    choosename() {},
    choosenum1() {},
    choosenum2() {}
  },
  created() {
    if (this.admin.district) {
    }
    Ajax.getArea({ province: "320000" }).then(res => {
      this.cities = res.data.data.list;
      this.data = new Array(this.cities.length).fill({ y: 1, z: 1 });
      for (let city of this.cities.entries()) {
        this.data[city[0]] = Object.assign({}, this.data[city[0]], {
          name: city[1].name,
          y: city[1].deviceNum,
          z: city[1].instNum
        });
      }
    });
    Ajax.getInst({
      city: null, //市编码 ,
      classification: null, //单位类别 ,
      district: null, //区编码 ,
      economicTypeCode: null, // 经济类型 ,
      end: null, //校验日期-结束，格式：yyyy-MM-dd ,
      instId: null, //机构ID ,
      instName: null, //机构名称 ,
      page: 1, // 页码 ,
      province: null, //省编码 ,
      size: 10, //每页大小 ,
      start: null //校验日期-开始，格式：yyyy-MM-dd
    })
      .then(res => {
        console.log(res);
        this.items = res.data.data.list;
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {}
};
</script>
<style scoped>
.chart {
  height: 400px;
}
ul {
  padding: 0;
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
button {
  cursor: pointer;
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
