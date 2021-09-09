<template>
   <el-footer class="footer">
      <h4>Made by</h4>
      <a href="https://codindb.com" target="_blank"><el-image class="codindb" :src="codindb" alt="logo codindb"></el-image></a>
      <h4>with</h4>
      <el-image class="vue-logo" :src="vueLogo" alt="logo Vue.js"></el-image>
   </el-footer>
</template>

<script setup>

// Images
import codindb from '../assets/logoCodindb.png'
import vueLogo from '../assets/logo.png'

</script>

<style lang="scss" scoped>

.footer {
  background-color: white;
  margin-top: 20px;
  color: #2c3e50;
  z-index: 9;
  height: $topHeaderHeight !important;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.19) 0px -5px 10px, rgba(0, 0, 0, 0.23) 0px -3px 3px;
  .codindb {
    width: 120px;
    margin: 0 5px;
  }
  .vue-logo {
    width: 40px;
    margin-left: 6px;
  }
}

</style>