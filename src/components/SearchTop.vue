<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-12-07 10:27:31
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 11:42:29
 -->
<template>
    <div class="searchBox">
        <input type="text" id="btn01" v-model="content" placeholder="华为mate30" 
        @keydown.enter="searchEnterFun">
            <i @click="sou" class="el-icon-search" id="sous"></i>
            <span @touchstart="toindex">取消</span>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            content:""
        }
    },

    methods:{
        searchEnterFun(e){
            var keyCode = window.event? e.keyCode:e.which;
            console.log('回车搜索',keyCode,e);
            if(keyCode == 13){
                this.sou();
            }
        },
      sou(){
          if(document.getElementById("btn01").value.length==0){
              console.log("输入框不能为空")
              return false;
          }
        axios({
            method:"post",
            url:"/lishi",
            data:{
                name:this.content
            }
        })
        .then(res=>{
            console.log("添加成功");
        })
        this.$emit("sendTypeName",this.content);
        this.$router.push({path:'LiebiaoPage'+this.content});
        this.$router.go(1);  //在浏览器记录中前进一步
      },
      toindex(){
          this.$router.push({path:"/"})
      }
    },
}
</script>
<style lang="scss">
    .searchBox{
        width:100%;
        height:.5rem;
        // background:pink;
        background:white;
        position:relative;
        display: flex;
        input{
            width:80%;
            height: .3rem;
            border-radius: .6rem;
            border:none;
            margin-top:.1rem;
            margin-left:.2rem;
            color:black;
            border:1px solid #ccc;
            outline: none;
            text-indent: .32rem;
        }
        .el-icon-search{
            position:absolute;
            left:.3rem;
            top:.18rem;
            font-size: .18rem;
        }
        span{
            margin-left:.1rem;
            line-height: .5rem;
        }
    }
</style>