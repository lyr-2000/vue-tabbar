<template>
  <div>
    <article>
      hello  {{name}}}
    </article>
  </div>


</template>


<script>
  export default {
    name: 'Show',
    props:['name'],
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        counter: 0
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
