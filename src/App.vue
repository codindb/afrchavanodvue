<template>
  <el-container>
    
    <el-header class="top-header">
      <img class="logo-afr" :src="url" alt="logo afr chavanod">
    </el-header>
    
    <el-header class="bottom-header">
    </el-header>

    <el-main>
      <router-view></router-view>
    </el-main>

    <el-footer>Footer</el-footer>

  </el-container>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

import { useStore } from 'vuex'
import { ElNotification } from 'element-plus';

const store = useStore()

// Activation of notification system
store.commit('notifications/SET_NOTIFIER', ElNotification)

let url = 'src/assets/logoafr.jpg'


</script>

<style lang="scss">

// Variables
$topHeaderHeight : 100px;
$bottomHeaderHeight: 400px;

body {
  margin:0
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}

.top-header {
  height: $topHeaderHeight !important;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 10;

  .logo-afr {
    float: left;
    height: 90px;
    padding: 5px;
  }
}

.bottom-header {
  height: $bottomHeaderHeight !important;
  position: fixed;
	top: $topHeaderHeight;
  width: 100%;
	background: linear-gradient(45deg, #98cbff, #98ffcb);
  //background-image: url('./assets/appBarBackground.jpg');
}
.el-main {
  position: relative;
	top: $topHeaderHeight + $bottomHeaderHeight; 
  background-color: white;
}
</style>
