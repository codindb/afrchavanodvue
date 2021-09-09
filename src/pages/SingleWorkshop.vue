<template>
   <SingleElement headerColor="#8DC63F" :data="apiData.singleWorkshop" :isDataLoading="apiData.areWorkshopsLoading" imageAlt="atelier"/>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import SingleElement from '../components/SingleElement.vue'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

const loadSingleWorkshop = async () => {
   try {
      await store.dispatch('apiData/fetchSingleWorkshop', {id: route.params.id})
   } catch(e) {
      console.log(e)
   }
}
loadSingleWorkshop()

</script>

<style lang="scss" scoped>

</style>