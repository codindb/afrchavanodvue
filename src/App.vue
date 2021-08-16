<template>
  <el-container class="base-container">
    <el-header class="top-header">
      <router-link to="/"><img class="logo-afr" :src="logoAfrUrl" alt="logo afr chavanod"></router-link>
      <div class="menu-container">
        <el-button @click="drawer = true" type="primary" size="medium" icon="el-icon-s-fold" circle>
        </el-button>
        <el-drawer
          v-model="drawer"
          :with-header="true"
          :direction="direction()">
          <span>Hi there!</span>
        </el-drawer>
      </div>
    </el-header>

    <el-main class="main">
      <router-view></router-view>
    </el-main>

    <el-footer class="footer">
        <p> Made by codindb with vue js 3</p>
    </el-footer>
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

body {
  margin:0
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  // margin-top: 60px;
}

.base-container {
  min-height: 100vh;
}
.top-header {
  height: $topHeaderHeight !important;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; //#

  .logo-afr {
    float: left;
    height: 90px;
    padding: 5px 20px;
  }

  .menu-container {
    float: right;

    .el-button {
      margin: 7px 20px !important;
      i{
        font-size: 40px;
      }
    }
    .el-drawer__close {
      font-size: 44px;
    }
  }
}

.main {
  position: relative;
  top: $topHeaderHeight;
  padding: 0 !important;
}

footer {
  background-color: #2c3e50;
  color: #fff;
  z-index: 9;
  height: $topHeaderHeight !important;
}

</style>
