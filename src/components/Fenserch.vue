<template>
    <div class="litt">
        <div class="box">
             <i class="el-icon-search"></i>
            <input class="list" type="text" placeholder="热门二手货">
        </div>
    </div>
    
</template>

<script>
export default {
    name:'Fenserch',
    data(){
        return{

        }
    }
}
</script>

<style lang="scss" scoped>
.litt{
    width: 100%;
    height: .4rem;
    position: fixed;
    z-index:10;
    padding: 10px 0;
    background-color: white;
}
.box{
    width: 94%;
    height: .45rem;
    margin: 0px auto;
    background: rgb(245, 241, 241);
    border-radius: .2rem;
    // position: fixed;
    display: flex;
    align-items: center;
    justify-content:center;
}
.list{
    width: 85%;
    height: .35rem;
    display: block;
    border: 0;
    outline: none;
    margin-left: 15px;
    background: rgb(245, 241, 241);
    
}
.el-icon-search{
    font-size: .2rem;
    // position: absolute;
    left: 8px;
    
}
</style>