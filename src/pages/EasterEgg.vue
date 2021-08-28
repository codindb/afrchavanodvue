<template>
  <div>
    <div class="logo">
        <el-image :src="logo" ></el-image>
    </div>
    <div class="kaamelott">
        <el-image :src="kaamelott" ></el-image>  
    </div>
    <div class="quote">
        <p>{{ quote }}</p>
        <el-button @click="refreshQuote()" :loading="loading" type="info" round>
            Nouvelle citation
        </el-button>
    </div>
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
            axios.get('https://kaamelott.hotentic.com/api/random').then((resp) => {
            this.quote = resp.data.citation.citation;
            this.loading = false;
            });
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
        padding-bottom: 100px
    }
    .kaamelott {
        margin-top: -150px
    }
</style>
