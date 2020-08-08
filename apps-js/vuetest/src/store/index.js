import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: '',
        baseUrl: '',
    },
    modules: {
        user
    },
    getters:{
        getToken:(state) => {return state.token},
        getBaseUrl:(state) => {return state.baseUrl}

    },
    actions:{
        saveToken({commit }, token){
            commit('setToken', token)

        },
        saveBaseUrl({commit}, url){
            commit("setBaseUrl", url)
        }
    },
    mutations:{
        setToken (state, token) {
            state.token = token
        },
        setBaseUrl(state, url){
            state.baseUrl = url
        }


    }
});

