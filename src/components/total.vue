<template>
<div class='total_style'>
    <search :provinceArea='provincearea' :admin='admin'></search>
    <router-view :provinceArea='provincearea' :admin='admin'></router-view>
</div>
  
</template>
<script>
import search from "@/components/total_search";
export default {
  data() {
    return {};
  },
  components: {
    search
  },
  props: ["provincearea", "admin"],
  created() {
    
  }
};
</script>
<style scoped>
.total_style {
  margin: 1.33rem;
  border: 1px solid #cfd0d2;
  border-radius: 0.5rem;
}
</style>
