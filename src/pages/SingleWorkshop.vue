<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2>{{ apiData.singleWorkshop.titre }}</h2>
      </el-header>

      <el-empty v-if="apiData.areWorkshopsLoading" description="Chargement..."></el-empty>
      <el-main class="overlapping page-main" v-else>
         <el-image :src="apiData.singleWorkshop.photo.url"></el-image>
         <p>{{ apiData.singleWorkshop.description }}</p>
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

.el-header {
   background: linear-gradient(180deg, #1081c5, #ffffff);
}

</style>