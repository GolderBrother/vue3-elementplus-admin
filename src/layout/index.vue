<template>
  <div id="main">
    <el-container>
      <el-aside>
        <Sidebar :routes="routes"></Sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <Head></Head>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
              <component class="view" :is="Component"></component>
            </transition>
          </router-view>
          <Drawer></Drawer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

import Sidebar from "./components/Sidebar/index.vue";
import Head from "./components/Header/index.vue";
import Drawer from "./components/Drawer/index.vue";

import { useDynamicRoutesHook } from "@/composition/useTagViewApi";
export default {
  setup() {
    const { dynamicRouteTags } = useDynamicRoutesHook();
    const route = useRoute();
    const store = useStore();
    const { staticRoutes: routes = {} } = store.state.controls || {};
    // 初始化刷新页面, 保证当前路由tabview存在
    const stop = watchEffect(() => {
      const parentPath = route.path.slice(0, route.path.lastIndexOf("/"));
      dynamicRouteTags(route.path, parentPath);
    });
    setTimeout(() => {
      // 只执行一次监听, 在下一个事件循环中取消监听
      stop();
    }, 0);
    return {
      routes
    };
  },
  components: {
    Sidebar,
    Head,
    Drawer
  }
};
</script>

<style lang="scss">
section.el-container.is-vertical {
  width: calc(100vw - 210px);
  overflow-y: scroll;
  padding: 10px 0;
  height: 100vh;
}

.el-main::-webkit-scrollbar {
  display: none;
}

.el-aside {
  width: auto !important;
  height: 100vh;
  overflow-y: scroll;
}

.el-menu {
  width: 210px !important;
  min-height: 100%;

  &.el-menu--collapse {
    width: 60px !important;
  }

  /* 隐藏logo */
  &.el-menu--collapse .header-logo {
    display: none;
  }

  /* 隐藏文字 */
  &.el-menu--collapse .el-submenu__title span {
    display: none;
  }

  /* 隐藏 > */
  &.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
    display: none;
  }
}
</style>
<style lang="less" scoped>
// @import "@/style/transition.less";

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.el-header {
  padding: 0;
  height: 70px !important;
}
</style>
