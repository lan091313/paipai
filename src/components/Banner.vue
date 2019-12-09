<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: 张晓兰
 * @LastEditTime: 2019-11-26 15:03:20
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
      axios.get('http://localhost:3000/img')
      .then(res=>{
          this.imgs = res.data;
         this.$nextTick(function () {
             var mySwiper = new Swiper('#swiper-container1',{
                effect : 'fade',
                speed:300,
            })
         });
     })
     .catch(err=>{
       console.log(err);
     })
  }
}
</script>

<style scoped lang=scss>
    .swiper-container{
       width:100%;
       height: 1.2rem;
       margin: 0 auto .4rem;
       position: relative;
       .swiper-wrapper{
            position: absolute;
            width: 100%;
            height: 100%;
            img{
                position: absolute;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
            img:nth-child(1){
                opacity: 1;
            }
        }
   }
    
</style>