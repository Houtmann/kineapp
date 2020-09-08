import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import programs from './modules/programs'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        token: '',
        baseUrl: '',
        loading: false
    },
    modules: {
        user,
        programs
    },
    getters:{
        getToken:(state) => {return state.token},
        getBaseUrl:(state) => {return state.baseUrl},
        getLoading:(state) => {return state.loading}

    },
    mutations:{
        STATE_SET_TOKEN (state, token) {
            state.token = token
        },
        STATE_SET_BASE_URL(state, url){
            state.baseUrl = url
        },
        STATE_SET_LOADING(state, loading){
            state.loading = loading
        }


    },
    actions:{
        SET_TOKEN({commit}, token){
            commit('STATE_SET_TOKEN', token)

        },
        SET_BASE_URL({commit}, url){
            commit("STATE_SET_BASE_URL", url)
        },
        SET_LOADING({commit}, loading){
            console.log("toto")
            commit("STATE_SET_LOADING", loading)
        }
    },

});

