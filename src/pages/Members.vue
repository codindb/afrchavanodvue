<template>
   <div>
      <h2>L'Equipe / Contacts</h2>
      <el-image :src="team"></el-image>
      <div v-for="member in apiData.members" :key="member">{{ member.nom }}</div>
   </div>
   <div class="bottomGap"></div>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import team from '../assets/team.png'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

const loadMembers = async () => {
   try {
      await store.dispatch('apiData/fetchMembers')
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadMembers()

</script>

<style lang="scss" scoped>

.el-image {
   max-width: 90%;
}

</style>