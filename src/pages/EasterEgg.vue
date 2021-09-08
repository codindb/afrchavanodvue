<template>
  <div>
    <div class="logo">
        <el-image :src="logo" alt="logo kaamelott"></el-image>
    </div>
    <div class="kaamelott">
        <el-image :src="kaamelott" alt="logo kaamelott"></el-image>  
    </div>
    <el-container class="quote" direction="vertical">
        <p v-loading="data.loading">{{ data.quote }}</p>
        <el-button @click="refreshQuote()" type="info" round>
            Nouvelle citation
        </el-button>
    </el-container>
  </div>
  <div class="bottomGap"></div>
</template>

<script setup>

import { reactive } from 'vue';
import axios from 'axios';
import logo from '../assets/kaamelottLogo.png'
import kaamelott from '../assets/kaamelott.png'

const data = reactive({
    loading: false,
    quote:""
})

const refreshQuote = () => {
    data.loading = true;
    setTimeout(() => {
        axios.get('https://kaamelott.hotentic.com/api/random').then((resp) => {
            data.quote = resp.data.citation.citation
            data.loading = false
        });
    }, 500)
}
refreshQuote();

</script>

<style scoped lang="scss">
    p {
        font-size: 24px;
        padding: 50px;
    }
    .quote {
        padding-bottom: 50px;
        align-items: center;
        .el-button {
        width: 200px;
    }
    }
    .kaamelott {
        margin-top: -150px
    }
    
</style>
