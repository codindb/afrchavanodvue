<template>
   <el-container>
      <el-header>
         <h2>{{ apiData.singleNews.titre }}</h2>
      </el-header>

      <el-empty v-if="apiData.areNewsLoading" description="Chargement..."></el-empty>
      <el-main v-else>
         <el-image :src="apiData.singleNews.photo.url"></el-image>
         <p>{{ apiData.singleNews.description }}</p>
         <div class="bottomGap"></div>
      </el-main>
   </el-container>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

const loadSingleNews = async () => {
   try {
      await store.dispatch('apiData/fetchSingleNews', {id: route.params.id})
   } catch(e) {
      router.push({ name: 'NotFound' })
      // store.dispatch('notifications/sendError', {
      // title: "Erreur",
      // message: "Impossible de charger les données",
      // duration: 5000
      // });
   }
}
loadSingleNews()
</script>

<style lang="scss" scoped>

.el-header {
   // for positioning
   height: 200px;
   background: linear-gradient(90deg, #f87f15, #0775eb);
   position: fixed;
   width: 100%;
   z-index: -1;

   // for content
   display: flex;
   justify-content: center;
   align-items: center;

   h2 {
      color: white;
      font-size: 40px;
      font-weight: bold;
   }
   @media screen and (max-width: 768px) {
      h2 {
         font-size: 30px;
      }
   }
}
.el-main {
   background-color: white;
   margin-top: 170px;
   border-radius: 30px;
}
</style>