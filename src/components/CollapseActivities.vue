<template>
   <el-collapse-item v-loading="apiData.areActivitiesLoading">
      <template #title>
         <span>🥏</span> ACTIVITES
      </template>
      <div class="activity" @click="setDrawer(false)" v-for="activity in apiData.activities" :key="activity">
         <router-link :to="{ name: 'Activite', params: {id: activity.id } }" >
            <div class="title">
               <el-image :src="activity.icone.url" alt="logo activité"></el-image>
               <p>{{ activity.titre }}</p>
            </div>
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