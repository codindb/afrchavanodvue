<template>
   <el-container>
      <Subheader/>
      <el-main class="home-main">
         <el-image :src="news" class="news-logo" alt="logo actualités"></el-image>
         <div class="newsCards" v-loading="apiData.areNewsLoading">
            <Carousel/>
         </div>
         <el-image :src="sectionLogo" class="section-logo" alt="logo AFR Chavanod"></el-image>
         <div class="sections">
            <el-row justify="space-around">
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <CollapseActivities :closeItem="close"/>
                  </el-collapse>
               </el-col>
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <CollapseWorkshops :closeItem="close"/>
                  </el-collapse>
               </el-col>
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <CollapseKidsActivities :closeItem="close"/>
                  </el-collapse>
               </el-col>
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <CollapseAfr :closeItem="close"/>
                  </el-collapse>
               </el-col>
            </el-row>
         </div>
      </el-main>
      <Dialog/>
   </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

// Components
import Carousel from '../components/Carousel.vue'
import Dialog from '../components/Dialog.vue'
import Subheader from '../components/Subheader.vue'
import CollapseActivities from '../components/CollapseActivities.vue'
import CollapseWorkshops from '../components/CollapseWorkshops.vue'
import CollapseKidsActivities from '../components/CollapseKidsActivities.vue'
import CollapseAfr from '../components/CollapseAfr.vue'

// Images imports
import sectionLogo from '../assets/logoafr.jpg'
import news from '../assets/actualites.png'

//Use of vuex store
const store = useStore()
const apiData = store.state.apiData

// To fix error since we use the closeItem prop on the collapse components (for the drawer menu)
const close = () => {
  return ''
}

</script>

<style lang="scss">

.home-main {
   background-color: white;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   z-index: 1;
   box-shadow: rgba(0, 0, 0, 0.19) 0px -15px 20px, rgba(0, 0, 0, 0.23) 0px -6px 6px;
   margin-top: ($subheaderHeightDesktop - 30px);
   padding: 0 !important;
   @media screen and (max-width: 768px) {
      margin-top: ($subheaderHeightMobile - 30px);
   }
   .news-logo {
      padding: 20px;
      width: 25%;
   }
   @media screen and (max-width: 768px) {
      .news-logo {
         width: 80%;
      }
   }

   .section-logo {
      margin: 30px 0;
      width: 20%
   }
   @media screen and (max-width: 1780px) {
      .section-logo {
         width: 30%;
      }
   }
   @media screen and (max-width: 768px) {
            .section-logo {
               width: 60%;
            }
         }

   .sections {
      margin-bottom: 30px;

      .el-col {
         margin: 30px 0;
      }
      @media screen and (max-width: 768px) {
         .el-col {
            margin: 10px 0;
         }
      }

      .el-collapse {
         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
         border-radius: 20px;
         --el-collapse-border-color: none;
         --el-collapse-header-height: 180px;
         .el-collapse-item {
            >:first-child {
               >:first-child {
                  border-radius: 20px;
                  font-size: 50px;
                  span {
                     font-size: 65px;
                     padding-right: 8px;
                  }
               }
            }
            >:nth-child(2) {
               border-radius: 20px;
            }
            .activity, .workshop, .kids, .afr-info {
               p {
                  font-size: 26px;
               }
            }
         }
      }
      @media screen and (max-width: 768px) {
         .el-collapse {
            --el-collapse-header-height: 100px !important;
            .el-collapse-item {
               >:first-child {
                  >:first-child {
                     font-size: 30px !important;
                  }
                  span {
                     font-size: 46px !important;
                  }
               }
               .activity, .workshop, .kids, .afr-info {
                  p {
                     font-size: 18px;
                  }
               }
            }
         }
      }
   }
}

</style>