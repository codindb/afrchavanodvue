<template>
   <h2>🚧 En cours de construction 🚧</h2>
   <el-image :src="underConstruction" alt="en cours de construction"></el-image>
   <h2>🚧 En cours de construction 🚧</h2>
   <el-row justify="center">
      <el-col @click="router.back()" :span="8" :sm="4"><h3>🔙</h3></el-col>
      <el-col :span="8" :sm="4"><router-link :to="{ name: 'Home' }"><h3>🏠</h3></router-link></el-col>
   </el-row>
</template>

<script setup>

import { useRouter } from 'vue-router'

// 404 image Url
import underConstruction from '../assets/underConstruction.png'

const router = useRouter()
   
</script>

<style lang="scss" scoped>
   h2 {
      font-size: 22px;
   }
   h3 {
      font-size: 60px;
      cursor: pointer;
   }
   @media screen and (min-width: 768px) {
      .el-image {
         height: 400px;
      }
      h2 {
         font-size: 36px;
      }
   }
</style>