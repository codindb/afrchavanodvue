<template>
  <el-container>
    
    <el-header class="top-header">
      <img class="logo-afr" :src="logoAfrUrl" alt="logo afr chavanod">
      <el-container class="menu-container">
        <el-button @click="drawer = true" type="primary" size="medium" icon="el-icon-s-fold" circle>
        </el-button>
        <el-drawer
          v-model="drawer"
          :with-header="true"
          :direction="direction()">
          <span>Hi there!</span>
        </el-drawer>
      </el-container>
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

import { ref, watch } from 'vue';
import { useStore } from 'vuex'
import { ElNotification } from 'element-plus';

// Logo Url
import logoAfrUrl from './assets/logoafr.jpg'

// To handle responsiveness
import { useWindowSize } from 'vue-window-size';

const store = useStore()

// Activation of notification system
store.commit('notifications/SET_NOTIFIER', ElNotification)

// Initialize menu drawer
let drawer = ref(false)

// Initialize window size check
const { width, height } = useWindowSize();

// Handle drawer direction
const direction = () => {
  if(width.value <= 768) {
    return "ttb"
  } else {
    return "rtl"
  }
}
watch(width, () => {
  direction()
})


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

  .menu-container {
    float: right;

    .el-button {
      margin: 7px !important;
      i{
        font-size: 40px;
      }
    }
    .el-drawer__close {
      font-size: 44px;
    }
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
