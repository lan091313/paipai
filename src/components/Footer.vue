<!--
 * @Descripttion:
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 14:59:33
 * @version: v1.0.0
 -->
<template>
    <div>
        <ul class="Footer">
            <li  @click="changeContA">
                <i style="color:rgb(19, 216, 53)" :style="{color:mag}" class="el-icon-s-home"></i>
                <span style="color:rgb(19, 216, 53)" :style="{color:mag}">首页</span>
            </li>
            <li @click="changeContB">
                <i :style="{color:mbg}" class="el-icon-folder-opened"></i>
                <span :style="{color:mbg}">分类</span>
            </li>
            <li>
                <span style="margin-top:45%" @touchstart="tojia">买二手</span>
            </li>
            <li @click="changeContC">
                <i :style="{color:mcg}" class="el-icon-shopping-cart-2"></i>
                <span :style="{color:mcg}">购物车</span>
            </li>
            <li @click="changeContD">
                <i :style="{color:meg}" class="el-icon-user-solid"></i>
                <span :style="{color:meg}">我的</span>
            </li>
        </ul>
        <img class="img" src="../assets/img/plus.png" alt="" @touchstart="tojia">
    </div>
</template>

<script>

export default {
    name:"Search",
    data () {
        return {
            mag:"",
            mbg:"",
            mcg:"",
            mdg:"",
            meg:""
        }
    },
    computed:{
        footerCls(){
            return this.$store.state.footerCls;
        }
    },
    created(){

    },
    methods:{
      changeContA(){
          this.$router.push({path:'/'});
          this.mag= "rgb(19, 216, 53)";
          this.mbg= "#666";
          this.mcg= "#666";
          this.meg= "#666";
      },
      changeContB(){
          this.$router.push({path:'/FenPage'})
          this.mbg= "rgb(19, 216, 53)";
          this.mag= "#666";
          this.mcg= "#666";
          this.meg= "#666";
      },
      changeContC(){
          this.$router.push({path:'/Shopcar'})
          this.mcg= "rgb(19, 216, 53)";
          this.mag= "#666";
          this.meg= "#666";
          this.mbg= "#666";
      },
      changeContD(){
          this.$router.push({path:'/Me'})
          this.meg= "rgb(19, 216, 53)";
          this.mag= "#666";
          this.mcg= "#666";
          this.mbg= "#666";
      },
      tojia(){
          this.$router.push({path:"/JiaHaoPage"});
      }
    }
}
</script>

<style scoped lang=scss>
    .Footer{
        width: 100%;
        height: .52rem;
        background: #fff;
        margin: 0 auto 5px;
        display: -webkit-flex;
        -webkit-justify-content:space-between;
        flex-wrap: wrap;
        text-align: center;
        position: fixed;
        bottom: 0;
        li{
            width: 17%;
            margin-top: .08rem;
            i{
               font-size: .3rem;
            }
            span{
                font-size: .12rem;
                display: block;
                color: #333;
                line-height: .12rem;
                margin-top: 2px;
            }
        }
    }
    .img{
        height:.4rem;
        width:.4rem;
        border:14px solid #fff;
        border-bottom:none;
        position: absolute;
        left: 41%;
        top:-45%;
        border-radius: 50%;
    }

</style>
