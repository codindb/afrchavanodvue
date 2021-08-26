<template>

   <div class="bottom-header">
      <el-image :src="bottomHeaderImageUrl" :fit="imageFill()"></el-image>
   </div>
   <h2>Actualités</h2>
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
               <div class="newsTitle"> {{ item.titre }}</div>
         </el-carousel-item>
      </el-carousel>
      
   </div>
   <h2>L'association</h2>
   <div class="content">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, consequuntur optio. Dicta velit voluptates suscipit magni consequatur ipsum, molestiae quis repudiandae quam debitis repellat eligendi exercitationem, ea impedit placeat perferendis.</p>
      <p>Ipsum repudiandae natus suscipit itaque odio quod sit. Itaque debitis mollitia, nostrum corrupti, numquam vel libero praesentium ullam, laudantium soluta ex autem perferendis voluptates saepe iusto eius sunt delectus. Sed!</p>
      <p>Architecto accusantium, odio tempora ab adipisci quae atque sed modi error doloribus possimus ducimus deleniti. Reprehenderit, minus est? Harum, sint delectus quas cumque eveniet nulla rem consectetur eius consequuntur voluptate?</p>
      <p>Maiores facilis impedit omnis quas! Quisquam praesentium natus, nihil iure et harum necessitatibus, eius facilis exercitationem sapiente perspiciatis distinctio ut! Quibusdam unde architecto perspiciatis veniam, magni sint aliquam voluptatibus iure?</p>
      <p>Illum fugiat, doloribus, soluta voluptatum quam illo porro id dolorem deserunt inventore ullam sequi, neque provident dignissimos? Adipisci a libero quisquam illo eos earum facere, unde expedita harum quis alias!</p>
      <p>Blanditiis dicta beatae harum reiciendis eligendi, animi quia veniam odio placeat quisquam, odit numquam ad corporis, quas pariatur maiores tenetur dolore repellendus necessitatibus reprehenderit fugit sit consequatur? Reprehenderit, ex! Fuga!</p>
      <p>Inventore quis nobis hic? Error, magnam id! Distinctio non quibusdam delectus exercitationem asperiores est assumenda similique minus. Et cum accusantium recusandae placeat error, sint quod sapiente quis porro eum ducimus?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, consequuntur optio. Dicta velit voluptates suscipit magni consequatur ipsum, molestiae quis repudiandae quam debitis repellat eligendi exercitationem, ea impedit placeat perferendis.</p>
      <p>Ipsum repudiandae natus suscipit itaque odio quod sit. Itaque debitis mollitia, nostrum corrupti, numquam vel libero praesentium ullam, laudantium soluta ex autem perferendis voluptates saepe iusto eius sunt delectus. Sed!</p>
      <p>Architecto accusantium, odio tempora ab adipisci quae atque sed modi error doloribus possimus ducimus deleniti. Reprehenderit, minus est? Harum, sint delectus quas cumque eveniet nulla rem consectetur eius consequuntur voluptate?</p>
      <p>Maiores facilis impedit omnis quas! Quisquam praesentium natus, nihil iure et harum necessitatibus, eius facilis exercitationem sapiente perspiciatis distinctio ut! Quibusdam unde architecto perspiciatis veniam, magni sint aliquam voluptatibus iure?</p>
      <p>Illum fugiat, doloribus, soluta voluptatum quam illo porro id dolorem deserunt inventore ullam sequi, neque provident dignissimos? Adipisci a libero quisquam illo eos earum facere, unde expedita harum quis alias!</p>
      <p>Blanditiis dicta beatae harum reiciendis eligendi, animi quia veniam odio placeat quisquam, odit numquam ad corporis, quas pariatur maiores tenetur dolore repellendus necessitatibus reprehenderit fugit sit consequatur? Reprehenderit, ex! Fuga!</p>
      <p>Inventore quis nobis hic? Error, magnam id! Distinctio non quibusdam delectus exercitationem asperiores est assumenda similique minus. Et cum accusantium recusandae placeat error, sint quod sapiente quis porro eum ducimus?</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, consequuntur optio. Dicta velit voluptates suscipit magni consequatur ipsum, molestiae quis repudiandae quam debitis repellat eligendi exercitationem, ea impedit placeat perferendis.</p>
      <p>Ipsum repudiandae natus suscipit itaque odio quod sit. Itaque debitis mollitia, nostrum corrupti, numquam vel libero praesentium ullam, laudantium soluta ex autem perferendis voluptates saepe iusto eius sunt delectus. Sed!</p>
      <p>Architecto accusantium, odio tempora ab adipisci quae atque sed modi error doloribus possimus ducimus deleniti. Reprehenderit, minus est? Harum, sint delectus quas cumque eveniet nulla rem consectetur eius consequuntur voluptate?</p>
      <p>Maiores facilis impedit omnis quas! Quisquam praesentium natus, nihil iure et harum necessitatibus, eius facilis exercitationem sapiente perspiciatis distinctio ut! Quibusdam unde architecto perspiciatis veniam, magni sint aliquam voluptatibus iure?</p>
      <p>Illum fugiat, doloribus, soluta voluptatum quam illo porro id dolorem deserunt inventore ullam sequi, neque provident dignissimos? Adipisci a libero quisquam illo eos earum facere, unde expedita harum quis alias!</p>
      <p>Blanditiis dicta beatae harum reiciendis eligendi, animi quia veniam odio placeat quisquam, odit numquam ad corporis, quas pariatur maiores tenetur dolore repellendus necessitatibus reprehenderit fugit sit consequatur? Reprehenderit, ex! Fuga!</p>
      <p>Inventore quis nobis hic? Error, magnam id! Distinctio non quibusdam delectus exercitationem asperiores est assumenda similique minus. Et cum accusantium recusandae placeat error, sint quod sapiente quis porro eum ducimus?</p>
      <p>TOTO</p>
   </div>
   <div class="bottomGap"></div>
   
</template>

<script setup>
   import { ref, watch , onMounted} from 'vue'
   import { useStore } from 'vuex'

   // To handle responsiveness
   import { useWindowSize } from 'vue-window-size';

   // Bottom header image Url
   import bottomHeaderImageUrl from '../assets/appBarBackground.jpg'

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

</script>

<style lang="scss" scoped>

   h2 {
      color: black;
      font-size: 30px
   }

   .bottom-header {
      height: $bottomHeaderHeightDesktop;
      width: 100%;
      top: $topHeaderHeight;
	   // background: linear-gradient(45deg, #98cbff, #98ffcb);
      .el-image{
         width: 100%;
         height: 100%;
      }
   }
   @media screen and (max-width: 768px) {
      .bottom-header {
         height: $bottomHeaderHeightMobile;
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
            font-size: 30px;
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

</style>