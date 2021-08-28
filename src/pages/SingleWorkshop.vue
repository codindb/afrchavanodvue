<template>
   <el-empty v-if="apiData.areWorkshopsLoading" description="Chargement..."></el-empty>
   <div v-else>
      <h2>{{ apiData.singleWorkshop.titre }}</h2>
      <el-image :src="apiData.singleWorkshop.photo.url"></el-image>
      <p>{{ apiData.singleWorkshop.description }}</p>
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

const loadSingleWorkshop = async () => {
   try {
      await store.dispatch('apiData/fetchSingleWorkshop', {id: route.params.id})
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadSingleWorkshop()

</script>

<style lang="scss" scoped>

</style>