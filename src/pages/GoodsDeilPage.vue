
<template>
    <div class="Goods">
        <div class="head">
            <img style="float:left;" src="../assets/img/Back.png" alt="" @click="back()">
            <img style="margin-left:14px;" src="../assets/img/more.png" alt="">
            <img src="../assets/img/share.png" alt="">
        </div>
        <GoodsDeil :id="id"></GoodsDeil>
        <div class="footer">
            <img src="../assets/img/message.png" alt="">
            <span>留言</span>
            <i class="el-icon-star-off" id="off" style="margin-left:.2rem;"  @click="addFavorite"></i><span>收藏</span>
            <span @click="BuyNow" class="btn buy" style="background:#fe3636;color:#ffa293">立即买</span>
            <span class="btn Chat" id="addShop" >聊一聊</span>
        </div>
        <div class="good" @click="goodds"><img src="../assets/img/shopping.png" alt=""></div>

    </div>
</template>

<script>
import axios from 'axios';
import storage from 'good-storage';
import { Toast  } from 'mint-ui';



import GoodsDeil from '../components/GoodsDeil';

export default {
    name:"GoodsDeilPage",
    props:['id'],
     data () {
        return {
           Detail:[],
           popupVisible : false,
        }
    },
    created(){
        axios.get('http://localhost:3000/GoodsDeil/'+this.id)
        .then(res=>{
            this.Detail = res.data;
        })
        .catch((err)=>{
            console.log(err);
        })
        axios("http://localhost:3000/Favorite?id="+this.Detail.id)
        .then((res)=>{
            if(res.data.length!=0){
                document.querySelector('#off').style.color = "rgb(254, 54, 54)"
            }else if(res.data.length==0){
                document.querySelector('#off').style.color = "#333"
            }
        })
    },
    components:{
        GoodsDeil
    },
    methods: {
        back(){
            this.$router.go(-1);
        },

        addFavorite(){
            axios("http://localhost:3000/Favorite?id="+this.Detail.id)
            .then((res)=>{
                if(res.data.length!=0){
                    axios({
                        method:'delete',
                        url:'http://localhost:3000/Favorite/'+this.Detail.id
                    }).then((data)=>{
                        console.log(this.Detail.id)
                        document.querySelector('#off').style.color = "#333"
                    })
                }else if(res.data.length==0){
                    axios({
                        method:"post",
                        url:"http://localhost:3000/Favorite",
                        data:{
                            id:this.Detail.id,
                            src:this.Detail.src,
                            description:this.Detail.description,
                            CurrentPrice:this.Detail.CurrentPrice,
                            Avatar:this.Detail.Avatar,
                            name:this.Detail.name,
                            address:this.Detail.address
                        }
                    })
                    .then((res)=>{
                        if(res.request.status==201){
                            this.$router.push({path:"/GoodsDeilPage/"+this.Detail.id})
                            document.querySelector('#off').style.color = "rgb(254, 54, 54)";
                        }
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        goodds(){
            axios("http://localhost:3000/goodsCar?id="+this.Detail.id)
            .then((res)=>{
                if(res.data.length!=0){
                  let instance = Toast('商品已在购物车中');
                   setTimeout(() => {
                     instance.close();
                   }, 2000);
                  instance();
                }else if(res.data.length==0){
                    axios({
                        method:"post",
                        url:"http://localhost:3000/goodsCar",
                        data:{
                            id:this.Detail.id,
                            src:this.Detail.src,
                            description:this.Detail.description,
                            CurrentPrice:this.Detail.CurrentPrice,
                            Avatar:this.Detail.Avatar,
                            name:this.Detail.name,
                            num:1
                        }
                    })
                    .then((res)=>{
                        if(res.request.status==201){
                            this.$router.push({path:"/GoodsDeilPage/"+this.Detail.id})
                             let instance = Toast('加入购物车成功');
                             setTimeout(() => {
                               instance.close();
                             }, 2000);
                            instance();
                        }
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        BuyNow(){
            axios("http://localhost:3000/Order?id="+this.Detail.id)
            .then((res)=>{
                if(res.data.length!=0){
                    let instance = Toast({
                                        message: '商品已在订单中，请前往付款',
                                        iconClass: 'icon-success'
                                      });
                     setTimeout(() => {
                       instance.close();
                     }, 2000);
                    instance();
                }else if(res.data.length==0){
                    axios({
                        method:"post",
                        url:"http://localhost:3000/Order",
                        data:{
                            id:this.Detail.id,
                            src:this.Detail.src,
                            description:this.Detail.description,
                            CurrentPrice:this.Detail.CurrentPrice,
                            Avatar:this.Detail.Avatar,
                            name:this.Detail.name,
                            num:1
                        }
                    })
                    .then((res)=>{
                        if(res.request.status==201){
                            this.$router.push({path:"/GoodsDeilPage/"+this.Detail.id})
                             let instance = Toast({
                                                 message: '商品已加入订单'
                                               });
                              setTimeout(() => {
                                instance.close();
                              }, 2000);
                             instance();
                        }
                    })
                }
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    },
}
</script>

<style scoped lang=scss>
    .Goods{
        width: 97%;
        margin: 0 auto;
        background: #f0f0f0;
        .head{
            width:100%;
            height: .23rem;
            padding: 3% 0;
            position: fixed;
            top: 0;
            background: #fff;
            img{
                width: 8%;
                height: 100%;
                float: right;
            }
        }
        .footer{
            width:100%;
            height: .25rem;
            padding: 5% 2%;
            position: fixed;
            bottom: 0;
            left: 0;
            background: #fff;
            img{
                width: 7%;
                float: left;
                margin-right: 3px;
            }
            span{
                font-size: 14px;
                line-height: .25rem;
                display: block;
                float: left;
            }
            i{
                width: 7%;
                margin-right: 3px;
                font-size: .25rem;
                line-height: .25rem;
                display: block;
                float: left;
            }
            .btn{
                width: .8rem;
                height: .35rem;
                display: block;
                float: right;
                background: #fde7e9;
                color: #e1a5a4;
                text-align: center;
                line-height: .35rem;
                margin: -2px 14px 0 0;
            }
        }
        .good{
            width: .4rem;
            height: .38rem;
            background: rgb(0, 0, 0);
            position: fixed;
            z-index: 10;
            right: 5%;
            bottom: 15%;
            border-radius: 50%;
            text-align: center;
            padding-top: 4px ;
            background-color: rgba(0, 0, 0,.8);
            img{
                width: 80%;
                height: 80%;
            }
        }
        .show{
          width:100%;
          height:8%;
          text-align:center;
          line-height:.5rem;
          font-size:.25rem;
          font-family:"楷体";
          color:rgb(19, 216, 53);
        }
    }
</style>
