<template>

  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item">
      <md-table>
        <md-table-row>
          <md-table-head>Nom du programme</md-table-head>
          <md-table-head>Type</md-table-head>
          <md-table-head>Description</md-table-head>

        </md-table-row>
        <md-table-row v-for="item in progs" :key="item.id">
          <md-table-cell>
            <router-link :to="{ name: 'Programme', params: { programmeId: item.id , prog:item}} ">{{
                item.name
              }}
            </router-link>
          </md-table-cell>
          <md-table-cell>{{ item.type }}</md-table-cell>
          <md-table-cell>{{ item.description }}</md-table-cell>
        </md-table-row>


      </md-table>

    </div>
    <div class="md-layout-item"></div>
  </div>


</template>

<script>
import {mapGetters, mapActions} from "vuex";
import {GET_USER_PROGRAM_ASYNC} from '@/store/mutations-types'

export default {
  name: "Programmes",
  mounted() {
    // prechargement  des programmes
    if (!this.progs) {
      this.getProgramsData({token: this.getToken, url: this.getBaseUrl})

    }
  },

  computed: {
    ...mapGetters(['getToken', 'getBaseUrl']),
    ...mapGetters('programs',
        {
          'progs': [GET_USER_PROGRAM_ASYNC.stateKey]
        })
  },
  methods: {
    ...mapActions('programs', ['getProgramsData'])
  }

}

</script>

<style lang="scss" scoped>
.md-table-cell {
  text-align: center;
}

.md-table-head {
  text-align: center;
}

</style>