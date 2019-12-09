<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-29 20:43:58
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-06 21:11:21
 -->

<template>

    <div>
        <input type="button" value="退出登录" @touchstart="loginout">
    </div>
</template>


<script>
export default {
    methods:{
        loginout(){
            localStorage.removeItem("name");
            localStorage.removeItem("password");
            localStorage.removeItem("id");
            this.$router.push({path:"/Me"});
            this.$router.go(0)
        }
    }
}
</script>

<style scoped lang=scss>
div{
    margin-top:81%; 
    width: 100%;
    input{
        width: 100%;
        height: .5rem;
        color: red;
        background-color: #fff;
        border: none;
        outline: none;
    }
}
</style>
