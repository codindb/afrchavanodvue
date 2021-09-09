<template>
   <SingleElement headerColor="#0081C8" :data="apiData.singleActivity" :isDataLoading="apiData.areActivitiesLoading" imageAlt="activité"/>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import SingleElement from '../components/SingleElement.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

const loadSingleActivity = async () => {
   try {
      await store.dispatch('apiData/fetchSingleActivity', {id: route.params.id})
   } catch(e) {
      console.log(e)
   }
}
loadSingleActivity()

</script>

<style lang="scss" scoped>

</style>