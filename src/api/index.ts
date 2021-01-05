import request from "@/utils//http/index.ts";
interface Data {
  [key: string]: string | number;
}
export const getTableList = () => {
  return request.get("http://localhost:3000/wans");
};
export const getItem = (data: Data) => {
  return request.get(`http://localhost:3000/wans/${data.id}`);
};
export const deleteItem = (data: Data) => {
  return request.delete(`http://localhost:3000/wans/${data.id}`);
};
