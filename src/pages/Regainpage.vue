<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-12-06 19:57:04
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
    <Mygoback></Mygoback>
     <Regain></Regain>
  </div>
</template>

<script>
import Regain from '../components/Regain';
import Mygoback from '../components/Mygoback';


export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  components:{
     Regain,Mygoback
  }
}
</script>

<style scoped>
.box{
  background-color: #fff;
  height: 100%;
}

</style>
