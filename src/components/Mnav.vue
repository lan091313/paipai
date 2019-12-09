<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 14:53:08
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 10:59:01
 -->
<template>
    <nav>
        <div class="navbox">
            <div class="imgbox">
                <img src="../assets/img/daizhifu.png" alt="">
                <span>待付款</span>  
            </div>
            <div class="imgbox">
                <img src="../assets/img/dzf.png" alt="">
                <span>待收货</span>  
            </div>
            <div class="imgbox">
                <img src="../assets/img/wxff.png" alt="">

                <span>售后/维修</span>
            </div>
            <div class="imgbox">
                <router-link to="/Ddmy">
                <el-badge :value=num class="item" v-if="num!=0">
                <img src="../assets/img/dd.png" alt="">
                </el-badge>
                <img v-else src="../assets/img/dd.png" alt="">
                <span>我的订单</span>  
                </router-link>
            </div>
            <p>|</p>
        </div>
        
        <div class="navbox">
            <div class="xianzhi">
                <b>-</b>
                <span>已发布</span>  
            </div>
            <div class="xianzhi">
                <b>-</b>
                <span>已卖出</span>  
            </div>
            <div class="xianzhi">
                <b>-</b>
                <span>已下架</span>
            </div>
            <div class="xianzhi">
                <i class="el-icon-box"></i>
                <span>我的闲置</span>  
            </div>
            <p>|</p>
        </div>
        
    </nav>
</template>


<script>
export default {
    props:["num"]
}
</script>

<style scoped lang=scss>
nav{
    margin-top:.7rem;
}
.navbox{
    font-size: .12rem;
    width: 100;
    height: .5rem;
    background-color: white;
    margin-bottom:10px; 
    display: flex;
    justify-content: space-around;
    padding: 5% 0; 
    position: relative;
    .imgbox{
        width: 15%;
        text-align: center;
        img{
        width:55%;
        display: block;
        height: 50%;
        margin: auto;
        margin-bottom: 5px;
        }
    }
    p{
            top: 10px;
            position: absolute;
            left: 73%;
            font-size: .5rem;
            font-weight: 100;
            color: rgba(0, 0, 0, 0.03);
        }
    .xianzhi{
            width: 16%;
            text-align: center;
            line-height: .3rem;
            b{
                width: 100%;
                display: block;
            }
            i{
                display: block;
                line-height: .3rem;
                font-size: .3rem;
            }
        }
   
}
</style>
