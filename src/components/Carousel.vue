<template>
   <el-carousel :class="carouselClass()" ref="carousel" indicator-position="outside" arrow="always" trigger="click" :interval="4000" :type="carouselType()" :height="carouselHeight()">
      <el-carousel-item v-for="(item, index) in apiData.news" :key="item">
            <el-image v-if="item.photo" :src="item.photo.formats.small ? item.photo.formats.small.url : item.photo.url" @click="setNewsDialogVisibility(true); setNewsIndex(index)" class="image" alt="image actualité"></el-image>
            <div class="newsTitle"> {{ item.titre }}</div>
      </el-carousel-item>
   </el-carousel>
</template>

<script setup>

import { ref, watch , onMounted } from 'vue'
import { useStore } from 'vuex'

// To handle responsiveness
import { useWindowSize } from 'vue-window-size';

//Use of vuex store
const store = useStore()

const apiData = store.state.apiData

const data = store.state.data

// To fix a carousel display issue
const carousel = ref("")

onMounted(() => {
   carousel.value.setActiveItem(0)
});

// Initialize window size check
const { width, height } = useWindowSize();

// Handle carousel responsive display
const carouselHeight = () => {
   if(width.value <= 768) {
      return "250px"
   } else {
      return "300px"
   }
}

const carouselType = () => {
   if(width.value <= 768) {
      return " "
   } else {
      return "card"
   }
}

const carouselClass = () => {
   if(width.value <= 768) {
      return "mobile-carousel"
   } else {
      return "desktop-carousel"
   }
}

watch(width, () => {
   carouselHeight()
   carouselType()
   carouselClass()
})

// To handle news dialog
const setNewsDialogVisibility = (boolean) => {
   store.dispatch('data/setNewsDialogVisibility', boolean)
}
const setNewsIndex = (index) => {
   store.dispatch('data/setNewsIndex', index)
}

</script>

<style lang="scss" scoped>

.desktop-carousel {
   padding-top: 20px;
   width: 70%;
   margin: 0 auto;
   padding-left: 8px;
   padding-right: 20px;
   .el-carousel__item {
      border-radius: 30px;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.19) 0px -10px 20px -10px, rgba(0, 0, 0, 0.23) 0px -6px 6px -2px;
   }
}
.mobile-carousel {
   .newsTitle {
      font-size: 24px;
   }
}
.newsTitle {
   position: absolute;
   bottom: 0;
   font-size: 40px;
   font-weight: bold;
   width: 100%;
   color: white;
   background: rgb(0,0,0);
   background: linear-gradient(0deg, rgba(0,0,0,1) -20%, rgba(255,255,255,0) 130%);
}

</style>