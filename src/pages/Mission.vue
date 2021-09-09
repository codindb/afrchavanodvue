<template>
   <div class="mission" v-loading="apiData.isMissionLoading">
      <h2 v-if="apiData.mission">{{ apiData.mission.titre }}</h2>
      <el-image v-if="apiData.mission" :src="apiData.mission.photo.url" alt="logo AFR"></el-image>
      <div class="mission-description" v-if="apiData.mission" v-html="markdownToHtml(apiData.mission.description)"></div>
   </div>
</template>

<script setup>

// markdownToHtml method comes from markedPlugin

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

</script>

<style lang="scss">

.mission {
   min-height: 200px;
   h2{
   font-size: 36px;
   }
   .mission-description {
      width: 96%;
      margin: 0 auto;
      ul{
         display: inline-block !important;
         text-align: left !important;
      }
   }
}

</style>