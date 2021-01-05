// import http from "@/utils/http/index.ts";
/**
 * 获取用户信息
 */
export function getUserInfo(): Promise<{
  ret: number;
  msg: string;
  data: any;
}> {
  // return http.get("/user/info");
  return new Promise(resolve => {
    resolve({
      ret: 0,
      msg: "success",
      data: { userName: "admin", userId: "123456" }
    });
  });
}
