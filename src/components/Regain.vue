<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-05 10:42:23
 -->
<template>
<div id="box">
    <h1>手机号注册</h1>
    <input type="text" placeholder="😘请输入手机号" id="textbox" v-model="textphone" @blur="textbox()">
    <span>{{pherr}}</span>
    <input type="text" placeholder="😘请输入密码" id="textbox" v-model="textmima" @blur="textbox2()">
    <span>{{pherr2}}</span>
    <input type="button" value="下一步" id="nextstep" @touchstart="regainin()">
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            textphone:"",
            pherr:"",
            textmima:"",
            pherr2:""
        }
    },
    methods:{
        textbox(){//手机号码的规则：十一位数字，开头是1。
        let reg = /^1\d{10}$/;
        if(!reg.test(this.textphone)||this.textphone==""){
            this.pherr="😜必填！请输入正确的手机号"
        }
        },
         textbox2(){
             let reg=/^\w{6,11}$/;
                if(!reg.test(this.textmima)||this.textmima==""){
                    this.pherr2="🙃！密码不能为空，6~13位数字或字母❤"
                }
        },
        regainin(){
            axios({
                method:"post",
                url:"http://localhost:3000/user",
                data:{
                    id:"",
                name:this.textphone,
                password:this.textmima
                }
                })
            .then((res)=>{
                    console.log(res.data)
                    if(res.request.status==201){
            this.$router.push({path:"/Login"})
        }
                })
            .catch((err)=>{
                console.log(err);
            })
        
        }
    }
}	
</script>


<style  lang="scss" scoped >
#box{
    width: 80%;
    height: 100%;
    padding: 10%;
    h1{
      font-size: .25rem;
  }
  #textbox{
      font-size: .15rem;
        width: 100%;
        border: none;
        height: .5rem;
        display: block;
        border-bottom: .5px solid #cccccc;
        margin: .4rem 0 .1rem;
        outline: none;
  }
  #nextstep{
      width: 100%;
      height: .4rem;
      background-color: #ff3434;
      border-radius: .26rem;
      border: none;
      display: block;
      color: white;
      outline: none;
  }
  span{
      font-size: .15rem;
      color: red;
      display: block;
      margin-bottom: 10px;
  }
}
  
</style>
