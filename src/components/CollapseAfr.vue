<template>
   <el-collapse-item>
      <template #title>
         <el-image class="collapse-icon" :src="afrIcon"></el-image> L'AFR
      </template>
      <div class="afr-info">
         <router-link @click="setDrawer(false); closeItem()" :to="{ name: 'Mission' }" >
            <p v-if="apiData.mission" v-loading="apiData.isMissionLoading">{{ apiData.mission.titre }}</p>
         </router-link>
         <router-link @click="setDrawer(false); closeItem()" :to="{ name: 'Equipe' }" >
            <p>L'équipe / Contacts</p>
         </router-link>
         <router-link @click="setDrawer(false); closeItem()" :to="{ name: 'UnderConstruction' }" >
            <p>FAQ</p>
         </router-link>
      </div>
   </el-collapse-item>
</template>

<script setup>

import { useStore } from 'vuex'

import afrIcon from '../assets/afr.png'

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

</script>

<style lang="scss" scoped>

.collapse-icon {
   height: 70px;
   margin-bottom: -12px;
}
@media screen and (max-width: 768px) {
   .collapse-icon {
      height: 50px;
   }
}

</style>