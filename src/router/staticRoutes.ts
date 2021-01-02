/**
 * 
 * 路由配置规则：
 * 
 * {
 *  path:'',路径
 *  name:'',路由名称，生成menu时menu name
 *  meta:{},额外信息，icon为menu中的icon
 *  children: [], 子路由，menu中的子menu 没有时可为空数组
 * }
 * 
 */

import { RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

export const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: '首页',
        component: Home,
        children: [],
        meta: {
            icon: 'el-icon-s-home'
        }
    },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];