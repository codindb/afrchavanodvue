<template>
   <el-container>
      <Subheader />
      <el-main class="overlapping">
         <el-image :src="news" class="news-logo" alt="logo actualités"></el-image>
         <div class="newsCards" v-loading="apiData.areNewsLoading">
            <Carousel />
         </div>
         <el-image :src="sectionLogo" class="section-logo" alt="logo AFR Chavanod"></el-image>
         <div class="sections">
            <el-row justify="space-around">
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <el-collapse-item v-loading="apiData.areActivitiesLoading">
                     <template #title>
                        <span>🥏</span> ACTIVITES
                     </template>
                     <div class="activity" v-for="activity in apiData.activities" :key="activity">
                        <router-link :to="{ name: 'Activite', params: {id: activity.id } }" >
                           <div class="title">
                              <el-image :src="activity.icone.url" alt="logo activité"></el-image>
                              <p>{{ activity.titre }}</p>
                           </div>
                        </router-link>
                     </div>
                  </el-collapse-item>
                  </el-collapse>
               </el-col>
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <el-collapse-item v-loading="apiData.areWorkshopsLoading">
                     <template #title>
                        <span>🧩</span> ATELIERS
                     </template>
                     <div class="workshop" v-for="workshop in apiData.workshops" :key="workshop">
                        <router-link :to="{ name: 'Atelier', params: {id: workshop.id } }" >
                           <div class="title">
                              <el-image :src="workshop.icone.url" alt="logo atelier"></el-image>
                              <p>{{ workshop.titre }}</p>
                           </div>
                        </router-link>
                     </div>
                  </el-collapse-item>
                  </el-collapse>
               </el-col>
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <el-collapse-item v-loading="apiData.areKidsActivitiesLoading">
                     <template #title>
                        <span>🚸</span> ENFANTS
                     </template>
                     <div class="kids">
                        <div class="kids" v-for="kidsActivity in apiData.kidsActivities" :key="kidsActivity">
                           <router-link :to="{ name: 'Enfants', params: {id: kidsActivity.id } }" >
                              <div class="title">
                                 <el-image :src="kidsActivity.icone.url"></el-image>
                                 <p>{{ kidsActivity.titre }}</p>
                              </div>
                           </router-link>
                        </div>
                        <router-link :to="{ name: 'CentreLoisirs'}">
                           <div class="title" v-if="apiData.kidsCamp">
                              <el-image :src="apiData.kidsCamp.icone.url" alt="logo centre loisirs"></el-image>
                              <p v-loading="apiData.isKidsCampLoading">{{ apiData.kidsCamp.titre }}</p>
                           </div>
                        </router-link>
                     </div>
                  </el-collapse-item>
                  </el-collapse>
               </el-col>
               <el-col :span="20" :md="10">
                  <el-collapse>
                  <el-collapse-item>
                     <template #title>
                        <span>👥</span> L'AFR
                     </template>
                     <div class="afr-info">
                        <router-link :to="{ name: 'Mission' }" >
                           <p v-if="apiData.mission" v-loading="apiData.isMissionLoading">{{ apiData.mission.titre }}</p>
                        </router-link><router-link :to="{ name: 'Equipe' }" >
                           <p>L'équipe / Contacts</p>
                        </router-link>
                        <router-link :to="{ name: 'UnderConstruction' }" >
                           <p>FAQ</p>
                        </router-link>
                     </div>
                  </el-collapse-item>
                  </el-collapse>
               </el-col>
            </el-row>
         </div>
         <div class="bottomGap"></div>
      </el-main>
      <Dialog />
   </el-container>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

// Components
import Carousel from '../components/Carousel.vue'
import Dialog from '../components/Dialog.vue'
import Subheader from '../components/Subheader.vue'

// Images imports
import sectionLogo from '../assets/logoafr.jpg'
import news from '../assets/actualites.png'

//Use of vuex store
const store = useStore()

const apiData = store.state.apiData

</script>

<style lang="scss" scoped>
   .el-main {
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
                     font-weight: bold;
                     display: block;
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
                  a{
                     text-decoration: none;
                  }
                  p {
                     color: black;
                     font-size: 26px;
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