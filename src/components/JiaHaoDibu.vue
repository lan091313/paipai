<template>

  <div class="jiaBox">
    <transition name="fade">
      <router-link to="/">
        <i class="el-icon-close" v-if="show"></i>
      </router-link>
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
    } 
}
</script>
<style lang="scss">
.jiaBox{
    width:15%;
    height: .4rem;
    // background:pink;
    margin:0 auto;
    text-align: center;
    .el-icon-close{
        font-size: 30px;
    }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>