<template>
   <el-image :src="notFoundImageUrl" alt="404 Not Found"></el-image>
   <h2>Page Introuvable 😵‍💫</h2>
   <el-row justify="center">
      <el-col @click="router.back()" :span="8" :sm="4"><h3>🔙</h3></el-col>
      <el-col :span="8" :sm="4"><router-link :to="{ name: 'Home' }"><h3>🏠</h3></router-link></el-col>
   </el-row>
</template>

<script setup>

import { useRouter } from 'vue-router'

// 404 image Url
import notFoundImageUrl from '../assets/404.png'

const router = useRouter()
   
</script>

<style lang="scss" scoped>
   h2 {
      font-size: 36px;
   }
   h3 {
      font-size: 60px;
      cursor: pointer;
   }
</style>