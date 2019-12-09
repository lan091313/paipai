<template>
    <div>
        <transition name="bounce">
            <div class="bigbox" v-if="show">
                <div class="bottom"> 
                    <div class="left">
                        <i class="el-icon-s-goods" @touchstart="toZhuanPage"></i>
                    </div>
                    <div class="right">
                        <i class="el-icon-s-platform"  @touchstart="toHphotoPage"></i>
                    </div>
                </div>
            
                <div class="butWord">
                    <div class="leftword">
                        <p id="mai">一建转卖</p>
                        <p id="jing">京东订单，灵活变现</p>
                    </div>
                    <div class="rigthword">
                        <p id="mai">快速回收</p>
                        <p id="jing">专业检测，急速成交</p>
                    </div>
                </div> 
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    data(){
        return{
            show:false,
        }
    },
    mounted(){
        this.show=true
    },
    methods:{
        toZhuanPage(){
            this.$router.push({path:"/ZhuanPage"})
        },
        toHphotoPage(){
          this.$router.push({path:"/HphotoPage"})  
        }
    }
}
</script>
<style>

.bottom{
    width:2.7rem;
    /* height: 1.2rem; */
    /* background: red; */
    margin:1.3rem auto 0;
    display: flex;
    justify-content: space-between;
}
.bottom i{
    font-size: 70px;
    color:white;
}
.left{
    width:1rem;
    height:1rem;
    background: #03d371;
    border-radius: 50%;
    position: relative;
}
.left .el-icon-s-goods{
    position: absolute;
    left:.16rem;
    top:.16rem;
}
.right{
    width:1rem;
    height:1rem;
    background: #fdab0a;
    border-radius: 50%;
    position:relative;
}
.right .el-icon-s-platform{
    position: absolute;
    left:.16rem;
    top:.16rem;
}
.butWord{
    width:3rem;
    height: .8rem;
    /* background:pink; */
    margin:0 auto;
    margin-top:.1rem;
    display: flex;
    justify-content: space-between;
}
.butWord .leftword{
    width:1.5rem;
    height: 1rem;
}
#mai{
    font-size: 18px;
    margin-left:.3rem;
}
#jing{
    font-size: 14px;
    line-height: .3rem;
    margin-left:.1rem;
    color:#999999;
}
.butWord.rigthword{
    width:1.5rem;
    height: 1rem;
    background:blue;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2rem);
  }
  100% {
    transform: translateY(.5rem);
  }
}
</style>