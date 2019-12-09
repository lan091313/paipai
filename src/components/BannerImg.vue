<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-28 16:10:41
 * @version: v1.0.0
 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(img,index) in imgs" :key="index"  >
                <img :src="img.src" >
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
      axios.get('http://localhost:3000/bannerImg')
      .then(res=>{
         this.imgs = res.data;
         this.$nextTick(function () {
              let mySwiper = new Swiper('.swiper-container',{
                   autoplay:true,
                    speed:300,
                    // grabCursor:true,
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
    .swiper-container{
        width: 40%;
        height: 90%;
        border-radius: 14px 14px 14px 14px;
        float: left;
        .swiper-wrapper{
            width: 34%;
            img{
                /* width: 34%; */
                height: 100%;
                float: left;
                border-radius: 50%;
                border: 2px solid #fff;
                box-sizing: border-box;
            }
        }
   }
</style>