import { staticRoutes } from "@/router/staticRoutes";
export interface State {
  [key: string]: unknown;
}
export const state = {
  isCollapse: false, // 控制菜单展开与折叠
  staticRoutes
};
