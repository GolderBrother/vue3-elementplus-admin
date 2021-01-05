<template>
  <section class="drawer">
    <div class="fixd" :style="fixdTheme" @click="openDrawer">
      <i class="el-icon-setting"></i>
    </div>
    <el-drawer v-model="drawer" size="20%" :with-header="false">
      <h2 class="title">系统设置</h2>
      <div class="content">
        <div class="theme-color">
          <span class="theme-title">主题色：</span>
        </div>
        <div class="theme-list">
          <span
            class="theme-type"
            v-for="color in themeType.themeArr"
            :key="color"
            :style="{ background: color }"
            @click="themeApi.setTheme(color)"
          ></span>
        </div>
      </div>
    </el-drawer>
  </section>
</template>

<script>
import { ref, reactive } from "vue";
import { useTheme } from "@/composition/useThemeApi";
import { themeTypes } from "@/constants/theme";

export default {
  setup() {
    const themeApi = useTheme();
    const drawer = ref(false);
    const fixdTheme = ref({
      background: themeApi.theme.customTheme
    });
    const themeType = reactive({
      themeArr: themeTypes
    });
    function openDrawer() {
      drawer.value = !drawer.value;
    }
    function activeChange() {
      console.log("activeChange");
    }
    return {
      fixdTheme,
      drawer,
      openDrawer,
      themeApi,
      activeChange,
      themeType
    };
  }
};
</script>

<style lang="scss" scoped>
.fixd {
  border: 1px solid #ddd;
  position: fixed;
  right: 0;
  top: 30%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  opacity: 0.6;
  cursor: pointer;
  z-index: 1000;

  .el-icon-setting {
    font-size: 24px;
    color: #aaa;
  }
}

.title {
  font-size: 16px;
  padding: 20px;
  text-align: center;
}

.content {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.theme-title {
  font-size: 16px;
}

.theme-type {
  width: 14px;
  height: 14px;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
  border: 1px solid #eee;
}
</style>
