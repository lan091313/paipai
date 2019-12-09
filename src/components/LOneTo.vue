<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-12-04 10:15:26
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
<div id="bigbox">
        <div class="box">
            <div class="imgbox">
                <img src="../assets/img/weixin.png" alt="">
                
                <span>微信一键登录</span>
            </div>
            <div class="imgbox">
                <img src="../assets/img/jingdong.png" alt="">
                <span>京东一键登录</span>
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
    width: 100%;
    height: 100%;
    background-color: white;
}
.box{
    width: 100%;
    display: flex;
    height: 1rem;
    justify-content: space-around;
    .imgbox{
        width: 50%;
        img{
            width: 25%;
            display: block;
            margin: auto; 
            margin-bottom: .2rem;
        }
        span{
            font-size: .1rem;
            color: #9e9e9e;
            display: block;
            text-align: center;
        }
    }
}



</style>
