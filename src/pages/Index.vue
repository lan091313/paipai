<!--
 * @Descripttion:
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 17:55:10
 * @version: v1.0.0
 -->
<template>
    <div class="GoodsList">
        <Seach></Seach>
        <div>
            <Banner></Banner>
            <Bannera class="Bannera"></Bannera>
            <div class="nev">
                <a href="#"><img @click="(changeage)" src="../assets/img/nav.jpg" alt=""><span>二手手机</span></a>
                <a href="#"><img src="../assets/img/nav0.jpg" alt=""><span>电脑数码</span></a>
                <a href="#"><img src="../assets/img/nav1.jpg" alt=""><span>二手家电</span></a>
                <a href="#"><img src="../assets/img/nav2.jpg" alt=""><span>拍拍验机</span></a>
                <a href="#"><img src="../assets/img/nav3.jpg" alt=""><span>平板电脑</span></a>
                <a href="#"><img src="../assets/img/nav4.jpg" alt=""><span>高价回收</span></a>
                <a href="#"><img src="../assets/img/nav5.jpg" alt=""><span>奢侈品</span></a>
                <a href="#"><img src="../assets/img/nav6.jpg" alt=""><span>服饰鞋包</span></a>
                <a href="#"><img src="../assets/img/nav7.jpg" alt=""><span>运动户外</span></a>
                <a href="#"><img src="../assets/img/nav8.jpg" alt=""><span>二手图书</span></a>
            </div>
            <img class="ban" src="../assets/img/ban.jpg" alt="">
            <div class="Indianapolis">
                <h5>夺宝岛<span>1元起拍</span></h5>
                <div class="right">
                    <!-- <BannerImg></BannerImg> -->
                    <div class="img">
                        <img src="../assets/img/tou5.jpg" alt="">
                        <img class="img1" src="../assets/img/tou4.jpg" alt="">
                        <img class="img2" src="../assets/img/tou6.jpg" alt="">
                    </div>
                    <p><span>47万+</span>人正在夺宝</p>
                </div>
                <ul>
                    <li>
                        <img src="../assets/img/int0.jpg" alt="">
                        <p class="time">距结束 <span class="hours">59</span>:<span class="minutes">59</span>:<span class="seconds">59</span></p>
                        <p>当前价</p>
                        <p style="color:#ff3434; font-size:15px;">￥99</p>
                        <p style="text-decoration:line-through">￥299</p>
                    </li>
                    <li>
                        <img src="../assets/img/int1.jpg" alt="">
                            <p class="time">距结束 <span class="hours">59</span>:<span class="minutes">59</span>:<span class="seconds">59</span></p>
                        <p>当前价</p>
                        <p style="color:#ff3434; font-size:15px;">￥99</p>
                        <p style="text-decoration:line-through">￥299</p>
                    </li>
                    <li>
                        <img src="../assets/img/int2.jpg" alt="">
                            <p class="time">距结束 <span class="hours">59</span>:<span class="minutes">59</span>:<span class="seconds">59</span></p>
                        <p>当前价</p>
                        <p style="color:#ff3434; font-size:15px;">￥99</p>
                        <p style="text-decoration:line-through">￥299</p>
                    </li>
                    <li>
                        <img src="../assets/img/int3.jpg" alt="">
                            <p class="time">距结束 <span class="hours">59</span>:<span class="minutes">59</span>:<span class="seconds">59</span></p>
                        <p>当前价</p>
                        <p style="color:#ff3434; font-size:15px;">￥99</p>
                        <p style="text-decoration:line-through">￥299</p>
                    </li>
                </ul>
            </div>
            <ul class="ulId">
                <li style="background:linear-gradient(to bottom,#f0f2ff,#fff)">
                    <h5>平台质检</h5>
                    <span>品质之选</span>
                    <img src="../assets/img/int4.jpg" alt="">
                    <p>￥515</p>
                </li>
                <li style="background:linear-gradient(to bottom,#fff1d8,#fff)">
                    <h5>京东备件库</h5>
                    <span style="background:#fd6637">精选好物</span>
                    <img src="../assets/img/int0.jpg" alt="">
                    <p>￥2079</p>
                </li>
                <li style="background:linear-gradient(to bottom,#d9fae9,#fff)">
                    <h5>京东专卖</h5>
                    <span style="background:#01d443">品质保障</span>
                    <img src="../assets/img/int2.jpg" alt="">
                    <p>￥155</p>
                </li>
            </ul>
            <IndexNav></IndexNav>
        </div>
        <Footer class="Footer"></Footer>
        <div class="good"><img src="../assets/img/shopping.png" alt=""></div>
        <div class="good" id="Up" style="display:none;"><img src="../assets/img/up.png" alt=""></div>
    </div>
</template>

<script>
import axios from 'axios';

