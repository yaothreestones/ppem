<template>
  <div class="x-bar">
    <div :id="id"
    :option="option" :fn='fn' :fn1='fn1'></div>
  </div>
</template>

<script>
import HighCharts from "highcharts";
import variablePie from "highcharts/js/modules/variable-pie";
export default {
  data() {
    return {
      chart:''
    };
  },
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    },
    fn: {
      type: Function
    },
    fn1: {
      type:Function
    }
  },
  methods: {
    
  },
  watch: {
    option(newV, oldV) {
      if (newV) {
        console.log(newV);
        this.option = newV;
        this.chart = new HighCharts.Chart(this.id, this.option, this.fn);
      }
    },
    deep: true
  }
};
</script>

<style scoped>
.x-bar {
  width: calc(50% - 1px);
}
</style>
