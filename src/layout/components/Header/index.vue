<template>
  <div class="header-main" :style="mainStyle">
    <div class="header-main-tabs">
      <div class="collapseicon">
        <i @click="toggleMenuCollpase()" :class="collapseClass"></i>
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item key="/" :to="{ path: '/' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
              v-for="(item, index) in routeListConfig.currentRouteList"
              :key="index"
              ><a>{{ item.name }}</a></el-breadcrumb-item
            >
          </transition-group>
        </el-breadcrumb>
      </div>
      <div class="link-tag">
        <tagsview></tagsview>
      </div>
    </div>
    <div class="header-main-user-info">
      <el-avatar :src="userInfo.userAvatar" class="user-avatar"></el-avatar>
      <span class="user-name">{{ userInfo.userName }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { watch, reactive, computed, onMounted } from "vue";
import tagsview from "../Tagsview/index.vue";
import { getUserInfo as getUserInfoApi } from "@/api/common";
import { useTheme } from "@/composition/useThemeApi";

export default {
  setup() {
    const userInfo = reactive({
      userName: "",
      userAvatar: ""
    });
    const themeApi = useTheme();
    const store = useStore();
    const route = useRoute();
    const routeListConfig: {
      currentRouteList: unknown[];
    } = reactive({
      currentRouteList: []
    });
    const mainStyle = computed(() => ({
      background: themeApi.theme.customTheme
    }));
    const collapseClass = computed(() =>
      store.state.controls.isCollapse ? "el-icon-s-unfold" : "el-icon-s-fold"
    );
    function toggleMenuCollpase() {
      store.dispatch("toggleCollapse");
    }
    function useRouteList(value: unknown) {
      return value;
    }
    async function getUserInfo() {
      const result: {
        ret: number;
        msg: string;
        data: any;
      } = await getUserInfoApi();
      userInfo.userName = result.data.userName;
      userInfo.userAvatar = `http://r.hrc.oa.com/photo/150/${userInfo.userName}.png`;
    }
    watch(
      () => route.path,
      () => {
        routeListConfig.currentRouteList = route.matched;
      }
    );
    onMounted(() => {
      getUserInfo();
    });
    return {
      toggleMenuCollpase,
      routeListConfig,
      state: store.state,
      collapseClass,
      themeApi,
      mainStyle,
      useRouteList,
      userInfo
    };
  },
  components: {
    tagsview
  }
};
</script>
<style lang="scss">
.header-main {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px 0;
  box-shadow: 1px 1px #eee;

  .header-main-tabs {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .header-main-user-info {
    position: relative;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .upload-link {
      color: #fff;
      text-decoration: underline;
      cursor: pointer;
    }

    .user-avatar {
      // margin-left: 30px;
      margin-right: 10px;
    }
  }
}

.collapseicon {
  font-size: 18px;
  cursor: pointer;
}

.collapseicon .el-breadcrumb__inner a:hover,
.collapseicon .el-breadcrumb__inner.is-link:hover {
  color: $menuActiveText;
}

// el-icon-s-unfold 折叠后
.collapseicon .el-icon-s-fold,
.collapseicon .el-icon-s-unfold {
  font-size: 20px;
  vertical-align: middle;
  margin-right: 5px;
}

.router-display {
  font-size: 14px;
  font-weight: bold;
  margin-right: 2px;
}

.el-breadcrumb {
  display: inline-block;
  vertical-align: middle;
}

.link-tag {
  width: 100%;
}

/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
