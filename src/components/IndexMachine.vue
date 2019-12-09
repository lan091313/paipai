<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 15:43:06
 * @version: v1.0.0
 -->
<template>
    <ul class="wrap" id="wrap">
        <li v-for="(item,index) in tex" :key="index" >
            <router-link :to='"/GoodsDeilPage/"+item.id'>
                <img :src="item.src" >
                <span>京东</span>
                <span style="background:#f0f2f5;color:#333;margin-right:5px;">转卖</span>
                <p>{{item.description}}</p>
                <span class="span" style="color:#ff3434;font-size:15px;">￥{{item.CurrentPrice}}</span>
                <span class="span" style="color:#999;font-size:13px;margin-left:10px;text-decoration: line-through;">￥{{item.Discount}}</span>
                <p class="botton">
                    <img :src="item.Avatar" >
                    <b>{{item.name}}</b>
                    <p style="font-size: 13px;color: #999;line-height: 12px;">{{item.address}}</p>
                </p>
            </router-link>
            
        </li>
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    name:"IndexRecommend",
    props:['typename'],//全部，已验机，京东备件库，大牌推荐
    data () {
    return {
      type:[],
      tex:[]
    }
  },
  created(){
      axios.get('http://localhost:3000/IndexMachine')
      .then(res=>{
         this.tex = res.data;
        this.type = this.getBooksByType(this.tex);
     })
     .catch(err=>{
       console.log(err);
     })
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      this.type = this.getBooksByType(this.tex);
  },
   methods:{
     getBooksByType(data){//根据类型获取数据
         let arr=[];
         for(let i in data){
             if(data[i].type==this.typename){
                 arr.push(data[i]);
             }
         }
         return arr;
     }
  }
} 
</script>

<style scoped lang=scss>
    .wrap {
        width: 98%;
        /* height: 10rem; */
        margin: 0 auto;
        overflow: hidden;
        padding: 5px;
        /* position: relative; */
        -moz-column-count: 2;
        -webkit-column-count: 2;
        column-count: 2;
        li {
            width: 95%;
            padding: 4px;
            box-shadow: 0px 0px 5px rgb(105, 105, 105);
            background: #fff;
            border-radius: 10px;
            margin-bottom: 10px;
			/* position: absolute; */
            img{
                width: 98%;
                height: 1.5rem;  
            }
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
                color: #666;
                line-height: .22rem;
            }
            .span{
                background:none;
                border:none;
                display:block;
                margin-bottom: 5px;
                margin-right: 10px;
            }
            .botton{
                clear: both;
                border-top:1px solid #f1f1f1;
                padding: 5px 0 0 0;
                img{
                    width: .25rem;
                    height: .25rem;
                    border-radius: 50%;
                    float: left;
                    margin-right: 5px;
                }
                b{
                    font-size: 13px;
                    font-weight: 100;
                    color: #333;
                    display: block;
                    line-height: 13px;
                    margin-bottom: 3px;
                }
            }
        }
    }
    .wrap  li:nth-of-type(2n+1){
        display: inline-block;
        margin-right:5%;
        float: left;
    }
    .wrap  li:nth-of-type(2n){
        float: right;
        
    }
    .wrap  li:last-of-type{
        margin-bottom: 1rem;
    }
    .wrap  li:last-of-type(2){
        margin-bottom: 1rem;
    }
   
</style>