<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body {
  margin: 0;
  font-size: 12px;
  width:100%;
  height: 100%;
  font-family: "微软雅黑",Arial;
}
h1,h2 {
  margin: 0
}
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing:border-box
}
</style>
