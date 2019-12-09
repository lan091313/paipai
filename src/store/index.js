/*
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:04:27
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 14:44:29
 */
import Vue from 'vue';
import VueX from 'vueX';
import axios from 'axios';
Vue.use(VueX)

let store= new VueX.Store({
    state: {
        bgc:[
          true,
          false,
          false,
          false,
          false
        ],
        shCan:[],
        shCancount:"-",
        myDD:[],
        Dlength:1,
        typeid:"001"
      },
      actions:{
        getFavour(context){
           fetch("http://localhost:3000/Favorite")
          .then((res)=>{
            return res.json();
            
          })
          .then((data)=>{
              // this.shCan=JSON.parse(res.data);
              context.commit('getFavour',data)
              console.log(data)
          })
          .catch((err)=>{
            console.log(err);
          })
        },
        getDD(context){
          axios.get('http://localhost:3000/goodsCar')
          .then(res=>{
              let goods = res.data;
              //给每个商品增加属性 isChecked
              for(let i in goods){
                  goods[i].isChecked = false;
              }
              context.commit('getDD',goods);
              console.log(goods)
          })
          .catch(err=>{
              console.log(err);
          })
        }
       
      },
      mutations: {
        changeBgc(state,index){
           for(let i in state.bgc){
              state.bgc[i]=false;
            }
            state.bgc[index]=true;
        },
        getFavour(state,shCan){
          state.shCan=shCan;
          console.log(shCan+"-------------hahah ")
          state.shCancount=shCan.length;
          console.log(state.shCan.length+"----------");
        },
        getDD(state,myDD){
          state.myDD=myDD;
          var s=[];
          for(let i in this.allgoods){
              if(this.allgoods[i].isChecked){
                s.push(this.allgoods[i]);
              }
          }
          state.Dlength=s.length;
          // console.log(state.myDD.length+"----------");
        },
        changeType(state,typeId){
          state.typeid=typeId;
 }
      }
})
export default store;
