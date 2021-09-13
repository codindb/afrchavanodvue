<template>
   <el-collapse-item v-loading="apiData.areActivitiesLoading">
      <template #title>
         <span>🥏</span> ACTIVITES
      </template>
      <div class="activity" v-for="(activity, index) in apiData.activities" :key="activity">
         <router-link @click="setDrawer(false); closeItem(); loadSingleActivity(activity.id)" :to="{ name: 'Activite', params: {id: activity.id } }" >
            <div class="title">
               <el-image :src="activity.icone.formats.thumbnail.url" alt="logo activité"></el-image>
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

// To close the collapse-item (coming from Header.vue)
const props = defineProps({
  closeItem: Function,
})

const loadSingleActivity = async (id) => {
   try {
      await store.dispatch('apiData/fetchSingleActivity', {id:id})
   } catch(e) {
      console.log(e)
   }
}

</script>

<style lang="scss" scoped>

</style>