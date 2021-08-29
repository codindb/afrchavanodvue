<template>
  <el-container class="base-container">
    <el-header class="top-header">
      <a href="/"><img class="logo-afr" :src="logoAfr" alt="logo afr chavanod"></a>
      <div class="menu-container">
        <el-button @click="drawer = true" size="medium" icon="el-icon-s-fold">
        </el-button>
        <el-drawer
          v-model="drawer"
          :with-header="true"
          :direction="direction()"
          :size="drawerSize()">
          <div class="drawer-content">
            <el-collapse>
            <el-collapse-item>
               <template #title>
                  <span>🧩</span> ACTIVITES
               </template>
               <div class="activity" v-for="activity in apiData.activities" :key="activity">
                  <a @click="drawer = false" :href="'/activites/' + activity.id">
                     <p>{{ activity.titre }}</p>
                  </a>
               </div>
            </el-collapse-item>
            <el-collapse-item>
               <template #title>
                  <span>🎟</span> ATELIERS
               </template>
               <div class="workshop" v-for="workshop in apiData.workshops" :key="workshop">
                  <a @click="drawer = false" :href="'/ateliers/' + workshop.id">
                     <p>{{ workshop.titre }}</p>
                  </a>
               </div>
            </el-collapse-item>
            <el-collapse-item>
               <template #title>
                  <span>🚸</span> ENFANTS
               </template>
               <div class="kids">
                  <a @click="drawer = false" :href="'/notfound'">
                     <p>Activité Enfants</p>
                  </a>
                  <a @click="drawer = false" :href="'/onenagros'">
                     <p>Centre de loisirs</p>
                  </a>
               </div>
            </el-collapse-item>
            <el-collapse-item>
               <template #title>
                  <span>👥</span> L'AFR
               </template>
               <div class="afr-info">
                  <a @click="drawer = false" :href="'/notfound'">
                     <p>Mission</p>
                  </a>
                  <a @click="drawer = false" :href="'/notfound'">
                     <p>L'équipe</p>
                  </a>
                  <a @click="drawer = false" :href="'/notfound'">
                     <p>FAQ</p>
                  </a>
                  <a @click="drawer = false" :href="'/notfound'">
                     <p>Contact</p>
                  </a>
               </div>
            </el-collapse-item>
            </el-collapse>
          </div>
        </el-drawer>
      </div>
    </el-header>

    <el-main class="main">
      <router-view></router-view>
    </el-main>

    <el-footer class="footer">
        <p> Made by codindb with Vue.js</p>
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
import logoAfr from './assets/logoafr.jpg'

// To handle responsiveness
import { useWindowSize } from 'vue-window-size';

const store = useStore()

const apiData = store.state.apiData

// Activation of notification system
store.commit('notifications/SET_NOTIFIER', ElNotification)

// Initialize menu drawer
let drawer = ref(false)

// Initialize window size check
const { width, height } = useWindowSize();

// Handle drawer direction and size
const direction = () => {
  if(width.value <= 768) {
    return "ttb"
  } else {
    return "rtl"
  }
}
const drawerSize = () => {
  if(width.value <= 768) {
         return "auto"
      } else {
         return "30%"
      }
}
watch(width, () => {
  direction()
  drawerSize()
})

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
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; //#

  .logo-afr {
    float: left;
    height: 80px;
    padding: 10px 0;
  }

  .menu-container {
    float: right;

    .el-button {
      margin: 7px 0 !important;
      border: none;
      &:hover {
        color: #606266;
        background: none;
      }
      &:focus {
        color: #606266;
        background: none;
      }
      i{
        font-size: 60px;
      }
    }
    .el-drawer__close {
      font-size: 44px;
    }
  }
  .drawer-content {
    .el-collapse {
      --el-collapse-header-height: 50px;
      .el-collapse-item {
        >:first-child {
            >:first-child {
              font-size: 30px;
              font-weight: bold;
              display: block;
            }
        }
        .activity, .workshop, .kids, .afr-info {
            a{
              text-decoration: none;
            }
            p {
              color: black;
              font-size: 26px;
              margin: 5px 0;
            }
        }
      }
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


// GLOBAL STYLE //
  .fixed-header {
    position: fixed;
    width: 100%;
    z-index: 0;

    h2 {
      color: white;
      font-size: 40px;
      font-weight: bold;
      margin-top: -30px;
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
    border-radius: 30px;
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.3) 0px -30px 30px, rgba(0, 0, 0, 0.22) 0px -15px 12px;
  }
  .page-main {
    margin-top: 170px;
  }
  .bottomGap{
    height: 100px;
  }



</style>
