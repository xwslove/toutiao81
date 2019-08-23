<template>
  <el-card>
      <bread-crumb slot="header">
      <!-- 具名插槽 -->
      <template>
      <!-- el-tabs中v-model属性绑定当前标签页 -->
      <el-tabs v-model="activeName">
        <el-tab-pane label="全部图片" name="first"></el-tab-pane>
        <el-tab-pane label="收藏图片" name="second"></el-tab-pane>
      </el-tabs>
      </template>
      </bread-crumb>
  </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style>

</style>
