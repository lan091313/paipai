<template>
    <div class="box">
        <div class="cent">
            <Hphoto></Hphoto>
            <Hearch></Hearch>
        </div>
        <Htop></Htop>
        <Hbox></Hbox>
    </div>
</template> 

<script>
import axios from 'axios';
import Hphoto from '../components/Hphoto';
import Htop from '../components/Htop';
import Hearch from '../components/Hearch';
import Hleft from '../components/Hleft';
import Hbox from '../components/Hbox';

export default {
    name:'HphotoPage',
    data(){
        return{
            
        }
    },
    components:{
        Hphoto,Htop,Hearch,Hleft,Hbox
    }
}
</script>

<style scoped>
.box{
  width: 100%;
}

.cent{
    width: 100%;
    position: fixed;
    z-index: 12;
    top: .1rem; 
    left: 0;  
}
/* .ying{
    display: none;
}
.xian{
    display: block;
} */
</style>