<template>
  <div class="middle" v-show="isshow">
    <ul>
      <h3>最近搜索</h3>
      <li v-for="ls in lishi" :key="ls.id">
        <span @click="zui(ls.name)">{{ls.name}}</span>
      </li>
      <i class="el-icon-delete" @click="shan"></i>
    </ul>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
import axios from 'axios';
export default {
  data(){
    return {
      lishi:[],
      isshow:true,
      cont:""
    }
  },

  created(){
    axios.get("/lishi")
    .then(res=>{
      this.lishi=res.data;
      console.log(res.data);

    })
    .catch(err=>{
      console.log(err)
    })
  },
methods:{
  shan(){
    MessageBox.confirm('确定删除搜索历史?').then(action => {
      this.lishi.forEach(item=>{
        axios.delete('/lishi/'+item.id)
        .then(res=>{
          axios.get('/lishi')
        .then(res=>{
          this.lishi=res.data;
          console.log(res.data);
          if(this.lishi.length==0){
            this.isshow=false;
          }
        })
        .catch(err=>{
          console.log(err);
        })
      })
        .catch(err=>{
          console.log(err);
        })
    })
  });     
},
  zui(name){
    axios({
        method:"post",
        url:"/lishi",
        data:{
          name:name
        }
      })
      .then(res=>{
      this.$emit("sendType",name);
      this.$router.push({path:'LiebiaoPage'+name});
      this.$router.go(1);  //在浏览器记录中前进一步
      })   
    }
  }
}
</script>

<style lang="scss">
.middle{
    width:94%;
    height:2rem;
    // background:pink;
    margin:.2rem auto 0;
    position:relative;
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
    .el-icon-delete{
      position:absolute;
      top:0;
      left:3.1rem;
      font-size: .28rem;
    }
}
</style>