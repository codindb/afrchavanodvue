<template>
   <el-container>
    <el-header class="bottom-header fixed-header">
      <div>
         <h3 class="bottom-header-title">Les Inscriptions pour les Activités et Ateliers 2021/2022 sont ouvertes</h3>
         <p class="bottom-header-desc">Pour plus d'informations consultez les pages dédiées aux activités/ateliers</p>
      </div>
      <router-link :to="{ name: 'OnEnAGros' }"><el-button round>Je m'inscris!</el-button></router-link>
    </el-header>
    
    <el-main class="overlapping">
      <el-image :src="news" class="news-logo"></el-image>
      <div class="newsCards" v-loading="apiData.areNewsLoading">
         <el-carousel class="desktop-carousel" v-if="!displayMobile()" ref="carousel" arrow="always" trigger="click" :interval="4000" type="card" height="380px">
            <el-carousel-item v-for="(item, index) in apiData.news" :key="item">
                  <el-image :src="item.photo.url" @click="newsDialogVisible = true; loadSingleNews(item.id)" fit="fill" class="image"></el-image>
                  <div class="newsTitle"> {{ item.titre }}</div>
            </el-carousel-item>
         </el-carousel>

         <el-carousel class="mobile-carousel" v-if="displayMobile()" ref="carousel" indicator-position="outside" arrow="always" trigger="click" :interval="4000" height="250px">
            <el-carousel-item v-for="item in apiData.news" :key="item">
                  <el-image :src="item.photo.url" @click="newsDialogVisible = true; loadSingleNews(item.id)" fit="fill" class="image"></el-image>
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
                     <span>🧩</span> ACTIVITES
                  </template>
                  <div class="activity" v-for="activity in apiData.activities" :key="activity">
                     <router-link :to="{ name: 'Activite', params: {id: activity.id } }" >
                        <h3>{{ activity.titre }}</h3>
                     </router-link>
                  </div>
               </el-collapse-item>
               </el-collapse>
            </el-col>
            <el-col :span="20" :md="10">
               <el-collapse>
               <el-collapse-item v-loading="apiData.areWorshopsLoading">
                  <template #title>
                     <span>🎟</span> ATELIERS
                  </template>
                  <div class="workshop" v-for="workshop in apiData.workshops" :key="workshop">
                     <router-link :to="{ name: 'Atelier', params: {id: workshop.id } }" >
                        <h3>{{ workshop.titre }}</h3>
                     </router-link>
                  </div>
               </el-collapse-item>
               </el-collapse>
            </el-col>
            <el-col :span="20" :md="10">
               <el-collapse>
               <el-collapse-item>
                  <template #title>
                     <span>🚸</span> ENFANTS
                  </template>
                  <div class="kids">
                     <!-- <router-link :to="{ name: 'Atelier', params: {id: workshop.id } }" > -->
                        <h3>Activité Enfants</h3>
                        <h3>Centre de loisirs</h3>
                     <!-- </router-link> -->
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
                     <!-- <router-link :to="{ name: 'Atelier', params: {id: workshop.id } }" > -->
                        <h3>Mission</h3>
                        <h3>L'équipe</h3>
                        <h3>FAQ</h3>
                        <h3>Contact</h3>
                     <!-- </router-link> -->
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
      <div class="news-dialog-content">
         <h2>Toto</h2>
         <el-image :src="news"></el-image>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolores quae sint expedita minima facere in laborum, necessitatibus ex sed. Commodi animi accusamus omnis ab deleniti non rerum ipsa magni.</p>
      </div>
   </el-dialog>
   </el-container>
</template>

<script setup>
   import { ref, watch , onMounted} from 'vue'
   import { useStore } from 'vuex'

   // To handle responsiveness
   import { useWindowSize } from 'vue-window-size';

   // Images imports
   import sectionLogo from '../assets/afrChavanod.png'
   import news from '../assets/actualites.png'

   const store = useStore()

   const apiData = store.state.apiData

   const carousel = ref("")
   
   // To fix a carousel display issue
   onMounted(() => {
      carousel.value.setActiveItem(0)
    });

   // To handle news dialog
   const newsDialogVisible = ref(false)
    

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
         message: "Impossible de charger les données",
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
         message: "Impossible de charger les données",
         duration: 3000
         });
      }
   }
   // For the activities collapse
   const loadActivities = async () => {
      try {
         await store.dispatch('apiData/fetchAllActivities')
      } catch(e) {
         store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger les données",
         duration: 5000
         });
      }
   }
   loadActivities()
   
   // for the workshops collapse
   const loadWorkshops = async () => {
      try {
         await store.dispatch('apiData/fetchAllWorkshops')
      } catch(e) {
         store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger les données",
         duration: 5000
         });
      }
   }
   loadWorkshops()

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
         font-size: 40px;
         margin-top: -50px;
         text-align: center;
      }
      .bottom-header-desc {
         font-size: 26px;
         text-align: center;
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
            font-size: 20px;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            @media screen and (min-width: 768px) {
               h2 {
                  font-size: 40px;
               }
               p {
                  font-size: 30px
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
                  h3 {
                     color: black;
                     font-size: 36px;
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
                     h3 {
                        font-size: 26px
                     }
                  }
               }
            }
         }
      }
   }

</style>