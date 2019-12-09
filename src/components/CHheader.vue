<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-06 21:35:27
 -->
<template>
<div id="box">
    <header>
        <i class="el-icon-arrow-left" @touchstart="goback()"></i>
        <h3>修改信息</h3>
        <i class="el-icon-share righti"></i>
    </header>
    <nav>
            <ul>
                <li>用户名：<input type="text"  v-model="newname"></li>
                <li>密&nbsp;&nbsp;&nbsp;码：<input type="text"   v-model="newpass"></li>
                <li><input type="submit" @touchstart="changexx(id,newname,newpass)"></li>
            </ul>
            
    </nav>
        
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            newname:"",
            newpass:"",
            id:""
        }
    },
    created(){
        this.newname=localStorage.getItem("name");
        this.newpass=localStorage.getItem("password");
        this.id=localStorage.getItem("id");
        console.log(localStorage.getItem("id"));
        // setTimeout(()=>{
               
        // },2000);
            
    },
    methods:{
        goback(){
            this.$router.go(-1);
        },
        changexx(id,newname,newpass){
             axios({
                method:"patch",
                url:" http://localhost:3000/user/"+id,//ID
                data:{ 
                id: 'id',
                name:'newname',
                password:'newpass',
                img: ""
                //要修改成什么
                
                }
                })
                .then((data)=>{
                    console.log(this.id);
                console.log(data);
                })


            this.$router.push({path:"/Me"});

        }
    }
}	
</script>


<style  lang="scss" scoped >
#box{
    width: 90%;
    padding:5% 5%;
    display: block;
    overflow: hidden;
    header{
        width: 100%;
        height: .3rem;
        display: flex;
        justify-content: space-between;
        h3{
            text-align: center;
        }
        i{
       font-size: .3rem;
       float: left;
       margin-right: 10px;
   }
   .righti{
       float: right;
   }
    }
nav{
    width: 100%;
    height: 1.7rem;
    margin-top: .5rem;
    position: relative;
    ul{
        li{
            width: 100%;
            height: .5rem;
            font-size: .2rem;
            margin: 10px 0;
            input{
            width: 75%;
            height: .3rem;
            border: none;
            outline: none;
            border-bottom: 1px solid #cccccc;
            float: right;
            font-size: .2rem;
            display: block;
        }
        }
        
    }
}
}
</style>
