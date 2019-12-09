<!--
 * @Descripttion:
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 11:48:23
 * @version: v1.0.0
 -->
<template>
    <div class="Eval">
        <div class="header">
            <i class="el-icon-back" @click="back()"></i>
            <p>我的评价</p>
            <img style="margin-left:14px;" src="../assets/img/more.png" alt="">
        </div>
        <div class="Avatar">
             <img src="../assets/img/tou0.jpg" alt="">
             <p>结构施工马克</p>
             <span>发表评价</span>
        </div>
        <ul class="nav" id="nav" :class="Evaluation == true ? 'isFixed' :''">
            <li style="color: rgb(19, 216, 53); border-bottom:2px solid rgb(19, 216, 53);">全部评价</li>
            <li>有图评价</li>
        </ul>
        <ul class="list">
            <li v-for="(item,index) in Eva" :key="index" >
                <img src="../assets/img/tou0.jpg" alt="">
                <p>结构施工马克</p>
                <div class="day">
                    {{item.daya}}
                </div>
                <p id="Evalua">
                    {{item.Eval}}
                </p>
                <div id="shop">
                    <img  :src="item.src" alt="">
                    <p>{{item.description}}</p>
                    <span>￥{{item.CurrentPrice}}</span>
                </div>
                 <div id="bottom">
                     <i class="el-icon-edit"></i>
                    <span>写追评</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"Evaluation",
    props:['id'],
    data () {
        return {
           Eva:[],
           Evaluation:"ture"
        }
    },
    created(){
        // axios.get('http://localhost:3000/Evaluation/'+this.id)
        axios.get('http://localhost:3000/Evaluation')
        .then(res=>{
            this.Eva = res.data;
        })
        .catch(err=>{
        console.log(err);

        })
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
        back(){
            this.$router.go(-2);
        },
        handleScroll() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
           if(scrollTop >50){
                this.Evaluation = true ;
            }else{
                this.Evaluation = false;
            }
        },
    },
    components:{

    },
}
</script>

<style scoped lang=scss>
    .isFixed{
        position:fixed;
        background-color:#fff;
        top:.45rem;
        z-index:2;
        margin: 0;
    }
    .Eval{
        width: 98%;
        margin: 0 auto;
        .header{
            width: 94%;
            height: .45rem;
            background: #f0f0f0;
            padding:0 2%;
            position: fixed;
            top: 0;
            left: 1%;
            z-index: 1;
            i{
                font-size: .3rem;
                line-height: .45rem;
                color: #333;
                float: left;
            }
            p{
                font-size: .2rem;
                line-height: .45rem;
                color: #333;
                float: left;
                margin-left: 8px;
            }
            img{
                width: .3rem;
                height: .3rem;
                float: right;
                margin-top: 5px;
            }
        }
        .Avatar{
            width: 96%;
            height: .6rem;
            padding:0 2%;
            margin: .46rem 0 10px 0;
            background:#fff;
            img{
                width: .35rem;
                height: .35rem;
                border-radius: 50%;
                margin-top: .15rem;
                float: left;
            }
            p{
                font-size: .2rem;
                float: left;
                line-height: .6rem;
                margin-left: 4px;
            }
            span{
                width: .75rem;
                height: .3rem;
                border: 2px solid rgb(19, 216, 53);
                display: block;
                float:right;
                margin-top: 14px;
                text-align: center;
                line-height: .3rem;
                font-size: .15rem;
                border-radius: .18rem;
                color:rgb(19, 216, 53);
            }
        }
        .nav{
            width: 100%;
            height: .5rem;
            background: #fff;
            margin: 0 auto;
            display: -webkit-flex;
            -webkit-justify-content:space-around;
            li{
                width: 50%;
                height: .5rem;
                font-size: .18rem;
                text-align: center;
                line-height: .5rem;
                border-bottom:2px solid #f0f0f0;
            }
        }
        .list{
            width: 98%;
            padding: 0 1%;
            li{
                width: 98%;
                padding:1% 1% 13% 1%;
                background:#fff;
                margin-bottom:10px;
                clear:both;
                img{
                    width: .3rem;
                    height: .3rem;
                    border-radius: 50%;
                    margin: .1rem 4px 0 0;
                    float: left;
                }
                p{
                    font-size: .15rem;
                    float: left;
                    line-height: .5rem;
                    color: #333                }
                .day{
                    width: 100%;
                    font-size: .14rem;
                    color: #666;
                    clear: both;
                }
                #Evalua{
                    width: 100%;
                    margin:5px 0 10px;
                    line-height: .25rem;
                    font-size: .15rem;
                }
                #shop{
                    width: 100%;
                    height: 1rem;
                    background: #f1f1f1;
                    clear: both;
                    /* margin-bottom:.5rem; */
                    img{
                        width: 30%;
                        height:100%;
                        margin: 0;
                        border-radius: 0;
                        float: left;
                    }
                    p{
                        float: right;
                        width: 66%;
                        padding: 2% 1% 1%;
                        font-size: .15rem;
                        line-height: .2rem;
                    }
                    span{
                        font-size: .15rem;
                        float:left;
                        display:block;
                        margin: 8% 0 0 1%;
                        color:red;
                    }
                }
                #bottom{
                    width:25%;
                    border-radius:.2rem;
                    text-align:center;
                    margin-top:10px;
                    float:right;
                    color:#13d835;
                    border:1px solid #13d835;
                    i{
                        font-size:.15rem;
                        line-height:.25rem;
                    }
                    span{
                         font-size:.12rem;
                        line-height:.25rem;
                    }
                }
            }
        }

    }
</style>
