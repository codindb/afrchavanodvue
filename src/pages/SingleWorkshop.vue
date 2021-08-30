<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2 v-if="apiData.singleWorkshop">{{ apiData.singleWorkshop.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div v-loading="apiData.areWorkshopsLoading">
            <el-image v-if="apiData.singleWorkshop" :src="apiData.singleWorkshop.photo.url"></el-image>
            <p v-if="apiData.singleWorkshop">{{ apiData.singleWorkshop.description }}</p>
         </div>
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