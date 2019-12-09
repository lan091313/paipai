<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-12-06 11:01:58
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
     <Mheader></Mheader>
     <Mnav :num=num></Mnav>
     <Moften></Moften>
     <Mlist></Mlist>
     <Footer class="Footer"></Footer>
  </div>
</template>

<script>
import Mheader from '../components/Mheader';
import Mnav from '../components/Mnav';
import Moften from '../components/Moften';
import Mlist from '../components/Mlist';
import Footer from '../components/Footer';
import axios from 'axios';


export default {

  name: 'tripinner',
  data () {
    return {
      num:0
    }
  },
  components:{
     Mheader,Mnav,Moften,Mlist,Footer
  },
  created(){
    this.num =this.$route.query.num;
    console.log(this.$route.query);
  }
  // created(){
  //  axios.get('http://localhost:3000/xiangqing')
  //         .then(res=>{
  //             console.log(res.data);
  //             var index=res.data[1];
  //             // for(let i in res.data[1]){
  //             //   if(res.data[1][i].id==002){
  //             //     console.log(res.data[i]);
  //             //   }
  //             // }
  //         })
  //         .catch(err=>{
  //             console.log(err);
  //         })
  // }
}
</script>

<style scoped lang=scss>
.box{
  background-color: rgb(246, 241, 241);
}



</style>
