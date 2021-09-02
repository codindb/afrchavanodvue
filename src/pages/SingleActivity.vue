<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2 v-if="apiData.singleActivity">{{ apiData.singleActivity.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="apiData.areActivitiesLoading">
            <el-image v-if="apiData.singleActivity" :src="apiData.singleActivity.photo.url"></el-image>
            <!-- <h3>Description</h3> -->
            <div v-if="apiData.singleActivity" v-html="markdownToHtml(apiData.singleActivity.description)"></div>
            <div class="hr"><hr></div>
            <h3>Animateur / Animatrice</h3>
            <p v-if="apiData.singleActivity">{{ apiData.singleActivity.animateur}}</p>
            <h3>Horaires</h3>
            <div v-if="apiData.singleActivity" v-html="markdownToHtml(apiData.singleActivity.horaires)"></div>
            <h3>Lieu</h3>
            <p v-if="apiData.singleActivity">{{ apiData.singleActivity.lieu}}</p>
            <h3>Tarif</h3>
            <div v-if="apiData.singleActivity" v-html="markdownToHtml(apiData.singleActivity.tarif)"></div>
            <h3 v-if="apiData.singleActivity && apiData.singleActivity.info_supplementaire">Informations</h3>
            <div v-if="apiData.singleActivity" v-html="markdownToHtml(apiData.singleActivity.info_supplementaire? apiData.singleActivity.info_supplementaire : ' ')"></div>
            <h3>Contact</h3>
            <p v-if="apiData.singleActivity"><a :href="'tel:+33' + apiData.singleActivity.telephone">{{ apiData.singleActivity.telephone}}</a></p>
            <p v-if="apiData.singleActivity">{{ apiData.singleActivity.email }}</p>
            <div class="hr"><hr></div>
            <div v-if="apiData.singleActivity">
               <p v-if="apiData.singleActivity.adhesion">Nécessite l’adhésion Familles Rurales : 22 € par famille</p>
            </div>
         </div>
         <div class="bottomGap"></div>
      </el-main>
   </el-container>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

// To parse markdown from api (rich text fields) into html
import marked from 'marked'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

// method used by marked to parse markdown
const markdownToHtml = (markdown) => {
   return marked(markdown)
}

const loadSingleActivity = async () => {
   try {
      await store.dispatch('apiData/fetchSingleActivity', {id: route.params.id})
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadSingleActivity()

</script>

<style lang="scss" scoped>
.el-header {
   background: linear-gradient(180deg,  #0081C8, #ffffff);
}
</style>