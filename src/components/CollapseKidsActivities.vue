<template>
   <el-collapse-item v-loading="apiData.areKidsActivitiesLoading">
      <template #title>
         <span>🚸</span> ENFANTS
      </template>
      <div class="kids">
         <div class="kids" v-for="kidsActivity in apiData.kidsActivities" :key="kidsActivity">
            <router-link :to="{ name: 'Enfants', params: {id: kidsActivity.id } }" >
               <div class="title">
                  <el-image :src="kidsActivity.icone.url"></el-image>
                  <p>{{ kidsActivity.titre }}</p>
               </div>
            </router-link>
         </div>
         <router-link :to="{ name: 'CentreLoisirs'}">
            <div class="title" v-if="apiData.kidsCamp">
               <el-image :src="apiData.kidsCamp.icone.url" alt="logo centre loisirs"></el-image>
               <p v-loading="apiData.isKidsCampLoading">{{ apiData.kidsCamp.titre }}</p>
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

</script>

<style lang="scss" scoped>

</style>