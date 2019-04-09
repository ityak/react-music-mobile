import axios from 'axios';
import qs from 'qs';

// 全局默认配置
axios.defaults.baseURL = 'http://30.19.102.18:8060'; // http://127.0.0.1:8060
axios.defaults.timeout = 3000;
axios.defaults.dataType = 'json';
axios.defaults.headers['Content-Type'] =
  'application/x-www-form-urlencoded;charset=UTF-8;';

// 取消请求
// let CancelToken = axios.CancelToken;
// let source = CancelToken.source();

// 请求拦截
axios.interceptors.request.use(
  config => {
    if (config.method === 'get') {
      config.url = config.data
        ? `${config.url}?${qs.stringify(config.data)}`
        : config.url;
    }
    return config;
  },
  error => Promise.reject(error),
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    if (response && response.status === 200) return response.data;
  },
  error => Promise.reject(error),
);

export default function(url, { data, method = 'get' }) {
  return axios(url, {
    method,
    data,
  });
}
