<template>
  <!-- 最外层容器 -->
  <el-container>
    <!-- 侧边栏容器 -->
    <el-aside :style="{width}" style="min-height:100vh;background-color:#323745">
      <!-- 左侧内容 -->
      <layout-aside></layout-aside>
    </el-aside>
    <!-- 嵌套大容器 -->
   <el-container>
     <!-- 头部内容 -->
     <el-header>
       <layout-header></layout-header>
     </el-header>
     <!-- 中间区域 -->
     <el-main style="padding:0 0">
       <router-view></router-view>
     </el-main>
   </el-container>
  </el-container>
</template>

<script>

import eventBus from '../../utils/eventBus'
export default {
  data () {
    return {
      width: '200px'
    }
  },
  created () {
    eventBus.$on('collopseOrClose', () => {
      this.width = this.width === '200px' ? '60px' : '200px'
    })
  }

}
</script>

<style>

</style>
