<template>
   <div>
      <el-empty v-if="apiData.areNewsLoading" description="Chargement..."></el-empty>
      <h2>{{ apiData.singleNews.titre }}</h2>
   </div>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

console.log(apiData);

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