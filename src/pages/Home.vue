<template>
   <el-container>
    <el-header class="bottom-header fixed-header">
      <div v-loading="apiData.isBottomHeaderInfoLoading">
         <div class="bottom-header-title" v-if="apiData.bottomHeaderInfo" v-html="markdownToHtml(apiData.bottomHeaderInfo.titre)"></div>
         <div class="bottom-header-desc" v-if="apiData.bottomHeaderInfo" v-html="markdownToHtml(apiData.bottomHeaderInfo.sous_titre)"></div>
      </div>
      <router-link :to="{ name: 'OnEnAGros' }"><el-button v-if="apiData.bottomHeaderInfo && apiData.bottomHeaderInfo.bouton_lien" round>Je m'inscris!</el-button></router-link>
    </el-header>
    
    <el-main class="overlapping">
      <el-image :src="news" class="news-logo"></el-image>
      <div class="newsCards" v-loading="apiData.areNewsLoading">
         <el-carousel class="desktop-carousel" v-if="!displayMobile()" ref="carousel" arrow="always" trigger="click" :interval="4000" type="card" height="380px">
            <el-carousel-item v-for="(item, index) in apiData.news" :key="item">
                  <el-image v-if="item.photo" :src="item.photo.url" @click="newsDialogVisible = true; loadSingleNews(item.id)" class="image"></el-image>
                  <div class="newsTitle"> {{ item.titre }}</div>
            </el-carousel-item>
         </el-carousel>

         <el-carousel class="mobile-carousel" v-if="displayMobile()" ref="carousel" indicator-position="outside" arrow="always" trigger="click" :interval="4000" height="250px">
            <el-carousel-item v-for="item in apiData.news" :key="item">
                  <el-image v-if="item.photo" :src="item.photo.url" @click="newsDialogVisible = true; loadSingleNews(item.id)" class="image"></el-image>
                  <div class="newsTitle">{{ item.titre }}</div>
            </el-carousel-item>
         </el-carousel>
      </div>
      <el-image :src="sectionLogo" class="section-logo"></el-image>
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
                           <el-image :src="activity.icone.url"></el-image>
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
                           <el-image :src="workshop.icone.url"></el-image>
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
                           <el-image :src="apiData.kidsCamp.icone.url"></el-image>
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
      v-model="newsDialogVisible"
      width="90%"
      destroy-on-close
      center>
      <div v-loading="apiData.areNewsLoading" class="news-dialog-content">
         <h2 v-if="apiData.singleNews">{{ apiData.singleNews.titre }}</h2>
         <el-image v-if="apiData.singleNews" :src="apiData.singleNews.photo.url"></el-image>
         <div v-if="apiData.singleNews" v-html="markdownToHtml(apiData.singleNews.description)"></div>
         <div v-if="apiData.singleNews && apiData.singleNews.fichiers.length > 0">
            <el-button round v-for="file in apiData.singleNews.fichiers" :key="file" @click="downloadFile(file.url, file.name)">{{ 'Telecharger ' + file.name }}</el-button>
         </div>
         <div v-if="apiData.singleNews">
            <div class="tags" v-if="apiData.singleNews.activites.length > 0 || apiData.singleNews.ateliers.length > 0 || apiData.singleNews.enfants.length > 0">
               <el-tag v-for="activite in apiData.singleNews.activites" :key="activite"><a :href="'/activites/' + activite.id">{{ activite.titre }}</a></el-tag>
               <el-tag type="success" v-for="atelier in apiData.singleNews.ateliers" :key="atelier"><a :href="'/ateliers/' + atelier.id">{{ atelier.titre }}</a></el-tag>
               <el-tag type="warning" v-for="enfant in apiData.singleNews.enfants" :key="enfant"><a :href="'/enfants/' + enfant.id">{{ enfant.titre }}</a></el-tag>
            </div>
         </div>
      </div>
   </el-dialog>
   </el-container>
</template>

<script setup>
   import { ref, watch , onMounted} from 'vue'
   import { useStore } from 'vuex'

   // To parse markdown from api (rich text fields) into html
   import marked from 'marked'

   // To handle responsiveness
   import { useWindowSize } from 'vue-window-size';

   // Images imports
   import sectionLogo from '../assets/afrChavanod.png'
   import news from '../assets/actualites.png'

   // To access the downloadFile function from firebase service
   import * as FirebaseStorageService from '../services/FirebaseStorageService.js'

   const downloadFile = (url, filename) => {
      FirebaseStorageService.downloadFile(url, filename)
   }

   const store = useStore()

   const apiData = store.state.apiData

   const carousel = ref("")
   
   // To fix a carousel display issue
   onMounted(() => {
      carousel.value.setActiveItem(0)
    });

   // To handle news dialog
   const newsDialogVisible = ref(false)
    
   // method used by marked to parse markdown
   const markdownToHtml = (markdown) => {
      return marked(markdown)
   }

   // Initialize window size check
   const { width, height } = useWindowSize();

   // Handle news responsive display
   const displayMobile = () => {
      if(width.value <= 768) {
         return true
      } else {
         return false
      }
   }

   watch(width, () => {
      displayMobile()
   })

   // const sendNotification = () => {
   //    store.dispatch('notifications/sendSuccess', {
   //       title: "Bravo",
   //       message: "Site AFR Chavanod v1"
   //    });
   // }

   // For the carousel display
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

   // For the news dialog
   const loadSingleNews = async (itemId) => {
      try {
         await store.dispatch('apiData/fetchSingleNews', {id: itemId})
      } catch(e) {
         store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger l'actualité",
         duration: 3000
         });
      }
   }
   // For the kids collapse
   const loadKidsCamp = async () => {
      try {
            await store.dispatch('apiData/fetchKidsCamp')
      } catch(e) {
            store.dispatch('notifications/sendError', {
            title: "Erreur",
            message: "Impossible de charger le centre de loisirs",
            duration: 5000
         });
      }
   }
   loadKidsCamp()

   // For the afr collapse
   const loadMission = async () => {
      try {
         await store.dispatch('apiData/fetchMission')
      } catch(e) {
         store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger la mission",
         duration: 5000
         });
      }
   }
   loadMission()

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
      }
      .bottom-header-desc {
         font-size: 26px;
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
         }
         .bottom-header-desc {
            font-size: 16px;
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

      .newsCards {
         // position: relative;
         // top: $topHeaderHeight + $bottomHeaderHeight;
         .desktop-carousel {
            padding-top: 20px;
            .el-carousel__item {
               width: 49%;
               margin-left: 13px;
               border-radius: 30px;
               background-color: white;
               box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
            }
         }
         .mobile-carousel {
            .newsTitle {
               font-size: 24px;
            }
         }
         .newsTitle {
            position: absolute;
            bottom: 0;
            font-size: 40px;
            font-weight: bold;
            width: 100%;
            color: white;
            background: rgb(0,0,0);
            background: linear-gradient(0deg, rgba(0,0,0,1) -20%, rgba(255,255,255,0) 130%);
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
                  font-size: 24px;
               }
               .tags {
                  .el-tag {
                     font-size: 20px;
                  }
               }
            }
         }
      }

      .section-logo {
         margin: 30px 0;
      }
      @media screen and (min-width: 768px) {
         .section-logo {
            width: 30%;
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