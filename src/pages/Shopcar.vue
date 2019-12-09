<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-12-05 15:39:48
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
    <SHeader></SHeader>
    <SHContend></SHContend>
  </div>
</template>

<script>
import SHeader from '../components/SHeader';
import SHContend from '../components/SHContend';


export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  components:{
     SHeader,SHContend
  }
}
</script>

<style scoped>


</style>
