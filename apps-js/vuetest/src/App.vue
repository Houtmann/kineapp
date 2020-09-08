<template>
  <v-app>
    <v-main>
      <v-container>
    <NavBar></NavBar>

    <div v-if="getLoading === true">
      <v-overlay absolute="true">
        <div>
          <Spinner/>
        </div>
      </v-overlay>
    </div>
    <div v-else>
      <!--            <div v-if="isActiveUser">-->

      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

    <!--            <div v-else>Votre compte est désactivé</div>-->
      </v-container>
    </v-main>
  </v-app>


</template>

<script>
import {mapActions, mapGetters} from "vuex";
import NavBar from "@/modules/home/navbar";
import Spinner from "@/modules/core/Spinner"

export default {
  name: 'App',
  components: {Spinner, NavBar},
  data() {
    return {
      overlay: true
    }
  },
  created() {
    // on recupere les data dnas la templates html
    const user = JSON.parse(document.querySelector('#app') && document.querySelector('#app').getAttribute('data-django'));

    this.SET_TOKEN(user.token)
    this.SET_BASE_URL(user.baseurl)
    this.getUserInfos({token: user.token, url: user.baseurl})


  },
  methods: {
    ...mapActions(['SET_TOKEN', 'SET_BASE_URL']), ...mapActions('user', ['getUserInfos']),
  },

  computed: {
    // mix the getters into computed with object spread operator
    ...mapGetters(['getToken', 'getBaseUrl', 'getLoading']), ...mapGetters('user', ['isActiveUser', 'getUser', 'getUserInfoPending'])

  }
}

</script>

<style lang="scss" scoped>

.md-progress-bar {
  margin: 24px;
  height: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
