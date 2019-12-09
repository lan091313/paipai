<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-27 19:34:18
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
     <Lcha></Lcha>
     <Lzhanghao></Lzhanghao>
     <LOneTo></LOneTo>
  </div>
</template>

<script>
import Lcha from '../components/Lcha';
import Lzhanghao from '../components/Lzhanghao';
import LOneTo from '../components/LOneTo';


export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  components:{
     Lcha,Lzhanghao,LOneTo
  }
}
</script>

<style scoped>
.box{
  background-color: white;
}

</style>
