import axios from "axios";

//对axios的配置
axios.defaults.timeout = 10000;
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
axios.defaults.baseURL = "/";

//添加请求拦截器
// axios.interceptors.request.use(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

//添加响应拦截器
// axios.interceptors.response.use(
//   res => {
//       return res;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default axios;
