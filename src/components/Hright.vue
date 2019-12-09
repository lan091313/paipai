<template>
    <div class="rightt">
        <div style="display:none" >{{typenameid}}</div>
        <ul v-for="(item ,index) in list" :key="index">
            <li>
                <div class="imgs">
                    <img :src="item.img" alt="">
                </div>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name:'Hright',
    props:['typenameid'],
    data(){
        return{
           list:[],
           templist:{}

        }
    },
    created() {
     //从后端获取数据   
     axios.get('http://localhost:3000/Hleft?id='+this.$store.state.typeid)
     .then(res=>{ 
         this.templist=res.data[0];
         //内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         for(let i in this.templist.name){
             if(this.templist.name[i].id==this.typenameid){
                 this.list=this.templist.name[i].goods
             }
         }
     })
     .catch(err=>{
         console.log(err);
     });
  },
  
  beforeUpdate(){
    //   console.log("数据更新了------------：");
    //   console.log(this.typename);
    for(let i in this.templist.name){
             if(this.templist.name[i].id==this.typenameid){
                 this.list=this.templist.name[i].goods
             }
         }
      
  },
    
}
</script>

<style lang="scss" >
.rightt{
    width: 68%;
    height: 5.5rem;
    margin-left: 10px;
    // float: left;
    // overflow: hidden;
    display: flex;
    overflow-y: auto;
    flex-direction: column;

    ul{
        width: 100%;
        height:.7rem;
        
        float: right;
        margin-left: 10px;
        margin-top: 10px;
        flex-shrink: 0;
        li{
            width: 100%;
            height:.65rem;
            background: white;
            border-bottom: 1px solid gray;
            align-items: center;
            flex-shrink: 0;
            display: flex;
            .imgs{
                width: 15%;
                height: .5rem;
                margin-right: 10px;
                img{
                    width: 100%;
                    height: 100%;
                    display: block;
                }
            }
            span{
                width: 65%;
                height: 100%;
                display: block;
                text-align: start;
                flex-shrink: 0;
                
            }
        }
    }

}

   


</style>