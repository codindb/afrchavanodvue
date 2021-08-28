<template>
   <el-empty v-if="apiData.areActivitiesLoading" description="Chargement..."></el-empty>
   <div v-else>
      <h2>{{ apiData.singleActivity.titre }}</h2>
      <el-image :src="apiData.singleActivity.photo.url"></el-image>
      <h4>{{ apiData.singleActivity.description_courte }}</h4>
      <p>{{ apiData.singleActivity.description_complete }}</p>
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

const loadSingleActivity = async () => {
   try {
      await store.dispatch('apiData/fetchSingleActivity', {id: route.params.id})
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadSingleActivity()

</script>

<style lang="scss" scoped>

</style>