<template>
   <el-dialog
      v-model="data.newsDialogVisibility"
      width="90%"
      destroy-on-close
      center>
      <div class="news-dialog-content">
         <h2>{{ apiData.news[data.newsIndex].titre }}</h2>
         <el-image :src="imageSrc" alt="actualité"></el-image>
         <div v-html="markdownToHtml(apiData.news[data.newsIndex].description)"></div>
         <div v-if="apiData.news[data.newsIndex].fichiers.length > 0">
            <el-button round icon="el-icon-download" v-for="file in apiData.news[data.newsIndex].fichiers" :key="file" @click="downloadFile(file.url, file.name)">{{ file.name }}</el-button>
         </div>
         <div v-if="apiData.news">
            <div class="tags" v-if="apiData.news[data.newsIndex].activites.length > 0 || apiData.news[data.newsIndex].ateliers.length > 0 || apiData.news[data.newsIndex].enfants.length > 0">
               <el-tag v-for="activite in apiData.news[data.newsIndex].activites" :key="activite"><router-link :to="{ name: 'Activite', params: {id: activite.id}}" @click="setNewsDialogVisibility(false)">{{ activite.titre }}</router-link></el-tag>
               <el-tag type="success" v-for="atelier in apiData.news[data.newsIndex].ateliers" :key="atelier"><router-link :to="{ name: 'Atelier', params: {id: atelier.id}}" @click="setNewsDialogVisibility(false)">{{ atelier.titre }}</router-link></el-tag>
               <el-tag type="warning" v-for="enfant in apiData.news[data.newsIndex].enfants" :key="enfant"><router-link :to="{ name: 'Enfants', params: {id: enfant.id}}" @click="setNewsDialogVisibility(false)">{{ enfant.titre }}</router-link></el-tag>
            </div>
         </div>
      </div>
   </el-dialog>
</template>

<script setup>

import { computed } from 'vue'

// markdownToHtml method comes from markedPlugin

import { useStore } from 'vuex'

// To access the downloadFile function from firebase service
import * as FirebaseStorageService from '../services/FirebaseStorageService.js'

// Use firebase service to download file
const downloadFile = (url, filename) => {
   FirebaseStorageService.downloadFile(url, filename)
}

const store = useStore()
const apiData = store.state.apiData
const data = store.state.data

// To handle news dialog
const setNewsDialogVisibility = (boolean) => {
   store.dispatch('data/setNewsDialogVisibility', boolean)
}

// To handle image src and display small image if available
const imageSrc = computed(() => {
   return apiData.news[data.newsIndex].photo.formats.small ? apiData.news[data.newsIndex].photo.formats.small.url : apiData.news[data.newsIndex].photo.url
})

</script>

<style lang="scss" scoped>

.el-dialog {
   .news-dialog-content {
      min-height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      word-break: break-word;
      text-align: center;
      .el-button {
         font-size: 14px;
         margin: 10px;
         box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
         a {
            text-decoration: none;
            color: #2c3e50;
         }
      }
      .tags {
         margin: 30px 0;
         .el-tag {
            margin: 10px 5px;
            font-size: 12px;
            border-radius: 30px;
         }
         a {
            text-decoration: none;
            color: #2c3e50;
         }
      }
      .el-image {
         max-width: 400px;
         margin-bottom: 30px;
      }
      @media screen and (min-width: 768px) {
         h2 {
            font-size: 40px;
         }
         p {
            font-size: 30px
         }
         .el-button {
            font-size: 16px;
         }
         .tags {
            .el-tag {
               font-size: 14px;
            }
         }
      }
   }
}

</style>