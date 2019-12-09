<template>
  <div>
      <SearchTop @sendTypeName="sendTypeName"></SearchTop>
      <SearchMid @sendType="sendType"></SearchMid>
      <Searchbot></Searchbot>
  </div>
</template>

<script>
import SearchTop from '../components/SearchTop'
import SearchMid from '../components/SearchMid'
import Searchbot from '../components/Searchbot'

export default {
    name:"SearchPage",
    data(){
        return{
            typeName:""
        }
    },
    components:{
        SearchTop,SearchMid,Searchbot
    },
    methods:{
        sendTypeName(d){
            this.typeName = d;
            this.$emit("sendTypeNameAgain",this.typeName);
        },
        sendType(s){
            this.typeName = s;
            this.$emit("sendType",this.typeName);
        }
    }
}
</script>

<style>

</style>