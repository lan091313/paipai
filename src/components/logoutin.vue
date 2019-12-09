<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-29 20:43:58
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-11-29 21:38:17
 -->

<template>
    <div>
<ul id="listul">
        <li>个人设置 <i class="el-icon-arrow-right"></i> </li>
        <li>清除缓存 <i class="el-icon-arrow-right"></i> </li>
        <li>关于拍拍 <i class="el-icon-arrow-right"></i> </li>
        <li>隐私政策 <i class="el-icon-arrow-right"></i> </li>
    </ul>



    </div>
</template>


<script>
export default {
    
}
</script>

<style scoped lang=scss>
#listul{
    width: 100%;
    background-color: white;
    font-size: .17rem;
    
    li{
        padding: 3% 5%;
        border-bottom: 1px solid rgba(0, 0, 0, .04);
        display: block;
        .el-icon-arrow-right{
            float: right;
        }
        .leftwz{
            margin-right: 10px;
        }
    }
}
</style>
