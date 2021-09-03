<template>
   <div class="mission" v-loading="apiData.isMissionLoading">
      <h2 v-if="apiData.mission">{{ apiData.mission.titre }}</h2>
      <el-image v-if="apiData.mission" :src="apiData.mission.photo.url" alt="logo AFR"></el-image>
      <div v-if="apiData.mission" v-html="markdownToHtml(apiData.mission.description)"></div>
   </div>
   <div class="bottomGap"></div>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

// To parse markdown from api (rich text fields) into html
import marked from 'marked'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

// method used by marked to parse markdown
const markdownToHtml = (markdown) => {
   return marked(markdown)
}

const loadMission = async () => {
   try {
      await store.dispatch('apiData/fetchMission')
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadMission()

</script>

<style lang="scss" scoped>

</style>