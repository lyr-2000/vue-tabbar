<template>
  <div class="tab-bar-item">
<!--    <slot name="item-icon"></slot>-->
    <div :class="{redFont: isRed}" @click="itemClick">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        data() {
          return {
            isRed: false
          };
        },
       props:{
         path: String
       },
       methods:{
          changeColor(){
            // this.isRed = !this.isRed;
          },
         itemClick() {
            this.$router.push(this.path)
         }
       }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;/* 一般都是49 ，ios ,android ,移动端*/
  }
  .redFont{
    color:red;
  }

</style>
