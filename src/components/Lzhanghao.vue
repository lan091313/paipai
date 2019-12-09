<!--
 * @Author: your name
 * @Date: 2019-11-06 19:43:33
 * @LastEditTime: 2019-12-06 21:17:30
 * @LastEditors: 司小哈
 * @Description: In User Settings Edit
 * @FilePath: \节点旅行\jiedianlvxing\src\pages\index.vue
 -->
<template>
  <div class="box">
    <div id="titbox">
        <h1 @touchstart="changeway1">账号登录</h1>
        <h2 @touchstart="changeway2">验证码登录</h2>
    </div>
    <div id="foadinout">
        <transition name="fade">
      <div class="contendbox">
          <input type="text" placeholder="😘请输入手机号" v-model="name" @blur="check1()">
          <span id="reg1">{{reg1}}</span>
          <input type="password" placeholder="😝还有密码" v-model="password" @blur="check2()">
          <span id="reg2">{{reg2}}</span>
           <input type="submit" value="登录" id="consub" @touchstart="checklogin()">
          <span>忘记密码</span>
          <p>新用户<router-link to="/Regainpage"><span>注册</span></router-link></p> 
      </div>
      </transition>
      <transition name="bounce">
      <div class="contendbox" v-show="isshow[1]">
          <input type="text" placeholder="😘请输入手机号" v-model="name" @blur="check1()">
          <span id="reg1">{{reg1}}</span>
          <input type="text" placeholder="😝还有验证码" v-model="password" @blur="check2()"> <span id="forgetmm">获取验证码</span>
          <span id="reg2">{{reg2}}</span>
         <input type="submit" value="登录" id="consub" @touchstart="checklogin()">
          <p>新用户<router-link to="/Regainpage"><span>注册</span></router-link></p> 
      </div>
      </transition>
    </div>
     <div id="agree">
            <input type="checkbox">  同意
            <el-link type="info" href="https://in.m.jd.com/help/app/private_policy.html">《京东用户注册协议及隐私政策》</el-link>
        </div>
  </div>
</template>

<script>

export default {
    data(){
      return{
         name:"",
         password:"",
         id:"",
         reg1:"",
         reg2:"",
         information:[],
         isshow:[
           true,
           false
         ]
      }
    },
    methods:{
          check1(){
            // 用户名的规则：只能使用数字字母下划线，且数字不能开头，长度在6-15之间
                let reg= /^1\d{10}$/;
                if(!reg.test(this.name)||this.name==null){
                    this.reg1="🙃！不能为空，请输入正确的手机号❤"
                }
          },
          check2(){
                let reg=/^\w{6,11}$/;
                if(!reg.test(this.password)||this.password==""){
                    this.reg2="🙃！密码不能为空，6~13位数字或字母❤"
                }
          },
          checklogin(){
          fetch("http://localhost:3000/user")
          .then((res)=>{
                return res.text(); 
                 console.log("进入")      
          })
          .then((res)=>{
            this.information=JSON.parse(res);

            console.log(this.inforation);
            
            for(let i in this.information){
            console.log(this.information);
            localStorage.setItem("name",this.name);
            localStorage.setItem("password",this.password);
              if(this.name==this.information[i].name&&this.password==this.information[i].password){
                console.log(this.information[i].name);
                localStorage.setItem("id",this.information[i].id);
                  this.$router.push({path:"/Me"})
              }
        }
          })
          .catch((err)=>{
            console.log(err)
          })
        },
        changeway1(){
          this.isshow=[true,false],
          event.target.style=`font-size: .25rem;`
          event.target.nextElementSibling.style=`font-size: .2rem;`
        },
         changeway2(){
          this.isshow=[false,true],
           event.target.style=`font-size: .25rem;`
           event.target.previousElementSibling.style=`font-size: .2rem`
        }
        
    }
    
  }

</script>

<style scoped lang=scss>
.box{
    margin: .4rem 0;
    padding: 10%;
    font-size: .15rem;
	background-color:white;
    #titbox{
      width: 100%;
      height: .5rem;
      display: flex;
        h1{
        font-size: .25rem;
        margin-right: .2rem;
      }
      h2{
        font-size: .2rem;
        margin-right: .2rem;
      }
       
    }
    .contendbox{
        width: 100%;
        height: 100%;
        font-size: .15rem;
        position: absolute;
        top: 0;
        left: 0;
        input{
          width: 100%;
          height: .5rem;
          border: 0;
          margin: 10px 0;
          border-bottom: .5px solid #cccccc;
          outline: none;
          color: #9e9e9e;
          position: relative;
        }
        #reg1,#reg2{
          font-size: .1rem;
          color: red;
        }
        #consub{
          border-radius:.2rem;
          border: none;
          background-color: #e9e9e9;
          margin-bottom: .2rem;
        }
          p{
          display: flex;
          float: right;
          span{
            color:#fc645a;
          }
        }
        #forgetmm{
          font-size: .1rem;
          padding: 1%;
          display: inline-block;
          color: #cccccc;
          position: absolute;
          top: 73%;
          right: 10%;
        }
    }
    
}
#agree{
    font-size: .1rem;
    text-align: center;
    margin-top: 10%;
}
#foadinout{
        width: 100%;
        height: 2.5rem;
        position: relative;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(.5);
  }
}


</style>
