import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
// import * as EventEmitter from 'events';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const EventEmitter = require("events");
class Request extends EventEmitter {
  constructor() {
    super();
    this.interceptors();
  }
  public interceptors() {
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    axios.interceptors.response.use(
      (response: AxiosResponse) => {
        const code = response.status;
        if ((code >= 200 && code < 300) || code === 304) {
          this.emit("HttpStatusSuccess");
          // response.data
          return Promise.resolve(response.data);
        }
        // 响应错误逻辑处理 5xx 4xx 等等
        this.emit("HttpStatusFaild");
        return Promise.reject(response);
      },
      error => {
        // 响应错误逻辑处理
        // const code = response.status;
        console.log(error);
        this.emit("HttpStatusFaild");
        return Promise.reject(error);
      }
    );
  }
  public get(url: string, params?: object | null) {
    return axios({
      method: "get",
      url,
      params
    });
  }
  public post(url: string, data?: object | null) {
    return axios({
      method: "post",
      url,
      data
    });
  }
  public delete(url: string, data?: object | null) {
    return axios({
      method: "delete",
      url,
      data
    });
  }
  public put(url: string, data?: object | null) {
    return axios({
      method: "put",
      url,
      data
    });
  }
  public patch(url: string, data: object | null) {
    return axios({
      method: "patch",
      url,
      data
    });
  }
}

const request = new Request();

export default request;
