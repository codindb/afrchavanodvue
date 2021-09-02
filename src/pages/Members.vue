<template>
   <div class="team-main-container">
      <h2>L'Equipe / Contacts</h2>
      <el-image :src="team"></el-image>
      <h3>Le Bureau</h3>
      <div class="members-table" v-loading="apiData.areMembersLoading">
         <el-table
            v-if="apiData.office"
            :data="apiData.office"
            :default-sort = "{prop: 'fonction_ou_activite', order: 'ascending'}"
            fit>
            <el-table-column
               prop="fonction_ou_activite"
               label="Fonction"
               fixed
               min-width="120"
               sortable>
            </el-table-column>
            <el-table-column
               prop="nom"
               label="Nom"
               min-width="220"
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
      </div>
      <h3>Les Responsables d'Activités</h3>
      <div class="members-table" v-loading="apiData.areMembersLoading">
         <el-table
            v-if="apiData.managers"
            :data="apiData.managers"
            :default-sort = "{prop: 'fonction_ou_activite', order: 'ascending'}"
            fit>
            <el-table-column
               prop="fonction_ou_activite"
               label="Activité"
               fixed
               min-width="170"
               sortable>
            </el-table-column>
            <el-table-column
               prop="nom"
               label="Nom"
               min-width="220"
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
      </div>
   </div>
   <div class="bottomGap"></div>
</template>

<script setup>

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import team from '../assets/team.png'

const store = useStore()
const route = useRoute()
const router = useRouter()

const apiData = store.state.apiData

const loadOffice = async () => {
   try {
      await store.dispatch('apiData/fetchOffice')
   } catch(e) {
      store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger les membres du bureau",
         duration: 5000
      });
   }
}
loadOffice()

const loadManagers = async () => {
   try {
      await store.dispatch('apiData/fetchManagers')
   } catch(e) {
      store.dispatch('notifications/sendError', {
         title: "Erreur",
         message: "Impossible de charger les responsables d'activités",
         duration: 5000
      });
   }
}
loadManagers()

</script>

<style lang="scss" scoped>
.team-main-container {
   margin-bottom: 50px;
   h2 {
      font-size: 36px;
   }
   .el-image {
      max-width: 90%;
   }
   .members-table {
      min-height: 100px;
      margin: 30px 0;
   }
   .el-table {
      width: 75%;
      margin: 0 auto;
      a {
        text-decoration: none;
        color: #2c3e50;
      }
   }
   @media screen and (max-width: 768px) {
      .el-table {
         width: 95%;
      }
   }
}

</style>