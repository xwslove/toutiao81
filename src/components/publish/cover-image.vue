<template>
  <div class='cover-image'>
      <!-- 循环生成封面 -->
     <div @click="clickImg(index)" class='cover-item' v-for="(item,index) in images" :key="index">
         <img :src="item?item:defaultImg" alt="" />
     </div>
     <el-dialog :visible="showDialog" @close="showDialog=false">
      <select-images @selectOneImg="selectImg"></select-images>
      </el-dialog>
  </div>
</template>

<script>
// images 会根据type的变化而变化吗 [] ['']  ['','','']
export default {
  props: ['type', 'images'],
  data () {
    return {
      selectIndex: -1,
      showDialog: false,
      defaultImg: require('../../assets/img/pic_bg.png')
    }
  },
  methods: {
    clickImg (index) {
      this.showDialog = true
      this.selectIndex = index// 赋值当前点击索引
    },
    selectImg (url) {
      this.$emit('updateImages', url, this.selectIndex)
      this.showDialog = false
    }
  }
}
</script>
<style lang='less' scoped>
.cover-image{
    display: flex;
    .cover-item{
        width:200px;
        height: 200px;
        border: 1px solid #ccc;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        img{
            width: 100%;
            height:100%;
        }
    }
}

</style>
