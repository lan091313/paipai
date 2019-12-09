<template>
        <div class="her">
            <Hback class="lef"></Hback>
            <h2>拍拍回收</h2>
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
.her{
    width: 100%;
    height: .65rem;
    text-align: center;
    line-height: .65rem;
    .lef{
            float: left;
    }
}
.two{
    width: 100%;
    height: .5rem;
    padding-top: 5px;
    display: flex;
    align-items: center;
    .herst{
        position: static;
        width: 85%;
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