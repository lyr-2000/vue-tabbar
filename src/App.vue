<template>
  <div id="app">
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  /* 从component导入组件 必须到 当前组件的component 注册了 才能使用 */

  export default {
    name: 'App',
    components:{
      TabBar
    }
  }
</script>

<style>



  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
