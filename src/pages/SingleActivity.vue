<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2>{{ apiData.singleActivity.titre }}</h2>
      </el-header>

      <el-empty v-if="apiData.areActivitiesLoading" description="Chargement..."></el-empty>
      <el-main class="overlapping page-main" v-else>
         <el-image :src="apiData.singleActivity.photo.url"></el-image>
         <p>{{ apiData.singleActivity.description_complete }}</p>
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
.el-header {
   background: linear-gradient(90deg,  #0775eb, #39ab2a);
}
</style>