<template>
   <el-dialog
      v-model="data.newsDialogVisibility"
      width="90%"
      destroy-on-close
      center>
      <div class="news-dialog-content">
         <h2>{{ apiData.news[data.newsIndex].titre }}</h2>
         <el-image :src="apiData.news[data.newsIndex].photo.url" alt="actualité"></el-image>
         <div v-html="markdownToHtml(apiData.news[data.newsIndex].description)"></div>
         <div v-if="apiData.news[data.newsIndex].fichiers.length > 0">
            <el-button round v-for="file in apiData.news[data.newsIndex].fichiers" :key="file" @click="downloadFile(file.url, file.name)">{{ 'Telecharger ' + file.name }}</el-button>
         </div>
         <div v-if="apiData.news">
            <div class="tags" v-if="apiData.news[data.newsIndex].activites.length > 0 || apiData.news[data.newsIndex].ateliers.length > 0 || apiData.news[data.newsIndex].enfants.length > 0">
               <el-tag v-for="activite in apiData.news[data.newsIndex].activites" :key="activite"><a :href="'/activites/' + activite.id">{{ activite.titre }}</a></el-tag>
               <el-tag type="success" v-for="atelier in apiData.news[data.newsIndex].ateliers" :key="atelier"><a :href="'/ateliers/' + atelier.id">{{ atelier.titre }}</a></el-tag>
               <el-tag type="warning" v-for="enfant in apiData.news[data.newsIndex].enfants" :key="enfant"><a :href="'/enfants/' + enfant.id">{{ enfant.titre }}</a></el-tag>
            </div>
         </div>
      </div>
   </el-dialog>
</template>

<script setup>

import { inject } from 'vue'
import { useStore } from 'vuex'

// To access the downloadFile function from firebase service
import * as FirebaseStorageService from '../services/FirebaseStorageService.js'

// Use firebase service to download file
const downloadFile = (url, filename) => {
   FirebaseStorageService.downloadFile(url, filename)
}

// To use marked (provided globally in main.js)
const marked = inject('marked')

const store = useStore()

const apiData = store.state.apiData

const data = store.state.data
   
// method used by marked to parse markdown
const markdownToHtml = (markdown) => {
   return marked(markdown)
}

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