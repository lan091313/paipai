<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-30 14:38:07
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
    name:"IndexAll",
    props:['typename'],//全部，已验机，京东备件库，大牌推荐
    data () {
    return {
      type:[],
      tex:[]
    }
  },
  created(){
      axios.get('http://localhost:3000/IndexAll')
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
//  (
        //  window.onload = function() {
        //         waterFall("wrap")
        //     } //
        // window.onresize = function() {
        //     waterFall("wrap")
        // }

        // function waterFall(element, space, children) {
        //     if (!element) return;
        //     space = space || 10; //各个元素上下之间的空隙高度
        //     children = children || "div"; //前三行默认设置
            
        //     var wrap = document.getElementById(element);
            
        //     var water = wrap.getElementsByTagName(children);
            
        //     var spaceWidth = water[0].offsetWidth; //获取子元素宽度(offsetWidth会获取块级元素的padding和border)
            
        //     var wrapWidth = wrap.offsetWidth; //获取外框元素宽度
            
        //     var colNum = Math.floor(wrapWidth / spaceWidth); //计算获取外框元素所能承受列数
            
        //     var padding = Math.floor((wrapWidth - colNum * spaceWidth) / (colNum + 1)); //计算外框元素剩余宽度并计算左右留白
            
        //     var column = new Array();
            
        //     var maxHeight = 0;
        //     for (var i = 0; i < colNum; i++) { //初始化数组来计算各列初始top值和left值
        //         column[i] = new Object();
        //         column[i].top = space;
        //         column[i].left = (spaceWidth * i) + padding * (i + 1); //计算各列距离左侧距离
        //     }
        //     for (var i = 0; i < water.length; i++) { //遍历所有子元素及瀑布流布局
                
        //         //计算该子元素属于第几列
        //         if ((i+1) % colNum == 0) {
        //             sub = colNum;
        //         } else {
        //             sub = (i+1) % colNum;
        //         }
        //         _this = water;
        //         _this[i].style.position = "absolute";
        //         _this[i].style.top = column[sub - 1].top + "px";
        //         _this[i].style.left = column[sub - 1].left + "px";
        //         column[sub - 1].top += _this[i].offsetHeight + space; //计算各列最新高度以便赋值
        //     }
        //     for (var i = 0; i < colNum; i++) { //获取瀑布流整体布局高度
        //         if (column[i].top > maxHeight) maxHeight = column[i].top;
        //     }
        //     wrap.style.height = maxHeight + "px"; //给外框元素赋值以防止出现子元素溢出外框元素
        // }
//   )
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