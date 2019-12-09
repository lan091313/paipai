<template>
    <div>
        <i class="el-icon-arrow-left" @click="back()"></i>
    </div>
</template>

<script>
export default {
    name:'Hback',
    data(){
        return{

        }
    },
     methods:{
      back(){
          this.$router.go(-1);
      }
  }
}
</script>

<style lang="scss" scoped>
i{
    font-size: .35rem;
    font-weight: bold;
}
</style>