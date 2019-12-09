<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: 司小哈
 * @Date: 2019-11-26 17:45:05
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-11-26 18:09:42
 -->
<template>
    <ul id="listul">
        <li> <i class="el-icon-question leftwz"></i> 帮助中心 <i class="el-icon-arrow-right"></i> </li>
        <li> <i class="el-icon-s-opportunity leftwz"></i> 防骗指南 <i class="el-icon-arrow-right"></i> </li>
        <li> <i class="el-icon-s-comment leftwz"></i> 意见与建议 <i class="el-icon-arrow-right"></i> </li>
        <li> <i class="el-icon-share leftwz"></i> 推荐给朋友 <i class="el-icon-arrow-right"></i> </li>
        <li> <i class="el-icon-message-solid leftwz"></i> 消息助手 <i class="el-icon-arrow-right"></i> </li>
    </ul>
</template>


<script>
export default {
    
}
</script>

<style scoped lang=scss>
#listul{
    width: 100%;
    height: 3rem;
    background-color: white;
    font-size: .17rem;
    li{
        padding: 5% 5%;
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