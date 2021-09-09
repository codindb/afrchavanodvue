<template>
   <el-container>
      <el-header class="fixed-header page-header">
         <h2 v-if="apiData.kidsCamp">{{ apiData.kidsCamp.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="apiData.isKidsCampLoading">
            <el-image class="title-image" v-if="apiData.kidsCamp" :src="apiData.kidsCamp.photo.url" alt="image centre de loisirs"></el-image>
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
      </el-main>
   </el-container>
</template>

<script setup>

// markdownToHtml method comes from markedPlugin

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

</script>

<style lang="scss" scoped>

.el-header {
   background: linear-gradient(180deg, #F78F1E, #ffffff);
}
.fixed-header {
   position: fixed;
   width: 100%;
   z-index: 0;

   h2 {
   color: white;
   font-size: 46px;
   font-weight: bold;
   margin-top: -20px;
   }
   @media screen and (max-width: 768px) {
   h2 {
         font-size: 30px;
   }
   }
}
.page-header {
   // for positioning
   height: 200px !important;

   // for content
   display: flex;
   justify-content: center;
   align-items: center;
}
.overlapping {
   background-color: white;
   border-top-left-radius: 30px;
   border-top-right-radius: 30px;
   z-index: 1;
   box-shadow: rgba(0, 0, 0, 0.19) 0px -15px 20px, rgba(0, 0, 0, 0.23) 0px -6px 6px;
   .overlapping-content {
      min-height: 300px;
      a {
         text-decoration: none;
         color: #2c3e50;
      }
      .hr {
         width: 5%;
         margin: 20px auto;
      }
      .title-image {
         max-width: 100%;
         width: 20%;
      }
      @media screen and (max-width: 768px) {
         .hr {
            width: 30%;
         }
         .title-image {
            width: 60%;
         }
      }
   }
}
.page-main {
   margin-top: 170px;
}

</style>