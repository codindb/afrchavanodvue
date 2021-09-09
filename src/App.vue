<template>
  <el-container class="base-container">
    <Header />
    <el-main class="main">
      <router-view></router-view>
      <Footer />
    </el-main>
  </el-container>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md

import { useStore } from 'vuex'
import { ElNotification } from 'element-plus';

// Components
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

const store = useStore()

// Activation of notification system
store.commit('notifications/SET_NOTIFIER', ElNotification)

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

.main {
  position: relative;
  top: $topHeaderHeight;
  padding: 0 !important;
}

// GLOBAL STYLE //
  .fixed-header {
    position: fixed;
    width: 100%;
    z-index: 0;

    h2 {
      color: white;
      font-size: 46px;
      font-weight: bold;
      margin-top: -20px;
    }
    @media screen and (max-width: 768px) {
      h2 {
          font-size: 30px;
      }
    }
  }
  .page-header {
    // for positioning
    height: 200px !important;

    // for content
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .overlapping {
    background-color: white;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.19) 0px -15px 20px, rgba(0, 0, 0, 0.23) 0px -6px 6px;
    .overlapping-content {
      min-height: 300px;
      a {
        text-decoration: none;
        color: #2c3e50;
      }
      .hr {
        width: 5%;
        margin: 20px auto;
      }
      img {
        max-width: 100%;
        width: 20%;
      }
      @media screen and (max-width: 768px) {
        .hr {
            width: 30%;
        }
        img {
          max-width: 100%;
          width: 60%;
        }
      }
    }
  }
  .page-main {
    margin-top: 170px;
  }

  @media screen and (min-width: 768px) {
    p {
        font-size: 16px;
        margin: 5px 0;
    }
    h3 {
      font-size: 22px;
      margin: 8px 0;
    }
  }

.el-collapse-item {
  >:first-child {
    >:first-child {
      font-weight: bold;
      display: block;
    }
  }
  .activity, .workshop, .kids, .afr-info {
    a{
        text-decoration: none;
    }
    p {
        color: #2c3e50;
        margin: 5px 0;
    }
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      .el-image {
      height: 30px;
      width: 30px;
      margin-right: 5px;
      }
    }
  }
}

</style>
