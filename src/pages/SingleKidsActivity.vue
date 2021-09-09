<template>
   <SingleElement headerColor="#F78F1E" :data="apiData.singleKidsActivity" :isDataLoading="apiData.areKidsActivitiesLoading" imageAlt="activité enfants"/>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import SingleElement from '../components/SingleElement.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

const loadSingleKidsActivity = async () => {
   try {
      await store.dispatch('apiData/fetchSingleKidsActivity', {id: route.params.id})
   } catch(e) {
      console.log(e);
   }
}
loadSingleKidsActivity()

</script>

<style lang="scss" scoped>

</style>