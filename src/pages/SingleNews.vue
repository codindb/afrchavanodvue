<template>
   <div>
      <h2>Actu : {{ route.params.id }}</h2>
   </div>
</template>

<script setup>

import { useRoute } from 'vue-router'

const route = useRoute()

// const props = defineProps({
//   foo: String
// })

</script>

<style lang="scss" scoped>

</style>