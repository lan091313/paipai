<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-12-07 10:28:44
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 11:29:04
 -->
<template>
     <div id="boxx">
       <JiaHaoTop id="topbox"></JiaHaoTop> 
       <JiaHaobottom></JiaHaobottom>
       <JiaHaoDibu></JiaHaoDibu>
     </div>   
</template>
<script>
import JiaHaoTop from '../components/JiaHaoTop'
import JiaHaobottom from '../components/JiaHaobottom'
import JiaHaoDibu from '../components/JiaHaoDibu'

export default {
   name:"JiaHaoPage",
   components:{
      JiaHaoTop,JiaHaobottom,JiaHaoDibu
   }
}
</script>
<style scoped>
#boxx{
   width: 100%;
   height: 90%;
   display: block;
}
/* #topbox{
   margin-bottom: 1.5rem;
} */
            
</style>