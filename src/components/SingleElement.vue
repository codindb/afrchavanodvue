<template>
   <el-container>
      <el-header class="fixed-header page-header" :style="'background: linear-gradient(180deg, ' + headerColor + ', #ffffff);'">
         <h2 v-if="data">{{ data.titre }}</h2>
      </el-header>

      <el-main class="overlapping page-main">
         <div class="overlapping-content" v-loading="isDataLoading">
            <el-image class="title-image" v-if="data" :src="data.photo.formats.small.url ? data.photo.formats.small.url : data.photo.url" :alt="'logo ' + imageAlt"></el-image>
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