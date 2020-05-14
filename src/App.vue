<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/home"><div slot="item-text">首页</div></tab-bar-item>
      <tab-bar-item path="/category"><div slot="item-text">分类</div></tab-bar-item>
      <tab-bar-item path="/cart"><div slot="item-text">购物车</div></tab-bar-item>
      <tab-bar-item path="/profile"><div slot="item-text">个人</div></tab-bar-item>


    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";
  /* 从component导入组件 必须到 当前组件的component 注册了 才能使用 */

  export default {
    name: 'App',
    components:{
      TabBar,
      TabBarItem
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
