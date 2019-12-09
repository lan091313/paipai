<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-28 16:10:30
 * @version: v1.0.0
 -->
<template>
<div class="banner">
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <img :src="img.src" >
            </div>
        </div> 
    </div>
</div>
    
</template>

<script>
import axios from 'axios';
import Swiper from 'swiper';

export default {
    name:"Search",
    data () {
    return {
      imgs:[
        ]
    }
  },
  created(){
      axios.get('http://localhost:3000/imags')
      .then(res=>{
         this.imgs = res.data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    loop : true,
                    grabCursor:true,
              });
         });
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped lang=scss>
@import url(https://unpkg.com/swiper/css/swiper.css);
    .banner{
        width: 96%;
        height: 1.1rem;
        margin: 0 auto;
        position: relative;
        .swiper-container{
            width:100%;
            height: 100%;
            border-radius: 10px;
            img{
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
   }
</style>