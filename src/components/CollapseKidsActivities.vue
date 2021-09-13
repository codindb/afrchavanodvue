<template>
   <el-collapse-item v-loading="apiData.areKidsActivitiesLoading">
      <template #title>
         <el-image class="collapse-icon" :src="kidsIcon"></el-image> ENFANTS
      </template>
      <div class="kids">
         <div class="kids" v-for="kidsActivity in apiData.kidsActivities" :key="kidsActivity">
            <router-link @click="setDrawer(false); closeItem(); loadSingleKidsActivity(kidsActivity.id)" :to="{ name: 'Enfants', params: {id: kidsActivity.id } }" >
               <div class="title">
               <el-image :src="kidsActivity.icone.formats.thumbnail.url"></el-image>
               <p>{{ kidsActivity.titre }}</p>
               </div>
            </router-link>
         </div>
         <router-link @click="setDrawer(false); closeItem()" :to="{ name: 'CentreLoisirs' }" >
            <div class="title" v-if="apiData.kidsCamp">
               <el-image :src="apiData.kidsCamp.icone.formats.thumbnail.url" alt="logo centre loisirs"></el-image>
               <p v-loading="apiData.isKidsCampLoading">{{ apiData.kidsCamp.titre }}</p>
               </div>
         </router-link>
      </div>
   </el-collapse-item>
</template>

<script setup>

import { useStore } from 'vuex'

import kidsIcon from '../assets/kids.png'

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

const loadSingleKidsActivity = async (id) => {
   try {
      await store.dispatch('apiData/fetchSingleKidsActivity', {id:id})
   } catch(e) {
      console.log(e);
   }
}

</script>

<style lang="scss" scoped>

</style>