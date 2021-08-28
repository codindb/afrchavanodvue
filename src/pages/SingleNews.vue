<template>
   <el-empty v-if="apiData.areNewsLoading" description="Chargement..."></el-empty>
   <div v-else>
      <h2>{{ apiData.singleNews.titre }}</h2>
      <el-image :src="apiData.singleNews.photo.url"></el-image>
      <p>{{ apiData.singleNews.description }}</p>
   </div>
   <div class="bottomGap"></div>
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

</style>