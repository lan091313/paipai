<template>
  <div>
      <LiebiaoTop></LiebiaoTop>
      <LiebiaoMidd :name="name"></LiebiaoMidd>
  </div>
</template>

<script>
import LiebiaoTop from '../components/LiebiaoTop'
import LiebiaoMidd from '../components/LiebiaoMidd'

export default {
    name:"LiebiaoPage",
    props:["name"],
    data(){
        return {
            goodsType:""
        }
    },
    components:{
        LiebiaoTop,LiebiaoMidd
    },
    created(){
        // this.goodsType=this.$route.params.goodsType; 
        console.log("页面级组件"+this.name);
    }

}
</script>

<style>

</style>