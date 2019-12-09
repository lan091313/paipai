<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 10:00:52
 * @version: v1.0.0
 -->
<template>
    <div class="Deil">
        <div class="top">
            <div class="Avatar">
                <img :src="this.Detail.Avatar" />
                <div class="name">
                    <p>{{this.Detail.name}}</p>
                    <p>{{this.Detail.address}}</p>
                </div>
                <span>15天前来过</span>
            </div>
            <div class="monopoly">
                <span>京东</span>
                <span style="background:#f0f2f5;color:#333;margin-right:5px;">转卖</span>
                <p>{{this.Detail.description}}</p>
            </div>
            <div class="money">
                <b>￥{{this.Detail.CurrentPrice}}</b>
                <p>原价<span>￥{{this.Detail.Discount}}</span></p>
                <span class="mail">包邮</span>
            </div>
        </div>
        <div class="deilt">
            <h6>商品详情</h6>
            <p>{{this.Detail.Numbering}}</p>
            <img src="../assets/img/invoice.gif" alt="">
            <img class="bog" :src="this.Detail.src" alt="">
            <span style="float:right;margin:0 6px;font-size:14px;color:#333;line-height:.14rem;">{{this.Detail.num}}</span>
            <img class="eye" src="../assets/img/eye.png" alt="">
            <div class="bottom">
                <img src="../assets/img/jingdong.png" alt="">
                <p>查看原商品信息</p>
                <img style="float:right;height:80%;" src="../assets/img/ahead (2).png" alt="">
            </div>
        </div>
        <div class="personal">
            <img :src="this.Detail.Avatar" alt="">
            <p>{{this.Detail.name}}</p>
            <ul>
                <li>在售商品0</li>
                <li>已售商品0</li>
                <li style="border-right:none;">加入拍拍21天</li>
            </ul>
            <div class="Certification">
                <p>
                    <img src="../assets/img/Verified.png" alt="">
                    <span>已实名认证</span>
                </p>
                 <p>
                    <img style="margin-left:.35rem;" src="../assets/img/credit.png" alt="">
                    <span>未开通小白信用</span>
                </p>
            </div>
        </div>
        <div class="message">
            <p>评价</p>
            <img src="../assets/img/sofa.png" alt="">
            <p class="ask">询问更多细节，快去撩一下老板吧....</p>
            <router-link :to='"/Post/"+this.Detail.id'><span>去评价</span></router-link>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"GoodsDeil",
    props:['id'],
    data () {
        return {
           Detail:[]
        }
    },
    created(){                  
        axios.get('http://localhost:3000/GoodsDeil/'+this.id)
        .then(res=>{
            this.Detail = res.data;
        })
        .catch(err=>{
        console.log(err);
        
        })
    },
    methods: {
        
    },
    components:{
        
    },
} 
</script>

<style scoped lang=scss>
.Deil{
    width: 97%;
    margin: 0 auto;
    background: #f0f0f0;
    .top{
        width: 100%;
        height: 1.76rem;
        background: #fff;
        margin-top: .48rem;
        .Avatar{
            width: 100%;
            height: .46rem;
            padding: 2% 0;
            img{
                width: .45rem;
                height: .45rem;
                border-radius: 50%;
                float: left;
            }
            .name{
                height: 84%;
                padding: 2% 0;
                float: left;
                margin-left: 5px;
                p{
                    font-size: .14rem;
                    line-height: .2rem;
                }
            }
            span{
                float: right;
                font-size: .14rem;
                line-height: .2rem;
            }
        }
        .monopoly{
            width: 100%;
            height: .7rem;
            margin-top:10px;
            span{
                display: inline-block;
                height: .17rem;
                width: .32rem;
                font-size: 13px;
                background: #333;
                color: #fff;
                border: 1px solid #333;
                float: left;
                text-align: center;
                line-height: .17rem;
            }
            p{
                font-size: .14rem;
                line-height: .2rem;
                color: #333;
            }
        }
        .money{
            width: 100%;
            height: .35rem;
            b{
                font-size: .2rem;
                color: rgb(253, 56, 56);
                float: left;
            }
            p{
                font-size: .13rem;
                color: #999;
                float: left;
                margin-left: 5px;
                line-height: .3rem;
                span{
                    color:#666;
                    margin-left: 3px;
                }
            }
            .mail{
                display: inline-block;
                width: .43rem;
                height: .2rem;
                background: #f8f8f8;
                font-size: 12px;
                text-align: center;
                line-height: .2rem;
                margin: 3px 0 0 6px;
                border-radius: 14px;
                color: #666;
            }
        }
    }
    .deilt{
        width: 100%;
        margin:8px 0 10px;
        padding-top: 14px;
        background: #fff;
        h6{
            font-size: .2rem;
            font-family: "楷体";
            font-weight: 100;
        }
        p{
            font-size: .13rem;
            color: #666;
            margin: 5px 0 5px 0;
        }
        img{
            width: 98%;
            margin: 10px auto 0;
            display: block;
        }
        .bog{
            margin: 14px auto;
        }
        .eye{
            width: 6%;
            float: right;
            margin:0 0 7px 0;
        }
        .bottom{
            width: 100%;
            height: .25rem;
            clear: both;
            padding: 10px 0;
            border-top:2px solid #f8f8f8;
            img{
                width: 7%;
                height: 100%;
                margin: 0 ;
                float: left;
            }
            P{
                margin-left: 14px;
                float: left;
                font-size: .14rem;
                line-height: .16rem;
            }
        }
    }
    .personal{
        width: 100%;
        height: 1.5rem;
        background:linear-gradient(to right,#f6f6f6,#fff);
        text-align: center;
        padding: 14px 0;
        margin-bottom: 14px;
        img{
            width: 13%;
            height: 30%;
            border-radius: 50%;
        }
        p{
            margin: 5px 0 10px;
            color: #333;
        }
        ul{
            width: 100%;
            height: .2rem;
            display: flex;
            li{
                width: 33.3%;
                height: 100%;
                border-right:2px solid #dadada;
            }
        }
        .Certification{
            width: 100%;
            height: .3rem;
            margin-top: 14px; 
            border-top:2px solid #f8f8f8;
            p{
                width: 50%;
                height: 100%;
                float: left;
                img{
                    width: 15%;
                    height: 100%;
                    display: block;
                    float: left;
                    margin:0 3px 0 .5rem;
                }
                span{
                    font-size: 14px;
                    color: #666;
                    line-height: .3rem;
                    display: block;
                    float: left;
                }
            }
        }
    }
    .message{
        width: 100%;
        height: 2rem;
        background: #fff;
        padding: 14px 0;
        text-align: center;
        margin-bottom: .6rem;
        p{
            font-size: .16rem;
            color: #333;
            float: left;
        }
        img{
            width: 20%;
            margin: .2rem auto 10px;
            display: block;
            clear: both;
        }
        .ask{
            width: 100%;
            color: #666;
        }
        span{
            display: block;
            width: 25%;
            height: .3rem;
            border:2px solid #f2bfd0;
            clear: both;
            margin: .5rem auto 0;
            line-height: .3rem;
            border-radius: .18rem;
            color: #f2bfd0;
        }
    }
}
</style>