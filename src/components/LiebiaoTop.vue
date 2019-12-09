<template>
<div class="bigBox">
    <div class="lieBox">
        <img class="jian" src="../assets/img/jiantou.png" alt="" @click="back()">
        <p>--商品列表--</p>
    </div>
</div>

</template>

<script>
export default {
    name:'LiebiaoTop',

    methods:{
        back(){
            this.$router.go(-1);
        }
   }
}
</script>

<style lang="scss">
.bigBox{
    width:100%;
    height:.5rem;
    background:white;
    // background:pink;
    position:fixed;
    top:0;
    display: flex;
    border-bottom:1px solid #eee;
    .lieBox{
        width:100%;
        height:.4rem;
        // background:skyblue;
        display: flex;
        padding-top:.1rem;
    }
    .jian{
        width:.34rem;
        height: .34rem;
        margin-left:.1rem;
    }
    p{
      font-size: 24px;  
      margin-left:.8rem;
    }
}
</style>