<template>
   <el-header class="subheader">
      <div v-loading="apiData.isSubheaderInfoLoading">
         <div class="subheader-title" v-if="apiData.subheaderInfo" v-html="markdownToHtml(apiData.subheaderInfo.titre)"></div>
         <div class="subheader-desc" v-if="apiData.subheaderInfo" v-html="markdownToHtml(apiData.subheaderInfo.sous_titre)"></div>
      </div>
      <!-- <router-link :to="{ name: 'Inscription' }"><el-button v-if="apiData.subheaderInfo && apiData.subheaderInfo.bouton_lien" round>Je m'inscris!</el-button></router-link> -->
      <router-link :to="{ name: 'InscriptionCentreLoisirs' }"><el-button v-if="apiData.subheaderInfo && apiData.subheaderInfo.bouton_lien" round>Inscription</el-button></router-link>
   </el-header>
</template>

<script setup>

// markdownToHtml method comes from markedPlugin

import { useStore } from 'vuex'

// Use of vuex store
const store = useStore()
const apiData = store.state.apiData

</script>

<style lang="scss" scoped>

.subheader {
   /* for positioning */
   position: fixed;
   width: 100%;
   z-index: 0;
   height: $subheaderHeightDesktop;
   background: linear-gradient(180deg, #F78F1E, #ffffff);

   /* for content alignment */
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   .subheader-title {
      margin-top: -50px;
      text-align: center;
      :first-child {
         font-size: 30px;
      }
   }
   .subheader-desc {
      margin: 20px 0;
      :nth-child(even) {
         font-size: 24px;
      }
      :nth-child(odd) {
         font-size: 24px;
      }
   }
   .el-button {
      font-size: 26px;
      padding: 8px 40px;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
   }
}
@media screen and (max-width: 768px) {
   .subheader {
      height: $subheaderHeightMobile;
      .subheader-title {
         margin-top: -40px;
         :first-child {
            font-size: 20px;
         }
      }
      .subheader-desc {
         :nth-child(even) {
            font-size: 16px;
         }
         :nth-child(odd) {
            font-size: 16px;
         }
      }
      .el-button {
         font-size: 16px;
         padding: 8px 40px;
      }
   }
}

</style>