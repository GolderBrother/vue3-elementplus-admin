<template lang="pug">
el-menu(
  class="el-menu-vertical-demo"
  :collapse="state.controls.isCollapse"
  :collapse-transition="false"
  router
  :default-active="$route.path"
  :background-color="variables.menuBg"
  @select="menuSelect"
  :text-color="variables.menuText"
  :active-text-color="variables.menuActiveText"
)
  <el-header class="header-logo">
    <h1 class="header-title">样本管理平台</h1>
  </el-header>
  Sidebar(:item="routes" basePath="")
</template>

<script lang="ts">
import { useStore } from "vuex";
// import { useRoute } from "vue-router";
// import { ref, onMounted } from "vue";
import Sidebar from "./Sidebar.vue";
import { useDynamicRoutesHook } from "@/composition/useTagViewApi.ts";
import variables from "@/common/style/variable.scss";
export default {
  props: ["routes"],
  setup() {
    const store = useStore();
    // const route = useRoute();
    const { dynamicRouteTags } = useDynamicRoutesHook();
    function menuSelect(index: string) {
      let parentPath = "";
      const parentPathIndex = index.lastIndexOf("/");
      if (parentPathIndex > 0) {
        parentPath = index.slice(0, parentPathIndex);
      }
      dynamicRouteTags(index, parentPath);
    }
    return {
      state: store.state,
      menuSelect,
      variables
    };
  },
  components: {
    Sidebar
  }
};
</script>
<style lang="scss" scoped>
.el-header {
  .header-title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    line-height: 2;
    font-size: 22px;
  }
}
</style>
