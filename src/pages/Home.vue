<template>
   <el-container>
    <el-header class="bottom-header fixed-header">
      <div v-loading="apiData.isBottomHeaderInfoLoading">
         <div class="bottom-header-title" v-if="apiData.bottomHeaderInfo" v-html="markdownToHtml(apiData.bottomHeaderInfo.titre)"></div>
         <div class="bottom-header-desc" v-if="apiData.bottomHeaderInfo" v-html="markdownToHtml(apiData.bottomHeaderInfo.sous_titre)"></div>
      </div>
      <router-link :to="{ name: 'Inscription' }"><el-button v-if="apiData.bottomHeaderInfo && apiData.bottomHeaderInfo.bouton_lien" round>Je m'inscris!</el-button></router-link>
    </el-header>
    
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
    <el-dialog
      v-model="data.newsDialogVisibility"
      width="90%"
      destroy-on-close
      center>
      <div class="news-dialog-content">
         <h2>{{ apiData.news[data.newsIndex].titre }}</h2>
         <el-image :src="apiData.news[data.newsIndex].photo.url" alt="actualité"></el-image>
         <div v-html="markdownToHtml(apiData.news[data.newsIndex].description)"></div>
         <div v-if="apiData.news[data.newsIndex].fichiers.length > 0">
            <el-button round v-for="file in apiData.news[data.newsIndex].fichiers" :key="file" @click="downloadFile(file.url, file.name)">{{ 'Telecharger ' + file.name }}</el-button>
         </div>
         <div v-if="apiData.news">
            <div class="tags" v-if="apiData.news[data.newsIndex].activites.length > 0 || apiData.news[data.newsIndex].ateliers.length > 0 || apiData.news[data.newsIndex].enfants.length > 0">
               <el-tag v-for="activite in apiData.news[data.newsIndex].activites" :key="activite"><a :href="'/activites/' + activite.id">{{ activite.titre }}</a></el-tag>
               <el-tag type="success" v-for="atelier in apiData.news[data.newsIndex].ateliers" :key="atelier"><a :href="'/ateliers/' + atelier.id">{{ atelier.titre }}</a></el-tag>
               <el-tag type="warning" v-for="enfant in apiData.news[data.newsIndex].enfants" :key="enfant"><a :href="'/enfants/' + enfant.id">{{ enfant.titre }}</a></el-tag>
            </div>
         </div>
      </div>
   </el-dialog>
   </el-container>
</template>

<script setup>
   import { ref, inject} from 'vue'
   import { useStore } from 'vuex'

   import Carousel from '../components/Carousel.vue'

   // Images imports
   import sectionLogo from '../assets/logoafr.jpg'
   import news from '../assets/actualites.png'

   // To access the downloadFile function from firebase service
   import * as FirebaseStorageService from '../services/FirebaseStorageService.js'

   // Use firebase service to download file
   const downloadFile = (url, filename) => {
      FirebaseStorageService.downloadFile(url, filename)
   }

   // To use marked (provided globally in main.js)
   const marked = inject('marked')

   const store = useStore()

   const apiData = store.state.apiData
   
   const data = store.state.data
    
   // method used by marked to parse markdown
   const markdownToHtml = (markdown) => {
      return marked(markdown)
   }


   // for the bottom header
   const loadBottomHeaderInfo = async () => {
      try {
         await store.dispatch('apiData/fetchBottomHeaderInfo')
      } catch(e) {
         store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger la une",
         duration: 5000
         });
      }
   }
   loadBottomHeaderInfo()

</script>

<style lang="scss" scoped>

   .bottom-header {
	   /* for positioning */
      height: $bottomHeaderHeightDesktop;
	   background: linear-gradient(180deg, #98cbff, #ffffff);

      /* for content alignment */
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .bottom-header-title {
         margin-top: -50px;
         text-align: center;
         :first-child {
            font-size: 30px;
         }
      }
      .bottom-header-desc {
         margin: 20px 0;
         :nth-child(even) {
            font-size: 24px;
         }
         :nth-child(odd) {
            font-size: 24px;
         }
      }
      .el-button {
         font-size: 26px;
         padding: 8px 40px;
         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }
   }
   @media screen and (max-width: 768px) {
      .bottom-header {
         height: $bottomHeaderHeightMobile;
         .bottom-header-title {
            margin-top: -40px;
            :first-child {
               font-size: 20px;
            }
         }
         .bottom-header-desc {
            :nth-child(even) {
               font-size: 16px;
            }
            :nth-child(odd) {
               font-size: 16px;
            }
         }
         .el-button {
            font-size: 16px;
            padding: 8px 40px;
         }
      }
   }
   .el-main {
      margin-top: ($bottomHeaderHeightDesktop - 30px);
      padding: 0 !important;
      @media screen and (max-width: 768px) {
         margin-top: ($bottomHeaderHeightMobile - 30px);
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

      .el-dialog {
         .news-dialog-content {
            min-height: 500px;
            display: flex;
            flex-direction: column;
            align-items: center;
            word-break: break-word;
            text-align: center;
            .el-button {
               font-size: 14px;
               margin: 10px;
               box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
               a {
                  text-decoration: none;
                  color: #2c3e50;
               }
            }
            .tags {
               margin: 30px 0;
               .el-tag {
                  margin: 10px 5px;
                  font-size: 12px;
                  border-radius: 30px;
               }
               a {
                  text-decoration: none;
                  color: #2c3e50;
               }
            }
            @media screen and (min-width: 768px) {
               h2 {
                  font-size: 40px;
               }
               p {
                  font-size: 30px
               }
               .el-button {
                  font-size: 16px;
               }
               .tags {
                  .el-tag {
                     font-size: 14px;
                  }
               }
            }
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