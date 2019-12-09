<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-28 16:47:58
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 11:38:50
 * @version: v1.0.0
 -->
<template>
	<div class="box" id="searchBar">
        <p id="pat">拍拍</p>
        <input id="input" type="text" placeholder="请搜索" @touchstart="toSearchPage">
        <img class="s_sec" src="../assets/img/search_w.png" alt="">
    </div>
</template>

<script>
	export default {
		name: 'Search',
		data() {
			return {
				
			}
		},
		mounted() {
            window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var offsetTop = document.querySelector('#searchBar').offsetTop;

				if(scrollTop >= 5) {
					offsetTop = 0;
                    document.querySelector('#searchBar').style.top = offsetTop + 'px';
                    document.querySelector('#searchBar').style.background = "#fff";
                    document.querySelector("p").style.color = "#13d835";
                    document.querySelector("input").style.backgroundColor=" rgba(241,241,241, .7)";
				} else {
					document.querySelector('#searchBar').style.top = '0';
                    document.querySelector('#searchBar').style.background = "none"
                    document.querySelector("p").style.color = "#fff";
                    document.querySelector("input").style.backgroundColor=" rgba(255,255,255, .7)";
				}
            },
            toSearchPage(){
                this.$router.push({path:"/SearchPage"});
                this.$router.go(1);
            }
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},

	}
</script>

<style scoped lang=scss>
	.box{
       width:100%;
       height: .37rem;
       padding: 2px 2px;
       position: fixed;
       left: 0;
       top: 1%;
       z-index: 5;
       p{
            font-family: "楷体";
            font-size: .35rem;
            color: #fff;
            line-height: .4rem;
            float: left;
        }
        input{
            float: left;
            width: 77%;
            height: .35rem;
            border: none;
            outline: none;
            font-size: .15rem;
            text-indent: .3rem;
            color: #fff;
            background-color: rgba(255,255,255, .7);
            border-radius: 7px;
            margin-left: 5px;
        }
        .s_sec{
            width: .18rem;
            height: .18rem;
            position: absolute;
            top: 25%;
            left: 22%;
        }
    } 
</style>