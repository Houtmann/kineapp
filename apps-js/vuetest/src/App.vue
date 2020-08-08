<template>
    <div id="app">
        <NavBar></NavBar>
        <div v-if="loading">
            <div>
                <md-progress-bar md-mode="indeterminate"></md-progress-bar>
                <md-progress-bar class="md-accent" md-mode="indeterminate"></md-progress-bar>
            </div>
        </div>
        <div v-else>
            <div v-if="isActiveUser"><router-view></router-view></div>
            <div v-else>Votre compte est désactivé</div>

        </div>


    </div>
</template>

<script>


    import {mapActions, mapGetters} from "vuex";
    import NavBar from "@/modules/home/navbar";
    import httpService from "@/httpService";

    export default {
        name: 'App',
        components: {NavBar},
        created() {
            // on recupere les data dnas la templates html
            const user = JSON.parse(document.querySelector('#app') && document.querySelector('#app').getAttribute('data-django'));
            this.saveToken(user.token)
            this.saveBaseUrl(user.base_url)

            httpService(this.getToken).get(this.getBaseUrl + 'initial-data')
                .then(response => {
                    console.log(response.data[0])

                    this.saveUser(response.data[0])
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
                .finally(() => this.loading = false)

        },
        methods: {
            ...mapActions([
                'saveToken',
                'saveBaseUrl'
            ]), ...mapActions('user', [
                'saveUser'
            ]),
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
            ...mapGetters([
                'getToken',
                'getBaseUrl'
            ]),
            ...mapGetters('user', [
                'getUser',
                'isActiveUser'
            ])
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
