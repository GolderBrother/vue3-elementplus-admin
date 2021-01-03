<template>
  <div id="nav">
    <layout />
  </div>
</template>
<script>
import layout from "@/layout/index.vue";
export default {
  components: {
    layout
  }
};
</script>
<style lang="scss">
// @import "@/common/style/variable.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  .el-button--primary {
    background: $menuActiveText; // button 主题色保持一致
    border-color: $menuActiveText;
    &.is-plain {
      color: #fff;
    }
  }
}
</style>
