<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>当前计数： {{counter}}</h2>

    <button @click="incr">+</button>
    <button @click="decr">-</button>

    <show :name="hssfasf "></show>
    <div>hello</div>

  </div>
</template>

<script>
import Show from "./Show";
export default {

  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      counter: 0
    }
  },
  component() {
    Show
  },
  methods:{
    incr:function () {
      console.log("添加");
      this.counter++;
    },
    decr:function () {
      console.log("减少");
      this.counter--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
