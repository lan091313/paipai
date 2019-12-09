<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-12-07 14:39:18
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-07 14:55:49
 -->
<template>
    <div class="box">
        <Fenserch ></Fenserch>
        <div class="center">
            <Fleft></Fleft>
        </div>
         <Footer class="Footer"></Footer>
    </div>
</template>

<script>
import Fenserch from '../components/Fenserch';
import Fleft from '../components/Fleft';
import Footer from '../components/Footer';

export default {
    name:'FenPage',
    data(){
        return{

        }
    },
    components:{
        Fenserch,Fleft,Footer
    }
}
</script>

<style scoped>
.box{
  display: flex;
  flex-direction: column;
  height: 100%;  
  position: relative;
}

.center{
  flex: 1;
  overflow-y: auto;
}
</style>