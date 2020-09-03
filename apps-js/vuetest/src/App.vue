<template>
    <div id="app">
        <NavBar></NavBar>

        <div v-if="getUserInfoPending === true">
            cicicic
            <div>
            <Spinner/>
            </div>
        </div>
        <div v-else>
<!--            <div v-if="isActiveUser">-->
            toto
              <transition name="fade" mode="out-in"><router-view></router-view></transition></div>

<!--            <div v-else>Votre compte est désactivé</div>-->

        </div>



</template>

<script>


    import {mapActions, mapGetters} from "vuex";
    import NavBar from "@/modules/home/navbar";
    import Spinner from "@/modules/core/Spinner";


    export default {
        name: 'App',
        components: {Spinner, NavBar},
        created() {
            // on recupere les data dnas la templates html
            const user = JSON.parse(document.querySelector('#app') && document.querySelector('#app').getAttribute('data-django'));
            this.SET_TOKEN(user.token)
            console.log("pending", this.getUserInfoPending)
            this.SET_BASE_URL(user.baseurl)

            this.getUserInfos({token:user.token, url:user.baseurl})


        },
        methods: {
            ...mapActions(['SET_TOKEN', 'SET_BASE_URL']), ...mapActions('user', ['getUserInfos']),
        },

        data() {
            return {
                message: '',
                loading: true,
                error: false
            }
        },

        computed: {
            // mix the getters into computed with object spread operator
            ...mapGetters(['getToken','getBaseUrl']), ...mapGetters('user', ['isActiveUser', 'getUser', 'getUserInfoPending'])

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
