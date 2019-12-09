<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-28 17:44:41
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-05 10:42:38
 -->

<template>
     <div id="box" @touchstart="goback()">
        <i class="el-icon-arrow-left"></i>
    </div>
</template>

<script>
export default {
    name:'Myback',
    data(){
        return{

        }
    },
    methods:{
        goback(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
#box{
    width: 90%;
    height: 20px;
    padding: 5%;
    outline: none;
    background-color: #fff;
}
.el-icon-arrow-left{
    font-size: .3rem;
    display: inline-block;
    float: left;
}
</style>