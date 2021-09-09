<template>
   <div class="team-main-container">
      <h2>L'Equipe / Contacts</h2>
      <el-image :src="team" alt="equipe"></el-image>
      <h3>Le Bureau</h3>
      <div class="members-table" v-loading="apiData.areMembersLoading">
         <Table :data="apiData.office" label="Fonction"/>
      </div>
      <h3>Les Responsables d'Activités</h3>
      <div class="members-table" v-loading="apiData.areMembersLoading">
         <Table :data="apiData.managers" label="Activité"/>
      </div>
   </div>
</template>

<script setup>

import { useStore } from 'vuex'

import team from '../assets/team.png'

import Table from '../components/Table.vue'

const store = useStore()

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

<style lang="scss">
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