<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2 v-if="apiData.kidsCamp">{{ apiData.kidsCamp.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="apiData.isKidsCampLoading">
            <el-image v-if="apiData.kidsCamp" :src="apiData.kidsCamp.photo.url"></el-image>
            <!-- <h3>Description</h3> -->
            <div v-if="apiData.kidsCamp" v-html="markdownToHtml(apiData.kidsCamp.description)"></div>
            <div class="hr"><hr></div>
            <h3>Dates</h3>
            <p v-if="apiData.kidsCamp">{{ apiData.kidsCamp.Dates}}</p>
            <h3>Lieu</h3>
            <div v-if="apiData.kidsCamp" v-html="markdownToHtml(apiData.kidsCamp.lieu)"></div>
            <h3>Tarif</h3>
            <div v-if="apiData.kidsCamp" v-html="markdownToHtml(apiData.kidsCamp.tarif)"></div>
            <h3>Inscriptions</h3>
            <div v-if="apiData.kidsCamp" v-html="markdownToHtml(apiData.kidsCamp.inscriptions)"></div>
            <h3>Informations supplémentaires</h3>
            <div v-if="apiData.kidsCamp" v-html="markdownToHtml(apiData.kidsCamp.info_supplementaire)"></div>
            <h3>Contact</h3>
            <p v-if="apiData.kidsCamp"><a :href="'tel:+33' + apiData.kidsCamp.telephone">{{ apiData.kidsCamp.telephone}}</a></p>
            <p v-if="apiData.kidsCamp">{{ apiData.kidsCamp.email}}</p>
            <div class="hr"><hr></div>
            <div v-if="apiData.kidsCamp">
               <p v-if="apiData.kidsCamp.adhesion">Nécessite l’adhésion Familles Rurales : 22 € par famille</p>
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

const loadKidsCamp = async () => {
   try {
      await store.dispatch('apiData/fetchKidsCamp')
   } catch(e) {
      router.push({ name: 'NotFound' })
   }
}
loadKidsCamp()

</script>

<style lang="scss" scoped>

.el-header {
   background: linear-gradient(180deg, #F78F1E, #ffffff);
}
</style>