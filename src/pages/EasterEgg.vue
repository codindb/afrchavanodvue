<template>
  <div>
    <div class="logo">
        <el-image :src="logo" alt="logo kaamelott"></el-image>
    </div>
    <div class="kaamelott">
        <el-image :src="kaamelott" alt="logo kaamelott"></el-image>  
    </div>
    <el-container class="quote" direction="vertical">
        <p v-loading="loading">{{ quote }}</p>
        <el-button @click="refreshQuote()" type="info" round>
            Nouvelle citation
        </el-button>
    </el-container>
  </div>
  <div class="bottomGap"></div>
</template>

<script>
    import axios from 'axios';
    import { defineComponent } from 'vue';
    import logo from '../assets/kaamelottLogo.png'
    import kaamelott from '../assets/kaamelott.png'

    export default defineComponent ({
        name: 'EasterEgg',
        data() {
        return {
            loading: false,
            quote: '',
            logo,
            kaamelott,
        }
        },
        methods: {
            refreshQuote() {
                this.loading = true;
                setTimeout(() => {
                    axios.get('https://kaamelott.hotentic.com/api/random').then((resp) => {
                    this.quote = resp.data.citation.citation;
                    this.loading = false;
                    });
                }, 500);
            }
        },
        created() {
        this.refreshQuote();
        }
    })
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
