<template>
    <div class="rightt">
        <div style="display:none" >{{typeid}}</div>
        <div v-for="(item ,index) in classRight" :key="index">
            <div class="imgs">
                <img :src="item.img" alt="">
            </div>
            <div>
                <span>{{item.name1}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist1" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
            <div>
                <span>{{item.name2}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist2" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
            <div>
                <span>{{item.name3}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist3" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
            <div>
                <span>{{item.name4}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist4" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
            <div>
                <span>{{item.name5}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist5" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
            <div>
                <span>{{item.name6}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist6" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
            <div>
                <span>{{item.name7}}</span>
                <ul> 
                    <li class="imgst" v-for="(shop,index) in item.shoplist7" :key="index">
                        <div class="imgbox">
                            <img :src="shop.img" alt="">
                        </div>
                        <p>{{shop.name}}</p> 
                    </li>
                </ul>
            </div>
        </div> 
    </div>
    
</template>

<script>
import axios from 'axios';

export default {
    name:'Fright',
    props:['typeid'],
    data(){
        return{
           list:[],
           classRight:[]
        }
    },
    created() {
     //从后端获取数据     
     axios.get('http://localhost:3000/imgs')

     .then(res=>{ 
         this.list = res.data;//内部数据，由于没有渲染在组件里，所以，没有触发组件更新
         console.log(res.data);
         let listArr=[];
         for(let i in this.list){
             if(this.list[i].id==this.typeid){
                 listArr.push(this.list[i]);
             }
         }
         this.classRight = listArr;
     })
     .catch(err=>{
         console.log(err);
     });
  },
  beforeUpdate(){
      console.log("数据更新了------------：");
      
      this.classRight = this.getlist(this.list);
  },
  methods:{
     getlist(data){//根据类型获取数据
         let listArr=[];
         for(let i in this.list){
             if(this.list[i].id==this.typeid){
                 listArr.push(this.list[i]);
             }
         }
         return listArr;
     }
  }
    
}
</script>

<style lang="scss" >
.rightt{
    width: 65%;
     height: 9rem;
    margin-left: 10px;
    background: white;
    float: left;
    overflow: hidden;
    overflow-y: auto;

    .imgs{
        width: 100%;
        height: 1.2rem;
        background: green;
    img{
        width: 100%;
        height: 100%;
        display: block;
        }
    }
    span{
        width: 100%;
        height: 1rem;
        margin: 0 auto;
        font-size: .16rem;
        line-height: 1rem;
        display: block;
         text-align: center;
    }
    ul{
        width: 100%;
        // height: 10rem;
        // background: yellow;
        .imgst{
            width: 30%;
            height: 1.5rem;
            background: white;
            float: left;
            margin-right: 12px;
            box-sizing: border-box;
            margin-bottom: .2rem;
            position: relative;
        .imgbox{
            width: 75%;
            display: block;
            margin: 0 auto;
            padding-top: .2rem;
            padding-bottom: 0rem;
            img{
                width: 100%;
                height: .65rem;
                display: block;
            }
        }
        p{
            width: 100%;
            height: .4rem;
            padding-bottom: 0;
            line-height: .4rem;
            color: gray;
            text-align: center;
            font-size: 14px;
            position: absolute;
            bottom: 0;
        }
    }
  }
}
.rightt ul .imgst:nth-child(3n+3){
    margin-right:0;
}

   


</style>