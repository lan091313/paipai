<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-12-06 19:50:09
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
    
     <Dheader></Dheader>
     
     <Dcontent :myDD="myDD" :num="num"></Dcontent>
     
  </div>
</template>

<script>
import Dheader from '../components/Dheader';
import Dcontent from '../components/Dcontent';


export default {
  name: 'tripinner',
  data () {
    return {
         myDD:{},
         num:0
    }
  },
  components:{
     Dheader,Dcontent
  },
  created(){
       this.myDD =this.$route.query.myDD;
       this.num =this.$route.query.num;
    }
}
</script>

<style scoped lang=scss>
.box{
  background-color: #f7f7f7;
  height: 100%;
}



</style>
