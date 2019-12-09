<template>
    <div class="topheader">
        <div class="top">
            <img src="../assets/img/jiantou.png" alt="" @click="back()">
            <span>一键转卖</span>
        </div>
        <div class="word">
            <i class="el-icon-message-solid"></i>
            <p class="miao">虚拟商品及药品暂不支持一键转卖，相关订单已为您屏蔽</p>
        </div>
    </div>

</template>

<script>
export default {
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style lang="scss">
.topheader{
    width:100%;
    height: 1rem;
    background:white;
    position: fixed;
    top:0;
    .top{
        width:100%;
        height: .5rem;
    }
    span{
        font-size: 24px;
        margin-left:.8rem;
        line-height: .6rem;
    }
    .word{
        width:100%;
        height: .5rem;
        background: #fff1d4;
    .el-icon-message-solid{
        font-size: .2rem;
        color:#b17d31;
        margin-left:.02rem;
        line-height: .5rem;
    }
    .miao{
        width: 90%;
        display: inline-block;
        font-size: 13px;
        line-height: .34rem;
        color:#ae7f39;
        margin-left:.1rem;
    }
    }
}
</style>