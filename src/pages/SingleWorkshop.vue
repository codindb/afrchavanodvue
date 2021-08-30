<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2 v-if="apiData.singleWorkshop">{{ apiData.singleWorkshop.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="apiData.areWorkshopsLoading">
            <el-image v-if="apiData.singleWorkshop" :src="apiData.singleWorkshop.photo.url"></el-image>
            <h3>Description</h3>
            <div v-if="apiData.singleWorkshop" v-html="markdownToHtml(apiData.singleWorkshop.description)"></div>
            <div class="hr"><hr></div>
            <h3>Animateur / Animatrice</h3>
            <p v-if="apiData.singleWorkshop">{{ apiData.singleWorkshop.animateur}}</p>
            <h3>Horaires</h3>
            <div v-if="apiData.singleWorkshop" v-html="markdownToHtml(apiData.singleWorkshop.horaires)"></div>
            <h3>Lieu</h3>
            <p v-if="apiData.singleWorkshop">{{ apiData.singleWorkshop.lieu}}</p>
            <h3>Tarif</h3>
            <div v-if="apiData.singleWorkshop" v-html="markdownToHtml(apiData.singleWorkshop.tarif)"></div>
            <h3>Informations</h3>
            <div v-if="apiData.singleWorkshop" v-html="markdownToHtml(apiData.singleWorkshop.info_supplementaire)"></div>
            <h3>Contact</h3>
            <p v-if="apiData.singleWorkshop"><a :href="'tel:+33' + apiData.singleWorkshop.telephone">{{ apiData.singleWorkshop.telephone}}</a></p>
            <p v-if="apiData.singleWorkshop">{{ apiData.singleWorkshop.email}}</p>
            <div class="hr"><hr></div>
            <div v-if="apiData.singleWorkshop">
               <p v-if="apiData.singleWorkshop.adhesion">Nécessite l’adhésion ‘Familles Rurales’ : 22 € par famille</p>
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

const loadSingleWorkshop = async () => {
   try {
      await store.dispatch('apiData/fetchSingleWorkshop', {id: route.params.id})
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadSingleWorkshop()

</script>

<style lang="scss" scoped>

.el-header {
   background: linear-gradient(180deg, #1081c5, #ffffff);
}
</style>