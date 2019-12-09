<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-06 19:50:20
 -->
<template>
<div id="box">
        <!-- <ul id="ddlist">
            <li :class="{'red':this.$store.state.bgc[0]}" @touchstart="clickThis(0)">全部</li>
            <li :class="{'red':this.$store.state.bgc[1]}" @touchstart="clickThis(1)">待付款</li>
            <li :class="{'red':this.$store.state.bgc[2]}" @touchstart="clickThis(2)">待发货</li>
            <li :class="{'red':this.$store.state.bgc[3]}" @touchstart="clickThis(3)">待收货</li>
            <li :class="{'red':this.$store.state.bgc[4]}" @touchstart="clickThis(4)">待评价</li>
        </ul> -->
        <keep-alive>
        <div id="ddinside">
            <!-- <div v-if="">
                <img src="../assets/img/none.png" alt="">
                <p>还没有相关订单偶😁</p>
            </div> -->
            <!-- v-else v-for="(dd,index) in dds" :key="index" -->
            <!-- <div>{{num}}</div> -->
            <div id="eachdiv" v-for="(myDD,index) in myDD" :key="index">
               <span> <i class="el-icon-shopping-bag-1"></i>{{myDD.name}} <i class="el-icon-chat-dot-round"></i> </span>
               <div id="spxq">
                   <img :src="myDD.src" alt="">
                   <div id="spxqmiddle">
                       <h3>{{myDD.description}}</h3>
                   </div>
                   <span>￥{{myDD.CurrentPrice}}</span>
               </div>
               <span><input type="submit" value="立即支付" @touchstart="onecePay(num)"></span>
            </div>
          
        </div>
        </keep-alive>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props:["myDD","num"],
    // data(){
    //     return{
    //         num:myDD.length
    //     }
    // },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        clickThis(index){
            //提交mutations
        //    this.$store.dispatch('changeBgc',index)
            this.$store.commit('changeBgc',index);
        },
        onecePay(num){

            this.$router.push({path:"/Me",query:{num:num}});
        }
    },
    // created(){
    //    this.myDD =this.$route.query.myDD;
    //    console.log( this.myDD)
    // }
}	
</script>


<style  lang="scss" scoped >
.red{
    background-color: red;
}
#box{
    width: 100%;
    background-color: #f7f7f7;
    display: block;
    display: block;
   #ddlist{
        width: 100%;
        height: .3rem;
        display: flex;
        justify-content: space-around;
        font-size: .15rem;
        background-color: #fff;
        li{
            width: 25%;
            height: 100%;
            text-align: center;
        }
       
        
   }
   #fenge{
       width: 100%;
       height: .1rem;
       background-color: rgb(246, 241, 241);
   }
   #ddinside{
       width: 100%;
       overflow: hidden;
       font-size: .15rem;
       margin-top: 15px;
       img{
           display: block;
           margin:0 auto ;
       }
       #eachdiv{
           width: 92%;
           overflow: hidden;
           padding: 4%;
           background-color: #fff;
           span{
               input{
                   width: 30%;
                   height: .3rem;
                   border-radius: 10px;
                   border: none;
                   background-color: red;
                   float: right;
                   color: white;
                   font-size: .15rem;
               }
           }
           #spxq{
                width: 90%;
                height: 1rem;
                display: flex;
                padding: 5%;
                border:1px solid #cccccc;
                border-left: none;
                border-right: none; 
                margin: 15px 0;
               img{
                   width:30%;
                   height:100%;
                    display:block;
               }
               #spxqmiddle{
                   width: 50%;
                   height: 100%;
               }
               span{
                   display: block;
                   width: 20%;
                   height: 100%;
               }
           }
       }
   }
}
  
</style>