import Seach from '../components/Seach';
import Banner from '../components/Banner';
import Bannera from '../components/Bannera';
import BannerImg from '../components/BannerImg';
import IndexNav from '../components/IndexNav';
import Footer from '../components/Footer';

export default {
    name:"Index",
    data () {
        return {
            types:[],
             currtype:"",
             spid:""
        }
    },
    created(){

    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop >= 500) {
                document.querySelector('#Up').style.display = "block";
                document.querySelector('#Up').style.bottom = "10%";
            } else {
                document.querySelector('#Up').style.display = "none";
            }
        },
        changeage(age){
            this.$store.dispatch("changeage",age)
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    components:{
        Banner,Bannera,BannerImg,Seach,IndexNav,Footer
    },

}
</script>

<style scoped lang=scss>
    .GoodsList{
        background: #f0f0f0;
    }
    .nev{
        width: 98%;
        display: -webkit-flex;
        -webkit-justify-content:space-around;
        flex-wrap: wrap;
        text-align: center;
        margin: 0 auto;
        padding-bottom: 5px;
        a{
            width: 17%;
            height: .5rem;
            margin-top: .15rem;
            margin-bottom: .1rem;
            img{
                width: 70%;
                height: 80%;
                border-radius: 50%;
            }
            span{
                font-size: .12rem;
                display: block;
                color: #333;
            }
        }
    }
    .ban{
        width: 98%;
        margin:5px auto;
        display: block;
        margin-bottom: 14px;
        border-radius: 10px;
    }
    .GoodsList .Bannera{
        position: absolute;
        left: 2%;
        top: 7%;
    }
    .Indianapolis{
        width: 98%;
        height: 1.7rem;
        background: #fff;
        margin: 0 auto;
        padding: 10px 0 10px 0;
        h5{
            font-size: .16rem;
            float: left;
            line-height: .25rem;
            span{
                font-size: .10rem;
                font-weight: 100;
                border:2px solid #ffd1d0;
                background: #ffe4e0;
                color: #ff3434;
                display: inline-block;
                width: .55rem;
                text-align: center;
                margin-left: 10px;
                line-height: .15rem;
                border-radius: 10px 10px 10px 0;
                margin-bottom: 14px;
            }
        }
        .right{
            width: 45%;
            height: .25rem;
            background: #f1f1f1;
            float: right;
            padding:3px 0 3px 5px;
            border-radius: 14px 0 0 14px;
            .img{
                width: 37%;
                height: 90%;
                border-radius: 14px 14px 14px 14px;
                float: left;
                img{
                    width: 34%;
                    height: 100%;
                    float: left;
                    border-radius: 50%;
                    border: 2px solid #fff;
                    box-sizing: border-box;
                }
                .img1{
                    margin-left: -4%;
                    z-index: 1;
                }
                .img2{
                    z-index: 2;
                    margin-left: -4%;
                }
            }
            p{
                float: right;
                font-size: .12rem;
                line-height: .25rem;
                color:#333;
            }
            span{
                color: #ff3434;
            }
        }
        ul{
            width: 100%;
            height:75%;
            clear: both;
            display: -webkit-flex;
            -webkit-justify-content:space-between;
            li{
                width: 24%;
                height: 100%;
                img{
                    width: 100%;
                    height: 48%;
                    border-radius: 10px 10px 0 0;
                    float: left;
                }
                .time{
                    font-size: 8px;
                    color: #fff;
                    width:100%;
                    height: .2rem;
                    background: #ff8d69;
                    clear: both;
                    line-height: .2rem;
                    border-radius:0 0 10px 10px;
                    text-align: center;
                }
                p{
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                    color: #666;
                }
            }
        }
    }
    .ulId{
        width: 99%;
        height: 1.8rem;
        margin: 14px auto;
         display: -webkit-flex;
        -webkit-justify-content:space-around;
        li{
            width: 33.33%;
            height: 100%;
            h5{
                font-size: 15px;
                color: #333 ;
                width: 100%;
                height: .35rem;
                text-align: center;
                line-height: .45rem;
            }
            span{
               display: block;
               width: 55%;
               height: .18rem;
               background: #4789ff;
               margin: 0 auto;
               text-align: center;
               border-radius: 14px;
               font-size: 12px;
               color: #fff;
            }
            img{
                width: 70%;
                height: 55%;
                margin: 5px auto 0;
                display: block;
            }
            p{
                font-size: 14px;
                color: #ff3434;
                width: 100%;
                text-align: center;
            }
        }
    }
    .good{
        width: .4rem;
        height: .38rem;
        background: rgb(0, 0, 0);
        position: fixed;
        z-index: 10;
        right: 5%;
        bottom: 20%;
        border-radius: 50%;
        text-align: center;
        padding-top: 4px ;
        background-color: rgba(0, 0, 0,.8);
        img{
            width: 80%;
            height: 80%;
        }
    }
</style>
