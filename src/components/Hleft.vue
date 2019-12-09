<template>
    <div class="box1">
        <div class="leftt">
            <span style="display:none">{{typeId}}</span>
            <ul>
                <li v-for="(item,index) in list.name" :key="index" @click="changegetype(index,list.name)" :class="isactive==index?'sidet':''">
                    {{item.ming}}
                </li>
            </ul>
        </div>
        <div class="contentBox1">
            <Hright :typenameid="currtype"></Hright>
                <!-- typenameid是外面传进来的，必须和传进来一致 -->
        </div> 
    </div>
</template>

<script>
import Hright from './Hright';
import Axios from 'axios';

export default {
    name:'Hleft',
    data(){
        return{
            list:[],
           isactive:0,
           currtype:"01001",
           oldtypeId:"001"
        }
    },
    computed:{
        typeId(){
            return this.$store.state.typeid
        }
    },
    components:{
      Hright
  },
    created(){
    Axios.get('http://localhost:3000/Hleft?id='+this.typeId)
    .then((response)=> { 
        this.list = response.data[0];
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  updated(){
      if(this.oldtypeId!=this.typeId){
          this.oldtypeId=this.typeId
           Axios.get('http://localhost:3000/Hleft?id='+this.typeId)
            .then((response)=> { 
                this.list = response.data[0];
            })
            .catch(function (error) {
                console.log(error);
            });
      }
   
  },
  methods:{
      changegetype(index,typenameid){ //typenameid形参，不需要一致，  方便管理和理解，
          console.log(index)  
          this.isactive=index;     
          this.currtype = typenameid[index].id;
      },
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
    // margin-top: .7rem;
    margin-left: 5px;
    .leftt{
        width: 30%;
        // height: 9rem;
        // background: yellow;
        float: left;
        box-sizing: border-box;
    }
    ul{
        width: 100%;
        overflow: hidden;
        text-align: center;
         display: flex;
         height: 5rem;
        overflow-y: auto;
        flex-direction: column;
    li{
        width: 100%;
        overflow: hidden;
        height: .6rem;
        background:rgb(245, 241, 241);
        line-height: .6rem;
        font-size: .18rem;
        color: black;
        flex-shrink: 0;
    }
}
    
}



</style>