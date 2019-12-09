<!--
 * @Descripttion:
 * @Author: 张晓兰
 * @Date: 2019-11-19 23:37:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 11:44:55
 * @version: v1.0.0
 -->
<template>
    <div class="Eval">
        <div class="header">
            <i class="el-icon-back" @click="back()"></i>
            <p>发表评价</p>
        </div>
        <div class="Avatar">
             <img :src="this.Detail.src" alt="">
             <p>{{this.Detail.description}}</p>
        </div>
        <ul class="Pentagram">
            <li>
                <span>描述相符</span>
                <el-rate v-model="valuea" show-text class="block"></el-rate>
            </li>
            <li>
                <span>物流服务</span>
                <el-rate v-model="value" show-text class="block"></el-rate>
            </li>
            <li>
                <span>服务态度</span>
                <el-rate v-model="valueb" show-text class="block"></el-rate>
            </li>
        </ul>
        <div class="pic">
            <textarea name="" id="" v-model="picture" placeholder="亲，您对这个商品满意吗?您的评价会帮助我们选择更好的商品哦~"></textarea>
            <div class="picture">
                <i class="el-icon-camera"></i>
                <p id="capture" @click = "capture">上传图片</p>
            </div>
            <span class="tishi">{{msg}}</span>
        </div>
        <button @click="ture">提交评价</button>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"Evaluation",
    props:['id'],
    data() {
        return {
            Detail:[],
            value: null,
            valuea: null,
            valueb: null,
            picture:"",
            msg:""
        }
    },
    created(){
        console.log(this.id)
        axios.get('http://localhost:3000/GoodsDeil/'+this.id)
        .then(res=>{
            this.Detail = res.data;
            console.log(this.Detail);
        })
        .catch(err=>{
        console.log(err);

        })
    },
    mounted() {

    },
    methods: {
        back(){
            this.$router.go(-1);
        },
        ture:function(){
            var d = new Date();
            var year = d.getFullYear();
            var month = d.getMonth()+1;
            month = month < 10 ? '0' + month : month;
            var day = d.getDate();
            day = day < 10 ? '0' + day : day;
            var hours = d.getHours();
            hours = hours < 10 ? '0' + hours : hours;
            var minutes = d.getMinutes();
            minutes = minutes < 10 ? '0' + minutes : minutes;
            var seconds = d.getSeconds();
            seconds = seconds < 10 ? '0' + seconds : seconds;
            var daya = year + '-' + month + '-' +day + ' ' + hours + ':' + minutes + ':' +seconds;
            console.log(daya)
            if(this.picture.length==0){
                this.msg="评论不能为空！";
                this.msg="";
            }else{
                axios({
                    method:'post',
                    url:'http://localhost:3000/Evaluation/',
                    data:{
                        id:this.Detail.id,
                        src:this.Detail.src,
                        description:this.Detail.description,
                        CurrentPrice:this.Detail.CurrentPrice,
                        Eval:this.picture,
                        daya:daya
                    }
                })
                .then((res)=>{
                    this.$router.push({path:"/Evaluation"})
                })
            }
        },
        capture:function(){
            document.getElementById("capture").ontouchstart = function(){
              captureImage();
            }

            function captureImage(){
              var cmr = window.plus.camera.getCamera();//获取摄像头对象
              var res = cmr.supportedImageResolutions[2];//获取支持的分辨率，这里是第三个分辨率,直接使用supportenImageResolutions可以获取自己手机所支持的分辨率有多少种格式，返回值类型 string[]
              var fmt = cmr.supportedImageFormats[0];//JPG格式，

              cmr.captureImage( function( path ){//成功回调函数，获取路径
                      alert( "拍照成功" );
                //把保存在app目录下的照片显示在img标签里
                    window.plus.io.resolveLocalFileSystemURL(path, function(entry) {
                    let  pathPhoto = entry.toLocalURL();
                      console.log(pathPhoto);
                      document.getElementById("imgId").src=pathPhoto;
                    },
                    function(e) {
                        console.log("出错了！");
                    });
                  },
                  function( error ) {
                      alert( "Capture image failed: " + error.message );
                  },
                  {resolution:res,format:fmt}//分辨率和格式，必填，就是上面获取到的。
              );
          }
        }
    },
    components:{

    },
}
</script>

<style scoped lang=scss>
    .Eval{
        width: 98%;
        margin: 0 auto;
        .header{
            width: 96%;
            height: .45rem;
            background: #fff;
            padding:0 2%;
            border-bottom: 1px solid #e4e3e3e7;
            i{
                font-size: .3rem;
                line-height: .45rem;
                color: #333;
                float: left;
            }
            p{
                width: 90%;
                font-size: .18rem;
                line-height: .45rem;
                color: #333;
                float: left;
                text-align: center;
            }
        }
        .Avatar{
            width: 96%;
            height: .6rem;
            padding:0 2%;
            background:#fff;
            border-bottom: 1px solid #e4e3e3e7;
            img{
                width: .5rem;
                height: .5rem;
                margin-top: .05rem;
                float: left;
                border-radius: 5px;
            }
            p{
                font-size: .15rem;
                float: left;
                line-height: .6rem;
                margin-left: 7px;
                color: #666;
                width: 80%;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .Pentagram{
            width: 98%;
            padding: 0 1%;
            margin-bottom: 10px;
            background: #fff;
            li{
                width: 100%;
                height: .4rem;
                color: #333;
                span{
                    font-size: .15rem;
                    line-height: .4rem;
                }
                .block{
                    float: right;
                    width: 78%;
                    padding: .1rem 0;

                }
            }
        }
        .pic{
            position: relative;
            width: 100%;
            height: 2.2rem;
            textarea{
                width: 100%;
                height: 2.2rem;
                border:none;
                outline: none;
                font-size: .16rem;
                padding: 2% 0;
                line-height: .25rem;
            }
            .picture{
                width: .8rem;
                height: .8rem;
                border: 1px dashed #999;
                position: absolute;
                left: 3%;
                bottom :3%;
                text-align: center;
                i{
                    font-size: .5rem;
                    line-height: .5rem;
                    color: #666;
                    margin-top:5px;
                }
                p{
                    font-size: .12rem;
                    line-height: .2rem;
                }
            }
            span{
                width: 100%;
                height: .3rem;
                display: block;
                font-size: .14rem;
                line-height: .3rem;
                text-align: center;
                margin-top:-4%;
            }
        }
        button{
            width: 100%;
            height: .5rem;
            margin-top: .35rem;
            border: none;
            outline: none;
            background: rgb(254, 54, 54);
            color: #fff;
            font-size: .2rem;
            font-family: "楷体";
        }
    }
</style>
