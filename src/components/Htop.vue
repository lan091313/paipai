<template>
    <div class="box">
        <ul>
            <li v-for="(lit,index) in lits" :key="index" @click="changetype(index,lit.id)">
                {{lit.name}}
            </li>
        </ul>
        <div class="contentBox">
            <Hleft :typeid="currtype" ></Hleft>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Hleft from './Hleft';

export default {
    name:'Htop',
    data(){
        return{
            lits:[],
            currtype:"001"
        }
    },
    components:{
        Hleft
    },
    created(){
        axios.get('http://localhost:3000/Htop')
        .then((res)=>{
            this.lits=res.data;
        })
        .catch((error)=>{
            console.log(error);
        })
    },
    methods:{ 
        changetype(index,typeid){
            // console.log(typeid);
            this.currtype=typeid;
            this.$store.commit("changeType",typeid)
        }
    }
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    position: fixed;
    margin-top: 1.4rem;
    ul{
        // position: fixed;
        z-index: 12;
        top: 1rem;
        width: 100%;
        height: .5rem;
        display: flex;
        overflow-x: auto;
        li{
            width: 20%;
            height: .5rem;
            // background: pink;
            float: left;
            margin-right: 5px;
            text-align: center;
            line-height: .5rem;
            flex-shrink: 0;
        }
    }
}  
.contentBox{
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
    // background: red;
}

</style>