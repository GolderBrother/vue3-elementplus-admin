import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { staticRoutes } from "./staticRoutes";
import defaultRoutes from "./defaultRoutes";

const routes: RouteRecordRaw[] = staticRoutes.concat(defaultRoutes);
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
