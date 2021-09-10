<template>
   <el-collapse-item>
      <template #title>
         <span>👥</span> L'AFR
      </template>
      <div class="afr-info">
         <router-link @click="setDrawer(false)" :to="{ name: 'Mission' }" >
            <p v-if="apiData.mission" v-loading="apiData.isMissionLoading">{{ apiData.mission.titre }}</p>
         </router-link>
         <router-link @click="setDrawer(false)" :to="{ name: 'Equipe' }" >
            <p>L'équipe / Contacts</p>
         </router-link>
         <router-link @click="setDrawer(false)" :to="{ name: 'UnderConstruction' }" >
            <p>FAQ</p>
         </router-link>
      </div>
   </el-collapse-item>
</template>

<script setup>

import { useStore } from 'vuex'

//Use of vuex store
const store = useStore()
const apiData = store.state.apiData
const data = store.state.data

// Set drawer visibility
const setDrawer = (boolean) => {
  store.dispatch('data/setDrawer', boolean)
}

</script>

<style lang="scss" scoped>

</style>