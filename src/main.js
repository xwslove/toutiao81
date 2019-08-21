import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui' // 引入UI
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import Component from './components'// 引入我们自定义的插件
import './styles/index.less' // 引文件设置基础样式
import axios from 'axios' // 引入axios
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
Vue.prototype.$axios = axios // 把axios插件给vue对象原型
Vue.config.productionTip = false// 注册element组件
Vue.use(ElementUI)// 注册element组建
Vue.use(Component) // 注册全局的自定义组建
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
