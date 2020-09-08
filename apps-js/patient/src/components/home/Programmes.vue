<template>
  <v-row align="center"
         justify="center">

    <div v-for="item in progs" :key="item.id">
      <v-col>
        <v-hover v-slot:default="{ hover }">
          <router-link
              active-class="active"

              :to="{ name: 'Programme', params: { programmeId: item.id , prog:item}} ">
            <v-flex>
            <v-card
                class="mx-auto"
                max-width="400"
                outlined
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"

            >
              <v-list-item>
                <v-list-item-content class="text-no-wrap">
                  <div class="overline mb-1 text-no-wrap">{{ item.type }}</div>
                  <v-list-item-title class="headline mb-1 ">{{ item.name }}</v-list-item-title>
<!--                  <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>-->
                </v-list-item-content>


              </v-list-item>


            </v-card>
            </v-flex>
          </router-link>
        </v-hover>


      </v-col>
    </div>
  </v-row>
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
@import '/src/styles/variable.scss';

.v-list-item__title{
  white-space: $toto;
}

a:link{
  text-decoration: none;

  }

</style>