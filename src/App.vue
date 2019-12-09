<!--
 * @Descripttion: 
 * @Author: 张晓兰
 * @Date: 2019-11-25 17:51:21
 * @LastEditors: 司小哈
 * @LastEditTime: 2019-12-06 19:58:34
 * @version: v1.0.0
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  font-size: 26.67vw;
  height: 100%;
}
body{
  font-size: 14px;
  height: 100%;
  background: #f6f6f6;
}
#app { 
  margin-top: 5px;
  height: 100%;

}
ul,li{
  list-style: none;
}
a{
  text-decoration: none;
  color:#333;
  display: block;
}
</style>
