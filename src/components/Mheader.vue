<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 10:11:26
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-06 20:09:54
 -->
<template>

    <header>
        <div id="topbox">
			<router-link to="/logout">
            <i class="el-icon-setting"></i>
			</router-link>
            <i class="el-icon-full-screen"></i>
        </div>
        
			<div id="contend">
				<div id="topheader">
					<div id="leftheader">
					<router-link :to="towhere">
						<h2>{{name}}</h2>
					</router-link>
						<p>{{miaoshu}}</p>
					</div>
					<img v-if='name=="马上登录"' class="htou" src="../assets/img/toux.jpg" alt="">
<!-- ------------------------------------------------- -->
		<el-upload v-else
		class="avatar-uploader htou"
		action="https://jsonplaceholder.typicode.com/posts/"
		:show-file-list="true"
		:on-success="handleAvatarSuccess"
		:before-upload="beforeAvatarUpload"
		>
			<img  v-if="imageUrl" :src="imageUrl" class="avatar">
			<i v-else ><img  class="htou" src="../assets/img/toux.jpg" alt=""></i>
		</el-upload>
				</div>
					<div id="botheader">
						<span>
							<h2>{{this.$store.state.shCancount}}</h2>
							<span>收藏</span>
						</span>
						<span>
							<h2>-</h2>
							<span>赚入</span>
						</span>
						<span>
							<h2>-</h2>
							<span>拍币</span>
						</span>
						<span>
							<h2>-</h2>
							<span>优惠券</span>
						</span>
						
					</div>
			</div>
		</header>

</template>

<script>

export default {
	// props:["name","password"],
data(){
	return{
		name:"",
		miaoshu:"",
		imageUrl: '',
		towhere:'/Login'
	}
},

created(){
		if(localStorage.length!=1){
			this.name=localStorage.getItem("name");
			this.miaoshu="这是一个在拍拍上颜值有点高的人";
			this.towhere="/CHangezl";
			this.$store.dispatch('getFavour');
		}else if(localStorage.length==1){
			this.name="马上登录",
			this.miaoshu="快上来让拍拍看看"
			// this.show-file-list="true"
		}
		
},
methods:{
		handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
		beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
}


	
}
</script>


<style  lang="scss" scoped >
    header{
			background-color: #17ca64;
			width: 100%;
			height: 2rem;
			position: relative;
            #topbox{
                width: 100%;
                height: .5rem;
                position: relative;
                    .el-icon-setting{
                    font-size: .25rem;
                    color: white;
                    position: absolute;
                    top: 10px;
                    left: 3%;
                }
                .el-icon-full-screen{
                    font-size: .25rem;
                    color: white;
                    position: absolute;
                    top: 10px;
                    left: 13%;
                }
            }
            
		}

		#contend{
			width: 90%;
			height: 2rem;
			background-color: white;
			top:.6rem;
			left: 5%;
			position: absolute;
            border-radius: 2px
		}
		#topheader{
			width: 100%;
			height: 70%;
			display: flex;
			justify-content: center;
		}
		#leftheader{
			width: 70%;
			height:40% ;
			margin: auto 0;
			display: inline-block;
			font-size: .15rem;
                p{
                    font-size: .1rem;
                }
		}
		.htou{
			border-radius: 50%;
			width: 20%;
			height: 40%;
			margin: auto 0;
			display: inline-block;
            position: relative;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
		}
		#botheader{
			width: 100%;
			height: 30%;
			display: flex;
			justify-content: space-around;
			line-height: .2rem;
			text-align: center;
			font-size: .1rem;
		}
		
</style>
