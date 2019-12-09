<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 17:04:27
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-11-30 16:03:09
 -->
<template>
    <div id="bigbox">
——常用业务——
<router-link to="/Shopcar">
<div id="spc">
            <i class="el-icon-shopping-cart-full"></i>
    </div>
</router-link>
<div id="botbox">
    <div class="imgbox">
        <div id=""></div>
        <img src="../assets/img/myhs.png" alt="">
        <span>我的回收</span>
    </div>
    <div class="imgbox">
        <img src="../assets/img/mydb.png" alt="">
        <span>我的夺宝</span>
    </div>
    <div class="imgbox">
        <img src="../assets/img/mypph.png" alt="">
        <span>拍拍灰</span>
    </div>
    <div class="imgbox">

    </div>
</div>

    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped lang=scss>
#bigbox{
    width: 90%;
    height: 1rem;
    background-color: white;
    text-align: center;
    font-size: .13rem;
    padding: 5%;
    margin-bottom: 3%;
}
#botbox{
    margin-top:7%;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    .imgbox{
        width: 20%;
        img{
            width: 50%;
            display: block;
                margin: auto;
        }
    }
}



#spc{
    display: inline-block;
    width: .3rem;
    height: .3rem;
    border-radius: 50%;
    background-color: black;
    opacity: .1;
    padding: 1%;
    position: fixed;
    top: 70%;
    right: 5%;
    i{
        font-size: .3rem;
        color: white;
        text-align: center；
    } 
}


</style>