<template>
   <el-collapse-item>
      <template #title>
         <span>👥</span> L'AFR
      </template>
      <div class="afr-info">
         <a @click="drawer = false" :href="'/mission'">
            <p v-if="apiData.mission" v-loading="apiData.isMissionLoading">{{ apiData.mission.titre }}</p>
         </a>
         <a @click="drawer = false" :href="'/equipe'">
            <p>L'équipe / Contacts</p>
         </a>
         <a @click="drawer = false" :href="'/construction'">
            <p>FAQ</p>
         </a>
      </div>
   </el-collapse-item>
</template>

<script setup>

import { useStore } from 'vuex'

//Use of vuex store
const store = useStore()
const apiData = store.state.apiData

</script>

<style lang="scss" scoped>

</style>