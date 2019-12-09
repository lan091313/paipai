<template>
    <div class="box1">
        <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane v-for="(side,index) in sides" :key="index" label="side.name">
                <div class="rightt">
                    <div class="imgs">
                        <img src="../assets/img/1.gif" alt="">
                    </div>
                    <p>——热门分类——</p>
                    <div class="imgst">
                         <img src="../assets/img/1.png" alt=""> 
                        <p>手机</p> 
                    </div>
                    <div class="imgst">
                         <img src="../assets/img/1.png" alt=""> 
                        <p>手机</p> 
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name:'Fside',
    data(){
        return{
           tabPosition: 'left',
           sides:[]
        }
    },
    created(){
    fetch('http://localhost:3000/labels')
      .then(res=>{
        return res.json();
        console.log(res.json);
      })
        
      .then(data=>{
         
         this.sides = data;
     })
     .catch(err=>{
       console.log(err);
     })
  }
    
}
</script>

<style lang="scss" >
.box1{
    width: 100%;
    height: 10rem;
    background: pink;
}
.el-tabs__nav-scroll{
    width: 100%;
    height: 9rem;
    background: yellow;
}
.rightt{
    width: 100%;
    height: 10rem;
    background: gray;
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
}
.rightt .imgst:nth-child(3n+2){
            margin-right:0;
        }
.el-tab-pane{
    p{
        width: 100%;
        margin: .4rem auto;
        font-size: .16rem;
    }
    .imgst{
        width: 30%;
        height: 1.5rem;
        background: red;
        float: left;
        margin-right: 12px;
        box-sizing: border-box;
        margin-bottom: .2rem;
        img{
            width: 65%;
            display: block;
            margin: 0 auto;
            padding: .2rem 0 0;
        }
        p{
            width: 100%;
            height: .5rem;
            margin-top: .1rem;
            line-height: .5rem;
            color: gray;
        }
    }
}
.el-tabs--left{
    overflow: visible;
}

</style>