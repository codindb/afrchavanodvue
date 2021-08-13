<template>
   <div>
      <h2>Home</h2>
      <el-button @click="sendNotification" size="small" type="primary" icon="el-icon-news" circle></el-button>
      <el-button @click="loadNews" :loading="strapiData.areNewsLoading" size="small" type="success" icon="el-icon-download" circle></el-button>
      <img v-for="news in strapiData.news" :src="news.photo.url" :alt="news.photo.url">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro, doloremque veritatis nam modi adipisci optio perferendis totam eligendi iure autem voluptatum quia sapiente debitis sit quidem nisi praesentium recusandae?</p>
      <p>Adipisci et repellat, id quae aliquid eaque quia facere ipsam eveniet architecto, cumque debitis maxime dolores harum error saepe tempore nobis! Assumenda molestiae earum pariatur veritatis possimus eius autem dolor.</p>
      <p>Quos quia optio minima quam libero quo ad illo necessitatibus magnam nisi laborum corporis nemo in nihil saepe voluptatum laboriosam voluptate qui tenetur labore delectus, sequi expedita. Praesentium, deleniti nobis.</p>
      <p>Dolores culpa eos aspernatur libero recusandae necessitatibus autem, non mollitia rerum sunt sed ipsa totam modi! Optio error pariatur repudiandae, mollitia provident necessitatibus? Ullam, ex quam unde aliquid molestiae reiciendis?</p>
      <p>Tempora reprehenderit deleniti voluptas obcaecati fugiat eum laboriosam rem, aliquam ut odit magni enim voluptatum dolore voluptates in quidem cum. Aperiam, in. Cupiditate autem laborum nihil odio. Aliquid, maiores cupiditate.</p>
      <p>Voluptatibus sit ratione, voluptatum iste molestiae quos eaque, praesentium corporis quas ipsum sint id, nostrum similique veniam molestias. Incidunt excepturi similique exercitationem reiciendis expedita alias vero quam porro obcaecati consequatur!</p>
      <p>Aliquam pariatur animi porro distinctio voluptatem officiis nemo illum, quod sequi nobis voluptatum dolor ducimus. Hic labore porro, minima est magni placeat omnis repellat tempore itaque consectetur aliquam maxime sit.</p>
      <p>Facilis incidunt, doloribus ducimus, porro consectetur tenetur doloremque maxime, delectus adipisci aliquam repudiandae fuga amet quia exercitationem et. Temporibus eveniet voluptate, blanditiis beatae sed libero a sint quo dolorem illum.</p>
      <p>Illo ipsa quas sint nam doloribus iste ipsum culpa, delectus illum eum. Velit eveniet aliquam tempore voluptatem sapiente numquam nostrum consectetur vero, soluta atque in deleniti, at, omnis ipsa cumque?</p>
      <p>Vel magni accusamus eaque officia praesentium, officiis nostrum nemo! Et expedita mip>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro, doloremque veritatis nam modi adipisci optio perferendis totam eligendi iure autem voluptatum quia sapiente debitis sit quidem nisi praesentium recusandae?</p>
      <p>Adipisci et repellat, id quae aliquid eaque quia facere ipsam eveniet architecto, cumque debitis maxime dolores harum error saepe tempore nobis! Assumenda molestiae earum pariatur veritatis possimus eius autem dolor.</p>
      <p>Quos quia optio minima quam libero quo ad illo necessitatibus magnam nisi laborum corporis nemo in nihil saepe voluptatum laboriosam voluptate qui tenetur labore delectus, sequi expedita. Praesentium, deleniti nobis.</p>
      <p>Dolores culpa eos aspernatur libero recusandae necessitatibus autem, non mollitia rerum sunt sed ipsa totam modi! Optio error pariatur repudiandae, mollitia provident necessitatibus? Ullam, ex quam unde aliquid molestiae reiciendis?</p>
      <p>Tempora reprehenderit deleniti voluptas obcaecati fugiat eum laboriosam rem, aliquam ut odit magni enim voluptatum dolore voluptates in quidem cum. Aperiam, in. Cupiditate autem laborum nihil odio. Aliquid, maiores cupiditate.</p>
      <p>Voluptatibus sit ratione, voluptatum iste molestiae quos eaque, praesentium corporis quas ipsum sint id, nostrum similique veniam molestias. Incidunt excepturi similique exercitationem reiciendis expedita alias vero quam porro obcaecati consequatur!</p>
      <p>Aliquam pariatur animi porro distinctio voluptatem officiis nemo illum, quod sequi nobis voluptatum dolor ducimus. Hic labore porro, minima est magni placeat omnis repellat tempore itaque consectetur aliquam maxime sit.</p>
      <p>Facilis incidunt, doloribus ducimus, porro consectetur tenetur doloremque maxime, delectus adipisci aliquam repudiandae fuga amet quia exercitationem et. Temporibus eveniet voluptate, blanditiis beatae sed libero a sint quo dolorem illum.</p>
      <p>Illo ipsa quas sint nam doloribus iste ipsum culpa, delectus illum eum. Velit eveniet aliquam tempore voluptatem sapiente numquam nostrum consectetur vero, soluta atque in deleniti, at, omnis ipsa cumque?</p>
      <p>Vel magni accusamus eaque officia praesentium, officiis nostrum nemo! Et expedita mip>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro, doloremque veritatis nam modi adipisci optio perferendis totam eligendi iure autem voluptatum quia sapiente debitis sit quidem nisi praesentium recusandae?</p>
      <p>Adipisci et repellat, id quae aliquid eaque quia facere ipsam eveniet architecto, cumque debitis maxime dolores harum error saepe tempore nobis! Assumenda molestiae earum pariatur veritatis possimus eius autem dolor.</p>
      <p>Quos quia optio minima quam libero quo ad illo necessitatibus magnam nisi laborum corporis nemo in nihil saepe voluptatum laboriosam voluptate qui tenetur labore delectus, sequi expedita. Praesentium, deleniti nobis.</p>
      <p>Dolores culpa eos aspernatur libero recusandae necessitatibus autem, non mollitia rerum sunt sed ipsa totam modi! Optio error pariatur repudiandae, mollitia provident necessitatibus? Ullam, ex quam unde aliquid molestiae reiciendis?</p>
      <p>Tempora reprehenderit deleniti voluptas obcaecati fugiat eum laboriosam rem, aliquam ut odit magni enim voluptatum dolore voluptates in quidem cum. Aperiam, in. Cupiditate autem laborum nihil odio. Aliquid, maiores cupiditate.</p>
      <p>Voluptatibus sit ratione, voluptatum iste molestiae quos eaque, praesentium corporis quas ipsum sint id, nostrum similique veniam molestias. Incidunt excepturi similique exercitationem reiciendis expedita alias vero quam porro obcaecati consequatur!</p>
      <p>Aliquam pariatur animi porro distinctio voluptatem officiis nemo illum, quod sequi nobis voluptatum dolor ducimus. Hic labore porro, minima est magni placeat omnis repellat tempore itaque consectetur aliquam maxime sit.</p>
      <p>Facilis incidunt, doloribus ducimus, porro consectetur tenetur doloremque maxime, delectus adipisci aliquam repudiandae fuga amet quia exercitationem et. Temporibus eveniet voluptate, blanditiis beatae sed libero a sint quo dolorem illum.</p>
      <p>Illo ipsa quas sint nam doloribus iste ipsum culpa, delectus illum eum. Velit eveniet aliquam tempore voluptatem sapiente numquam nostrum consectetur vero, soluta atque in deleniti, at, omnis ipsa cumque?</p>
      <p>Vel magni accusamus eaque officia praesentium, officiis nostrum nemo! Et expedita mip>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam porro, doloremque veritatis nam modi adipisci optio perferendis totam eligendi iure autem voluptatum quia sapiente debitis sit quidem nisi praesentium recusandae?</p>
      <p>Adipisci et repellat, id quae aliquid eaque quia facere ipsam eveniet architecto, cumque debitis maxime dolores harum error saepe tempore nobis! Assumenda molestiae earum pariatur veritatis possimus eius autem dolor.</p>
      <p>Quos quia optio minima quam libero quo ad illo necessitatibus magnam nisi laborum corporis nemo in nihil saepe voluptatum laboriosam voluptate qui tenetur labore delectus, sequi expedita. Praesentium, deleniti nobis.</p>
      <p>Dolores culpa eos aspernatur libero recusandae necessitatibus autem, non mollitia rerum sunt sed ipsa totam modi! Optio error pariatur repudiandae, mollitia provident necessitatibus? Ullam, ex quam unde aliquid molestiae reiciendis?</p>
      <p>Tempora reprehenderit deleniti voluptas obcaecati fugiat eum laboriosam rem, aliquam ut odit magni enim voluptatum dolore voluptates in quidem cum. Aperiam, in. Cupiditate autem laborum nihil odio. Aliquid, maiores cupiditate.</p>
      <p>Voluptatibus sit ratione, voluptatum iste molestiae quos eaque, praesentium corporis quas ipsum sint id, nostrum similique veniam molestias. Incidunt excepturi similique exercitationem reiciendis expedita alias vero quam porro obcaecati consequatur!</p>
      <p>Aliquam pariatur animi porro distinctio voluptatem officiis nemo illum, quod sequi nobis voluptatum dolor ducimus. Hic labore porro, minima est magni placeat omnis repellat tempore itaque consectetur aliquam maxime sit.</p>
      <p>Facilis incidunt, doloribus ducimus, porro consectetur tenetur doloremque maxime, delectus adipisci aliquam repudiandae fuga amet quia exercitationem et. Temporibus eveniet voluptate, blanditiis beatae sed libero a sint quo dolorem illum.</p>
      <p>Illo ipsa quas sint nam doloribus iste ipsum culpa, delectus illum eum. Velit eveniet aliquam tempore voluptatem sapiente numquam nostrum consectetur vero, soluta atque in deleniti, at, omnis ipsa cumque?</p>
      <p>Vel magni accusamus eaque officia praesentium, officiis nostrum nemo! Et expedita minima sapiente aliquid quis voluptatem aspernatur reprehenderit voluptate doloribus dolores asperiores id reiciendis voluptatibus exercitationem nihil ipsa, fuga quo!</p>
      <el-empty v-if="strapiData.areNewsLoading" description="Chargement..."></el-empty>
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

</script>

<style lang="scss" scoped>

</style>