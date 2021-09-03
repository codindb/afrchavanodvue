<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2 v-if="apiData.singleKidsActivity">{{ apiData.singleKidsActivity.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="apiData.areKidsActivitiesLoading">
            <el-image v-if="apiData.singleKidsActivity" :src="apiData.singleKidsActivity.photo.url" alt="logo activité enfants"></el-image>
            <!-- <h3>Description</h3> -->
            <div v-if="apiData.singleKidsActivity" v-html="markdownToHtml(apiData.singleKidsActivity.description)"></div>
            <div class="hr"><hr></div>
            <h3>Animateur / Animatrice</h3>
            <p v-if="apiData.singleKidsActivity">{{ apiData.singleKidsActivity.animateur}}</p>
            <h3>Horaires</h3>
            <div v-if="apiData.singleKidsActivity" v-html="markdownToHtml(apiData.singleKidsActivity.horaires)"></div>
            <h3>Lieu</h3>
            <p v-if="apiData.singleKidsActivity">{{ apiData.singleKidsActivity.lieu}}</p>
            <h3>Tarif</h3>
            <div v-if="apiData.singleKidsActivity" v-html="markdownToHtml(apiData.singleKidsActivity.tarif)"></div>
            <h3 v-if="apiData.singleKidsActivity && apiData.singleKidsActivity.info_supplementaire">Informations supplémentaires</h3>
            <div v-if="apiData.singleKidsActivity" v-html="markdownToHtml(apiData.singleKidsActivity.info_supplementaire? apiData.singleKidsActivity.info_supplementaire : ' ')"></div>
            <h3>Contact</h3>
            <p v-if="apiData.singleKidsActivity"><a :href="'tel:+33' + apiData.singleKidsActivity.telephone">{{ apiData.singleKidsActivity.telephone}}</a></p>
            <p v-if="apiData.singleKidsActivity">{{ apiData.singleKidsActivity.email}}</p>
            <div class="hr"><hr></div>
            <div v-if="apiData.singleKidsActivity">
               <p v-if="apiData.singleKidsActivity.adhesion">Nécessite l’adhésion Familles Rurales : 22 € par famille</p>
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

const loadSingleKidsActivity = async () => {
   try {
      await store.dispatch('apiData/fetchSingleKidsActivity', {id: route.params.id})
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadSingleKidsActivity()

</script>

<style lang="scss" scoped>

.el-header {
   background: linear-gradient(180deg, #F78F1E, #ffffff);
}
</style>