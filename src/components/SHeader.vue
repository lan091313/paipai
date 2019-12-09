<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-05 10:42:12
 -->
<template>
<div id="box">
        <i class="el-icon-arrow-left" @touchstart="goback()"></i>
        <h2>购物车</h2>
        <i class="el-icon-chat-dot-round"></i>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}	
</script>


<style  lang="scss" scoped >
#box{
    width: 90%;
    height: 100%;
    display: flex;
    padding: 5%;
    justify-content: space-between;
   i{
       font-size: .3rem;
   }
   h2{
       font-size: .2rem;
   }
}
  
</style>
