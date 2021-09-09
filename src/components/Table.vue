<template>
   <el-table
      v-if="data"
      :data="data"
      :default-sort = "{prop: 'fonction_ou_activite', order: 'ascending'}"
      stripe
      highlight-current-row
      fit>
      <el-table-column
         prop="fonction_ou_activite"
         :label="label"
         fixed
         min-width="170"
         sortable>
      </el-table-column>
      <el-table-column
         prop="nom"
         label="Nom"
         min-width="210"
         sortable>
      </el-table-column>
      <el-table-column
         label="Téléphone"
         min-width="150">
         <template #default="scope">
            <a :href="'tel:+33' + scope.row.telephone">{{ scope.row.telephone }}</a>
         </template>
      </el-table-column>
      <el-table-column
         prop="email"
         label="e-mail"
         min-width="250">
      </el-table-column>
      <el-table-column
         prop="adresse"
         label="Adresse"
         min-width="300">
      </el-table-column>
   </el-table>
</template>

<script setup>

const props = defineProps({
   data: Object,
   label: String,
})

</script>

<style lang="scss" scoped>

</style>