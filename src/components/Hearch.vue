<template>
    <div class="two">
        <Fenserch class="herst"></Fenserch> 
        <i class="el-icon-shopping-cart-2">
            <p>回收车</p>
        </i>
    </div>
</template>

<script>
import Hback from './Hback';
import Fenserch from './Fenserch';

export default {
    name:'Hphoto',
    data(){
        return{

        }
    },
    components:{
        Hback,Fenserch
    }
}
</script>

<style lang="scss" scoped>

.two{
    width: 100%;
    height: .5rem;
    padding-top: 5px;
    display: fixed;
    display: flex;
    align-items: center;
    .herst{
        position: static;
        width: 85%;
        // background: rgb(245, 241, 241);
    }
    i{
        font-size: .4rem;
        p{
            font-size: 12px;
            margin-left: 5px;
        }
    }
}
    

</style>