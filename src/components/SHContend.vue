<!--
 * @Description:
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-06 10:56:03
 -->
<template>
<div id="boxin">
<div id="box">
            <!-- 购物车列表 -->
            <ul>
                <li class="goodsBox" v-for="(goods,index) in this.$store.state.myDD" :key="index">
                    <h3><i class="el-icon-shopping-bag-1"></i>{{goods.name}}</h3>
                    <div id="botbox">
                            <div class="radioBox">
                            <input type="checkbox"  v-model="goods.isChecked" id="color-input-red">
                            <!-- <label  for="color-input-red"></label > -->
                        </div>
                        <div class="goodsImgBox">
                            <img :src="goods.src" alt="">
                        </div>
                        <div class="goodsInfoBox">
                                <p>{{goods.description}}</p>
                                <p>
                                    <span class="price">￥{{goods.CurrentPrice}}</span>
                                <span>
                                        <el-input-number v-model="goods.num" controls-position="left" size="small" @change="handleChange" :min="1" :max="10"></el-input-number>
                                </span>
                                </p>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <div class="goodsTotalBox">
            <input type="checkbox" v-model="allcheck"  id="allCheckBox" @touchstart="checkall" >全选
           <span id="totalMoney"> 合计：￥{{totalMoney}}</span>
           <div id="subdd" @touchstart="submitdd">提交订单</div>
        </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
            return{
                num: 1,
                allcheck:false
            }
    },
    created(){
        this.$store.dispatch('getDD');
    },
  computed:{
      totalMoney:function () {
          let money = 0;
          let isAllCheck = true;
          for(let i in this.allgoods){
              if(this.allgoods[i].isChecked){
                  money+=this.allgoods[i].num*this.allgoods[i].CurrentPrice;
              }else{
                  isAllCheck = false;
              }
          }
          this.allcheck = isAllCheck;
          console.log(money);
          return money;
      }
  },
   methods:{
         handleChange(value) {
        console.log(value);
      },
      reduceCount(index){
          if(this.allgoods[index].num <= 1){
              this.allgoods[index].num=1;
              return;
          }
          this.allgoods[index].num--;
      },
      addCount(index){
          this.allgoods[index].num++;
      },
      checkall(){
        //   console.log(this.allcheck);
          console.log(event.target.checked);
          this.allgoods.forEach(item=>{
              item.isChecked = event.target.checked;
          });
      },
      submitdd(){
            var myDDD=[];
            for(let i in this.$store.state.myDD){
                if(this.$store.state.myDD[i].isChecked){
                    myDDD.push(this.$store.state.myDD[i]);
                }
            }
          console.log(myDDD);
           this.$router.push({path:"/Ddmy",query: {myDD:myDDD,num:myDDD.length}});
      }
   }
}
</script>


<style  lang="scss" scoped >
#boxin{
    width: 90%;
    height: 100%;
    padding: 5%;
    font-size: .15rem;
    #box{
    width: 100%;
    input:after{
        visibility: hidden;
        background-color: red;
    }
}
}
.goodsBox{
    margin-bottom: .3rem;
}

#box>ul{
    width: 100%;
}
#box>ul>li #botbox{
    margin: 10px auto;
    width: 90%;
    height: 1rem;
    border-radius: 15px;
    display: flex;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding: 5%;

}
#box div{
    height: 100%;
}
#box .radioBox{
    width: 12%;

}
#box .radioBox input{
    margin: auto;
    height: 100%;

}
#box .goodsImgBox{
    width:28%;
}
#box .goodsImgBox img{
    width:100%;
    height: 100%;
}
#box .goodsInfoBox{
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#pId{
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
    overflow:hidden;
}
#totalMoney{
    font-size: .2rem;
    color: red;
}
.price{
    color: red;
}
#subdd{
    width: 30%;
    height: .35rem;
    color: white;
    background-color: red;
    border: none;
    float: right;
    border-radius: 5px;
}



// #color-input-red +label{
//         display: block;
//         width: 20px;
//         height: 20px;
//         cursor: pointer;
//         position: absolute;
//         top: 2px;
//         left: 15px;
//         background: rgba(240, 84, 77, 1);
//         }
// #color-input-red:checked +label::before{
//     display: block;
//     content: "\2716";
//     text-align: center;
//     font-size: 16px;
//     color: white;
//     }


</style>
