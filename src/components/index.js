import layoutAside from './home/layout-aside'
import layoutHeader from './home/layout-header'
import breadCrumb from './common/bread-crumb'
// ElementUI导出的对象 对象里有一个办法
// vue.use(elementUI)=>调用其提供的install反法
export default {
  install (Vue) {
    Vue.component('layout-header', layoutHeader)// 注册layoutheader组建
    Vue.component('layout-aside', layoutAside)// 注册左侧组建
    Vue.component('bread-crumb', breadCrumb)// 注册面包屑组件
  }
}
