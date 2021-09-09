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
            <el-collapse-item v-loading="apiData.areActivitiesLoading">
               <template #title>
                  <span>🥏</span> ACTIVITES
               </template>
               <div class="activity" v-for="activity in apiData.activities" :key="activity">
                  <a @click="drawer = false" :href="'/activites/' + activity.id">
                  <div class="title">
                    <el-image :src="activity.icone.url" alt="logo activité"></el-image>
                    <p>{{ activity.titre }}</p>
                  </div>
                  </a>
               </div>
            </el-collapse-item>
            <el-collapse-item v-loading="apiData.areWorkshopsLoading">
               <template #title>
                  <span>🧩</span> ATELIERS
               </template>
               <div class="workshop" v-for="workshop in apiData.workshops" :key="workshop">
                  <a @click="drawer = false" :href="'/ateliers/' + workshop.id">
                    <div class="title">
                      <el-image :src="workshop.icone.url" alt="logo atelier"></el-image>
                      <p>{{ workshop.titre }}</p>
                    </div>
                  </a>
               </div>
            </el-collapse-item>
            <el-collapse-item>
               <template #title>
                  <span>🚸</span> ENFANTS
               </template>
               <div class="kids">
                  <div class="kids" v-for="kidActivity in apiData.kidsActivities" :key="kidActivity">
                    <a @click="drawer = false" :href="'/enfants/' + kidActivity.id">
                      <div class="title">
                        <el-image :src="kidActivity.icone.url"></el-image>
                        <p>{{ kidActivity.titre }}</p>
                      </div>
                    </a>
                  </div>
                  <a @click="drawer = false" :href="'/centre-loisirs'">
                     <div class="title">
                        <el-image :src="apiData.kidsCamp.icone.url" alt="logo centre loisirs"></el-image>
                        <p>{{ apiData.kidsCamp.titre }}</p>
                      </div>
                  </a>
               </div>
            </el-collapse-item>
            <el-collapse-item>
               <template #title>
                  <span>👥</span> L'AFR
               </template>
               <div class="afr-info">
                  <a @click="drawer = false" :href="'/mission'">
                     <p v-if="apiData.mission">{{ apiData.mission.titre }}</p>
                  </a>
                  <a @click="drawer = false" :href="'/equipe'">
                     <p>L'équipe / Contacts</p>
                  </a>
                  <a @click="drawer = false" :href="'/construction'">
                     <p>FAQ</p>
                  </a>
               </div>
            </el-collapse-item>
            </el-collapse>
          </div>
        </el-drawer>
      </div>
   </el-header>
</template>

<script setup>

import { ref, watch } from 'vue';
import { useStore } from 'vuex'

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
            font-size: 22px;
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
    }
  }
}

</style>