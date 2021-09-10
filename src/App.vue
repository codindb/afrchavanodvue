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

// Load data from API for the entire application used at first load to display news, subheader, drawer and collapses

// For the carousel data
const loadNews = async () => {
   try {
      await store.dispatch('apiData/fetchAllNews')
   } catch(e) {
      store.dispatch('notifications/sendError', {
      title: "Erreur",
      message: "Impossible de charger les actualités",
      duration: 5000
      });
   }
}
loadNews()

const loadActivities = async () => {
  try {
      await store.dispatch('apiData/fetchAllActivities')
  } catch(e) {
      console.warn(e);
  }
}
loadActivities()

const loadWorkshops = async () => {
  try {
      await store.dispatch('apiData/fetchAllWorkshops')
  } catch(e) {
      console.warn(e);
  }
}
loadWorkshops()

const loadKidsActivities = async () => {
  try {
      await store.dispatch('apiData/fetchAllKidsActivities')
  } catch(e) {
      console.warn(e);
  }
}
loadKidsActivities()

const loadKidsCamp = async () => {
  try {
      await store.dispatch('apiData/fetchKidsCamp')
  } catch(e) {
      console.warn(e);
  }
}
loadKidsCamp()

const loadMission = async () => {
  try {
      await store.dispatch('apiData/fetchMission')
  } catch(e) {
      console.warn(e);
  }
}
loadMission()

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

// Global Style

// For collapse items
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

// For SingleElement and KidsCamp
.overlapping-content {
  img {
      max-width: 100%;
  }
}

</style>
