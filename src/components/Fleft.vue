<template>
    <div class="box1">
        <div class="leftt">
            <ul>
                <li v-for="(side,index) in sides" :key="index"  @click="changetype(index,side.id)" 
                :class="isactive==index?'sidet':''">
                    {{side.name}}
                </li>
            </ul>
        </div>
        
        <div class="contentBox">
            <Fright :typeid="currtype" ></Fright>
        </div>
    </div>
</template>

<script>
import Fright from './Fright';
import Axios from 'axios';

export default {
    name:'Fleft',
    data(){
        return{
           sides:[],
           isactive:0,
           currtype:"01001"
        }
    },
    components:{
      Fright
  },
    created(){
    Axios.get('http://localhost:3000/labels')
    .then((response)=> {
        console.log(response.data);
        this.sides = response.data;
        // this.currtype = this.sides[0].name;//把拿到的类型的第一个赋给当前类型。
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  methods:{
      changetype(index,typeid){
          console.log(typeid);
          this.isactive=index;
          this.currtype = typeid;
      }
  }
    
}
</script>

<style lang="scss" >
.sidet{
    font-weight: bold;
    background: white;
    border-left:5px solid black;
}
.box1{
    width: 100%;
    overflow: hidden;
    margin-top: .7rem;
    margin-left: 5px;
    .leftt{
        width: 30%;
        height: 9rem;
        float: left;
        box-sizing: border-box;
        display: fixed;
        flex-direction: column;
        overflow-y: auto;
    }
    ul{
        width: 100%;
        overflow: hidden;
        text-align: center;
    li{
        width: 100%;
        overflow: hidden;
        height: .6rem;
        background:rgb(223, 220, 220);
        line-height: .6rem;
        font-size: .18rem;
        color: black;
    }
}
    
}
   



</style>