<template>

   <el-affix :offset="100">
   <div class="bottom-header">
      <!-- <el-image :src="bottomHeaderImage" :fit="imageFill()"></el-image> -->
      <div>
         <h2 class="bottom-header-title">Les Inscriptions pour les Activités et Ateliers 2021/2022 sont ouvertes</h2>
         <p class="bottom-header-desc">Pour plus d'informations consultez les pages dédiées aux activités/ateliers</p>
      </div>
      <el-button round>Je m'inscris!</el-button>
   </div>
   </el-affix>
   <div>

      <el-image :src="news1" class="news-logo"></el-image>
      <div class="newsCards">
         <el-empty v-if="apiData.areNewsLoading" description="Chargement..."></el-empty>

         <el-carousel class="desktop-carousel" v-if="!displayMobile()" ref="carousel" arrow="always" trigger="click" :interval="4000" type="card" height="380px">
            <el-carousel-item v-for="(item, index) in apiData.news" :key="item">
                  <router-link :to="{ name: 'Actualite', params: {id: item.id } }" ><el-image :src="item.photo.url" fit="fill" class="image"></el-image></router-link>
                  <div class="newsTitle"> {{ item.titre }}</div>
            </el-carousel-item>
         </el-carousel>

         <el-carousel class="mobile-carousel" v-if="displayMobile()" ref="carousel" indicator-position="outside" arrow="always" trigger="click" :interval="4000" height="250px">
            <el-carousel-item v-for="item in apiData.news" :key="item">
                  <router-link :to="{ name: 'Actualite', params: {id: item.id } }" ><el-image :src="item.photo.url" fit="fill" class="image"></el-image></router-link>
                  <div class="newsTitle">{{ item.titre }}</div>
            </el-carousel-item>
         </el-carousel>
         
      </div>
      <el-image :src="sectionLogo" class="section-logo"></el-image>
      <div class="sections">
         <el-row justify="space-around">
            <el-col :span="20" :md="10">
               <el-collapse>
               <el-collapse-item>
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
               <el-collapse-item>
                  <template #title>
                     <span>🎟</span> ATELIERS
                  </template>
                  <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>
                  <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>
               </el-collapse-item>
               </el-collapse>
            </el-col>
            <el-col :span="20" :md="10">
               <el-collapse>
               <el-collapse-item>
                  <template #title>
                     <span>🚸</span> ENFANTS
                  </template>
                  <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>
                  <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>
               </el-collapse-item>
               </el-collapse>
            </el-col>
            <el-col :span="20" :md="10">
               <el-collapse>
               <el-collapse-item>
                  <template #title>
                     <span>👥</span> L'AFR
                  </template>
                  <div>Cohérence avec la vraie vie: en accord avec les processus habituels de la vie réelle, conforme aux langages et habitudes des utilisateurs;</div>
                  <div>Cohérence au sein de l'interface: tout les éléments doivent être cohérents entre eux et suivre les mêmes règles, par exemple: le style global, les icônes, la position des éléments, etc.</div>
               </el-collapse-item>
               </el-collapse>
            </el-col>
         </el-row>
      </div>
   </div>
   <div class="bottomGap"></div>
   
</template>

<script setup>
   import { ref, watch , onMounted} from 'vue'
   import { useStore } from 'vuex'

   // To handle responsiveness
   import { useWindowSize } from 'vue-window-size';

   // Images imports
   import bottomHeaderImage from '../assets/appBarBackground.jpg'
   import sectionLogo from '../assets/afrChavanod.png'
   import news1 from '../assets/news1.png'

   const store = useStore()

   const apiData = store.state.apiData

   const carousel = ref("")
   
   onMounted(() => {
      carousel.value.setActiveItem(0)
    });
    

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
   // Handle bottom header image fill
   const imageFill = () => {
      if(width.value <= 768) {
         return "cover"
      } else {
         return "fill"
      }
   }

   watch(width, () => {
      displayMobile()
      imageFill()
   })

   // const sendNotification = () => {
   //    store.dispatch('notifications/sendSuccess', {
   //       title: "Bravo",
   //       message: "Site AFR Chavanod v1"
   //    });
   // }

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

</script>

<style lang="scss" scoped>
   .el-affix {
      :first-child {
         z-index: 0;
      }
   }
   .bottom-header {
	   /* for positioning */
      height: $bottomHeaderHeightDesktop;
      width: 100%;
	   background: linear-gradient(45deg, #98cbff, #98ffcb);
      /* for content alignment */
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      .bottom-header-title {
         font-size: 40px;
         margin-bottom: 10px;
         text-align: center;
      }
      .bottom-header-desc {
         font-size: 26px;
         text-align: center;
      }
      .el-button {
         font-size: 26px;
         padding: 8px 40px;
      }
      // .el-image{
      //    width: 100%;
      //    height: 100%;
      // }
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
         background: linear-gradient(0deg, rgba(0,0,0,1) -20%, rgba(255,255,255,0) 100%);
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
            .activity {
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
               .activity {
                  h3 {
                     font-size: 26px
                  }
               }
            }
         }
      }
   }

</style>