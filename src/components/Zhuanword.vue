<template>
    <div class="header">
        <div class="cont">
            <ul v-for="(value,key,index) in allGoods" :key="index">
                <h2>订单编号:{{key}}</h2>
                <li v-for="(good,index) in value" :key="index">
                    <img :src="good.img" alt="">
                    <p>{{good.miaoshu}}</p>
                    <p class="price">￥{{good.price}}</p>
                    <input type="button" value="一建转卖">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Axios from "axios";

export default {
    name:"Zhuanword",
    data(){
        return {
            allGoods:{},
        }
    },
    created(){
        Axios.get("/goods")
        .then(res=>{
            console.log(res.data);
            this.allGoods = res.data;
            console.log(this.allGoods)
        })
        .catch(err=>{
            console.log(err)
        })
    },
    methods:{
        }
    }
</script>

<style lang="scss" scoped>
.header{
    width:100%;
    height: 4rem;
    margin-top:1.1rem;
    .cont{
        width:100%;
    }
    ul{
        width:100%;
        border-bottom: 1px solid #eee;
    }
    li{
        border-bottom: 1px solid #eee; 
        overflow: hidden;
    }
    img{
        width:1.2rem;
        height: 1.2rem;
        float: left;
    }
    p{
        width: 60%;
        margin-top:.1rem;
        font-size: 16px;
        float: right;
    }
    .price{
        display: block;
        color: red;
        margin-top:.18rem;
        font-weight: weight;
    }
    h2{
        text-indent: .1rem;
        line-height: .4rem;
        border-bottom: 1px solid #eee;
        display: block;
    }
    input{
        float: right;
        width:.9rem;
        height: .3rem;
        color:white;
        background:#ff3535;
        border:none;
        border-radius: .5rem;
        margin-right: .2rem;
        margin-bottom: .1rem;
        outline: none;
    }
}      
</style>