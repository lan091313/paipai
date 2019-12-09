<template>
  <div class="middleBox">
    <!-- <div class="classBox">
      <ul>
        <li>全部商品</li>
        <li >价格</li>
      </ul>
    </div> -->
    <div class="liebiaoBox">
      <ul>
        <li v-for="(list,index) in sousuoliebiao" :key="index">
            <img :src="list.img" alt="">
            <p>{{list.miaoshu}}</p>
            <p>￥{{list.price}}</p>
            <p>{{list.diqu}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'LiebiaoMidd',
    props: ["name"],
    data(){
      return {
        sousuoliebiao:[],
        type:this.typeName
      }
    },
    created(){
      axios.get("/sousuoliebiao",{params:{name_like:this.name}})
      .then(res=>{
        this.sousuoliebiao=res.data;
      })
      .catch(err=>{
        console.log(err);
      })
    },
    watch:{
      typeName:function(val){
        this.typeName=val;
      }
    }
}
</script>

<style lang="scss">
.middleBox{
  width:100%;
  height:1rem;
  margin-top:.6rem;
  .classBox{
    width:100%;
    height:.4rem;
    ul{
      display: flex;
      justify-content: space-around;
      line-height: .4rem;
      background:#eee;
    }
  }
  .liebiaoBox{
    width:100%;
    height: 3rem;
    // background:pink;
    margin-top:.1rem;
    ul{
      width:100%;
      height: 1.4rem;
      li{
        width:100%;
        height: 1.4rem;
        margin-top:.1rem;
      }
    }
    img{
      width:33%;
      height: 1.4rem;
      float:left;
    }
    p{
      width:65%;
      float: right;
      font-size: 16px;;
    }
    p:nth-child(2){
      margin-top:.1rem;
    }
    p:nth-child(3){
      color:red;
      font-size: 16px;
      margin-top:.14rem;
    }
    p:nth-child(4){
      font-size: 14px;
      color:#ccc;
      margin-top:.12rem;
    }
  }
}
</style>