<template>
   <div>
      <el-empty v-if="strapiData.areNewsLoading" description="Chargement..."></el-empty>
      <el-carousel :initial-index="2" trigger="click" :interval="4000" type="card" height="200px">
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
      <p>Laudantium, modi voluptatum repellat esse debitis iste libero accusantium nulla corrupti quae tempora nemo molestiae. Earum ea similique reprehenderit neque, voluptates suscipit ullam, autem exercitationem ducimus alias illo eos numquam?</p>
      <p>Earum aperiam repudiandae laudantium quae ratione pariatur, cumque quidem aspernatur modi sapiente nulla explicabo ducimus asperiores vel. Inventore consequuntur veniam eveniet nobis neque numquam accusamus. Incidunt dolores vel rem deleniti.</p>
      <p>Vitae at et molestiae vero repellendus ipsum debitis maxime velit similique mollitia ut quia aliquam corrupti, nemo officia repellat tempore incidunt eveniet voluptate. Delectus quia sint laudantium fuga illo reprehenderit!</p>
   </div>
</template>

<script setup>
   import { ref } from 'vue'
   import { useStore } from 'vuex'

   const store = useStore()

   const strapiData = store.state.strapiData

   const sendNotification = () => {
      store.dispatch('notifications/sendSuccess', {
         title: "Bravo",
         message: "Site AFR Chavanod v1"
      });
   }
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



</style>