import router from './router'
// 全局导航前置守卫
router.beforeEach(function (to, from, next) {
  // 如果是以home为起始就认为进入了需要检查oken的区域
  if (to.path.startsWith('/home')) {
    // 获取前端token
    let result = window.localStorage.getItem('user-info')
    if (result) {
      let userInfo = JSON.parse(result)// 将存储的字符转化为对象
      if (userInfo && userInfo.token) {
        // 满足token存在的情新
        next()
      } else {
        next('/login')// 跳转到login
      }
    } else {
      next('/login')// 跳转到login
    }
  } else {
    next()// 直接放行
  }
})
export default router
