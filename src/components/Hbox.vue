<template>
    <div class="bott">
        <i class="el-icon-s-fold" @click="Q"></i>
        <ul v-show="isShow">
            <li v-for="(item, index) in tops" :key="index" >
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"Hbox",
    data(){
        return{
            tops:"",
            isShow:false
        }
    },
    methods:{
        Q:function(){
            if(this.isShow=!this.isShow){

            }else{

            }
        }
    },
    created(){
        axios("http://localhost:3000/Htop")
        .then(res=>{
            this.tops=res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    }
}
</script>

<style lang="scss" scoped>
.bott{
    width: 100%;
    i{
        font-size: .3rem;
        background: white;
        position: absolute;
        top: 1.5rem;
        right: 0;
        z-index: 30;
    }
    ul{
        width: 100%;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        background: rgb(245, 226, 226);
        position: absolute;
        border-bottom: 1px solid gray;
        top: 1.5rem;
        z-index: 10;
        li{
            padding-top: 10px;
            width: 25%;
            height: .5rem;
            flex-shrink: 0;
            margin-right: 10px;
            text-align: center;
        }
    }
}
</style>