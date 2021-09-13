<template>
   <el-collapse-item v-loading="apiData.areWorkshopsLoading">
      <template #title>
         <span>🧩</span> ATELIERS
      </template>
      <div class="workshop" v-for="workshop in apiData.workshops" :key="workshop">
         <router-link @click="setDrawer(false); loadSingleWorkshop(workshop.id)" :to="{ name: 'Atelier', params: {id: workshop.id } }" >
            <div class="title">
               <el-image :src="workshop.icone.formats.thumbnail.url" alt="logo atelier"></el-image>
               <p>{{ workshop.titre }}</p>
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

const loadSingleWorkshop = async (id) => {
   try {
      await store.dispatch('apiData/fetchSingleWorkshop', {id:id})
   } catch(e) {
      console.log(e)
   }
}

</script>

<style lang="scss" scoped>

</style>