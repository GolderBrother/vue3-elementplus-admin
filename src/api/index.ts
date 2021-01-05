import http from "@/utils//http/index.ts";
interface Data {
  [key: string]: string | number;
}
export function getTableList() {
  return http.get("http://localhost:3000/xxx");
}

export function getItem(data: Data) {
  return http.get(`http://localhost:3000/xxx/${data.id}`);
}

export function deleteItem(data: Data) {
  return http.delete(`http://localhost:3000/xxx/${data.id}`);
}
