<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-11-29 21:36:28
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
     <Mygoback></Mygoback>
     <b id="sz">设置</b>
     <logoutin></logoutin>
     <logoutbutton></logoutbutton>
  </div>
</template>

<script>
import logoutin from '../components/logoutin';
import Mygoback from '../components/Mygoback';
import logoutbutton from '../components/logoutbutton';


export default {
  name: 'tripinner',
  data () {
    return {
      
    }
  },
  components:{
     logoutin,Mygoback,logoutbutton
  }
}
</script>

<style scoped lang=scss>
.box{
    background-color: rgb(246, 241, 241);
    #sz{
        margin-top: -45px;
        display: block;
        width: 85%;
        font-size: .25rem;
    font-weight: 900;
    text-align: center;
    background-color: #fff;
    }
    
}

</style>
