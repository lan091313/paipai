<!--
 * @Descripttion:
 * @Author: 张晓兰
 * @Date: 2019-11-28 16:47:58
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 17:54:12
 * @version: v1.0.0
 -->
<template>
    <div id="searchBar">
        <ul id="FlexNav"  :class="searchBarFixed == true ? 'isFixed' :''">
            <li class="IndexAll" :style="{color:mag}" @click="changeContA">
                全部
            </li>
            <li id="machine" @click="changeContB" :style="{color:mbg}">
                已验机
            </li>
            <li id="parts" @click="changeContC" :style="{color:mcg}">
                京东备件库
            </li>
             <li id="recommend" @click="changeContD" :style="{color:meg}">
                大牌推荐
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    import axios from 'axios';

	export default {
        name: 'Search',
        // props:['class'],
		data() {
			return {
                types:[],
                currtype:"",
                searchBarFixed:"ture",
                mag:"",
                mbg:"",
                mcg:"",
                mdg:"",
                meg:""
            }
        },
        created(){

        },
		mounted() {
			window.addEventListener('scroll', this.handleScroll)
		},
		methods: {
            changetype(typename){
                console.log(typename);
                this.currtype = typename;
            },
			handleScroll() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
               if(scrollTop >800){
                    this.searchBarFixed = true ;
                }else{
                    this.searchBarFixed = false;
                }
            },
            changeContA(){
                this.$router.push({path:'/IndexAll'});
                this.mag= "rgb(19, 216, 53)";
                this.mbg= "#666";
                this.mcg= "#666";
                this.meg= "#666";
            },
            changeContB(){
                this.$router.push({path:'/IndexMachine'})
                this.mbg= "rgb(19, 216, 53)";
                this.mag= "#666";
                this.mcg= "#666";
                this.meg= "#666";
            },
            changeContC(){
                this.$router.push({path:'/IndexParts'})
                this.mcg= "rgb(19, 216, 53)";
                this.mag= "#666";
                this.meg= "#666";
                this.mbg= "#666";
            },
            changeContD(){
                this.$router.push({path:'/IndexRecommend'})
                this.meg= "rgb(19, 216, 53)";
                this.mag= "#666";
                this.mcg= "#666";
                this.mbg= "#666";
            }
		},
		destroyed() {
			window.removeEventListener('scroll', this.handleScroll)
		},

	}
</script>

<style scoped lang=scss>
    .isFixed{
        position:fixed;
        background-color:#fff;
        top:.37rem;
        z-index:999;
        margin: 0;
    }
	#FlexNav{
        width: 100%;
        height: .25rem;
        padding: .15rem 0;
         display: -webkit-flex;
        -webkit-justify-content:space-around;
        li{
            width: 25%;
            height: 96%;
            border-right:1px solid #d8d8d8;
            text-align: center;
            font-size: 15px;
            line-height: .2rem;
            color: #666;
        }
    }
</style>
