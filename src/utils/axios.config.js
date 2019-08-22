import axios from 'axios'
import { Promise } from 'q'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'// 将后台接口的地址给axios的baseURL
axios.interceptors.request.use(function (config) {
  // 在发起请求做一些业务逻辑
  // 进行配置注入
  let userInfo = window.localStorage.getItem('user-info')// 获取用户存储信息 存储信息里有token
  let token = userInfo ? JSON.parse(userInfo).token : null// 获取token
  config.headers.Authorization = `Bearer ${token}` // 直接将token注入到 请求参数中
  return config
}, function (error) {
  // 对请求失败处理
  return Promise.reject(error)
})
export default axios
