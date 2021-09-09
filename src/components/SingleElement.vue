<template>
   <el-container>
      <el-header class="fixed-header page-header" :style="'background: linear-gradient(180deg, ' + headerColor + ', #ffffff);'">
         <h2 v-if="data">{{ data.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="isDataLoading">
            <el-image v-if="data" :src="data.photo.url" :alt="'logo ' + imageAlt"></el-image>
            <div v-if="data" v-html="markdownToHtml(data.description)"></div>
            <div class="hr"><hr></div>
            <h3>Animateur / Animatrice</h3>
            <p v-if="data">{{ data.animateur}}</p>
            <h3>Horaires</h3>
            <div v-if="data" v-html="markdownToHtml(data.horaires)"></div>
            <h3>Lieu</h3>
            <p v-if="data">{{ data.lieu}}</p>
            <h3>Tarif</h3>
            <div v-if="data" v-html="markdownToHtml(data.tarif)"></div>
            <h3 v-if="data && data.info_supplementaire">Informations supplémentaires</h3>
            <div v-if="data" v-html="markdownToHtml(data.info_supplementaire? data.info_supplementaire : ' ')"></div>
            <h3>Contact</h3>
            <p v-if="data"><a :href="'tel:+33' + data.telephone">{{ data.telephone}}</a></p>
            <p v-if="data">{{ data.email}}</p>
            <div class="hr"><hr></div>
            <div v-if="data">
               <p v-if="data.adhesion">Nécessite l’adhésion Familles Rurales : 22 € par famille</p>
            </div>
         </div>
      </el-main>
   </el-container>
</template>

<script setup>

const props = defineProps({
  headerColor: String,
  data: Object,
  isDataLoading: Boolean,
  imageAlt: String,
})

</script>

<style lang="scss" scoped>

</style>