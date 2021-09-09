<template>
   <el-collapse-item v-loading="apiData.areWorkshopsLoading">
      <template #title>
         <span>🧩</span> ATELIERS
      </template>
      <div class="workshop" v-for="workshop in apiData.workshops" :key="workshop">
         <a @click="drawer = false" :href="'/ateliers/' + workshop.id">
            <div class="title">
               <el-image :src="workshop.icone.url" alt="logo atelier"></el-image>
               <p>{{ workshop.titre }}</p>
            </div>
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