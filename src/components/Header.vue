<template>
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
            <CollapseActivities/>
            <CollapseWorkshops/>
            <CollapseKidsActivities/>
            <CollapseAfr/>
            </el-collapse>
          </div>
        </el-drawer>
      </div>
   </el-header>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useStore } from 'vuex'

// Components
import CollapseActivities from './CollapseActivities.vue'
import CollapseWorkshops from './CollapseWorkshops.vue'
import CollapseKidsActivities from './CollapseKidsActivities.vue'
import CollapseAfr from './CollapseAfr.vue'

// Images
import logoAfr from '../assets/afrChavanod.png'

// To handle responsiveness
import { useWindowSize } from 'vue-window-size';

// Use of vuex store
const store = useStore()
const apiData = store.state.apiData

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
         return "40%"
      }
}
watch(width, () => {
  direction()
  drawerSize()
})

// Load data from API
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

.top-header {
  height: $topHeaderHeight !important;
  position: fixed;
  width: 100%;
  background-color: white;
  z-index: 99;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  .logo-afr {
    float: left;
    height: 80px;
    padding: 10px 0;
  }
  @media screen and (max-width: 350px) {
    .logo-afr {
      height: 60px;
      padding: 20px 0;
    }
  }

  .menu-container {
    position: absolute;
    right: 0;
    .el-button {
      font-size: 60px;
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
    }
    @media screen and (max-width: 768px) {
      .el-button {
          margin: 15px 0 !important;
          font-size: 50px;
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
            }
        }
        .activity, .workshop, .kids, .afr-info {
          p {
            font-size: 22px;
          }
        }
      }
    }
  }
}

</style>