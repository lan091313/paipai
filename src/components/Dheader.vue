<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-05 11:25:12
 -->
<template>
<div id="box">
        <i class="el-icon-arrow-left" @touchstart="goback()"></i>
        <h2>我的订单</h2>
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
    padding: 5%;
    display: block;
    height: .3rem;
    display: block;
    background-color: #fff;
   i{
       font-size: .3rem;
       float: left;
   }
   h2{
       width: 100%;
       display: block;
       font-size: .2rem;
       text-align: center;
       margin-left: -10px;
   }
   
}
  
</style>
