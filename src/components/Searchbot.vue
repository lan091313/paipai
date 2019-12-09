<template>
  <div class="bottom">
    <ul>
      <h3>大家都在搜</h3>
      <li v-for="(item,index) in dajia" :key="'item'+index">
        <span @click="tian(item.name)">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
      return{
        dajia: [],
      }
    },
    created(){
        axios.get("/dajia")
        .then(res=>{
        this.dajia=res.data;
        console.log(this.dajia)
        })
        .catch(err=>{
        console.log(err)
        })
    },
    methods:{
       tian(con){
          axios({
              method:"post",
              url:"/lishi",
              data:{
                  name:con
              }
          })
          .then((data)=>{
              console.log("添加成功"); 
          })
       }
    }
}
</script>

<style lang="scss">
.bottom{
    width:94%;
    height: 2.6rem;
    // background:pink;
    margin:0 auto;
    h3{
      font-size: 20px;
    }
    span{
      width:.8rem;
      height: .3rem;
      background: #f6f6f6;
      float: left;
      font-size: 16px;
      margin-top:.2rem;
      margin-right:.2rem;
      line-height: .3rem;
      text-align:center;
      border-radius: .4rem;
    }
}
</style>