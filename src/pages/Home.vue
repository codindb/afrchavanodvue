<template>

   <div class="bottom-header">
      <el-image :src="bottomHeaderImageUrl" fit="fill
      ">
      </el-image>
   </div>

   <div class="home-body">
      <el-empty v-if="strapiData.areNewsLoading" description="Chargement..."></el-empty>
      <el-carousel :initial-index="2" trigger="click" :interval="4000" type="card" height="350px">
         <el-carousel-item v-for="item in strapiData.news" :key="item.id">
            <div>
               <img :src="item.photo.url" class="image">
            </div>
         </el-carousel-item>
      </el-carousel>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, consequuntur optio. Dicta velit voluptates suscipit magni consequatur ipsum, molestiae quis repudiandae quam debitis repellat eligendi exercitationem, ea impedit placeat perferendis.</p>
      <p>Ipsum repudiandae natus suscipit itaque odio quod sit. Itaque debitis mollitia, nostrum corrupti, numquam vel libero praesentium ullam, laudantium soluta ex autem perferendis voluptates saepe iusto eius sunt delectus. Sed!</p>
      <p>Architecto accusantium, odio tempora ab adipisci quae atque sed modi error doloribus possimus ducimus deleniti. Reprehenderit, minus est? Harum, sint delectus quas cumque eveniet nulla rem consectetur eius consequuntur voluptate?</p>
      <p>Maiores facilis impedit omnis quas! Quisquam praesentium natus, nihil iure et harum necessitatibus, eius facilis exercitationem sapiente perspiciatis distinctio ut! Quibusdam unde architecto perspiciatis veniam, magni sint aliquam voluptatibus iure?</p>
      <p>Illum fugiat, doloribus, soluta voluptatum quam illo porro id dolorem deserunt inventore ullam sequi, neque provident dignissimos? Adipisci a libero quisquam illo eos earum facere, unde expedita harum quis alias!</p>
      <p>Blanditiis dicta beatae harum reiciendis eligendi, animi quia veniam odio placeat quisquam, odit numquam ad corporis, quas pariatur maiores tenetur dolore repellendus necessitatibus reprehenderit fugit sit consequatur? Reprehenderit, ex! Fuga!</p>
      <p>Inventore quis nobis hic? Error, magnam id! Distinctio non quibusdam delectus exercitationem asperiores est assumenda similique minus. Et cum accusantium recusandae placeat error, sint quod sapiente quis porro eum ducimus?</p>
      <p>TOTO</p>
   </div>
   
</template>

<script setup>
   import { ref } from 'vue'
   import { useStore } from 'vuex'

   // Logo Url
   import bottomHeaderImageUrl from '../assets/appBarBackground.jpg'

   const store = useStore()

   const strapiData = store.state.strapiData

   // const sendNotification = () => {
   //    store.dispatch('notifications/sendSuccess', {
   //       title: "Bravo",
   //       message: "Site AFR Chavanod v1"
   //    });
   // }

   const loadNews = async () => {
      try {
         await store.dispatch('strapiData/fetchAllNews')
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

   .bottom-header {
      height: $bottomHeaderHeight;
      width: 100%;
      position: fixed;
      top: $topHeaderHeight;
	   // background: linear-gradient(45deg, #98cbff, #98ffcb);
      .el-image{
         width: 100%;
         height: 100%;
      }
   }

   .home-body {
      position: relative;
      top: $bottomHeaderHeight;
      background-color: white;
   }
   .el-carousel {
      margin: 50px 0;
      padding-left: 6%;
      .el-carousel__item {
         width: 40%;
         border-radius: 30px;
         background-color: white;
         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      }
   }


</style>