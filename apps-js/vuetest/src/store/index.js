import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
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
    mutations:{
        STATE_SET_TOKEN (state, token) {
            state.token = token
        },
        STATE_SET_BASE_URL(state, url){
            state.baseUrl = url
        }


    },
    actions:{
        SET_TOKEN({commit}, token){
            commit('STATE_SET_TOKEN', token)

        },
        SET_BASE_URL({commit}, url){
            commit("STATE_SET_BASE_URL", url)
        }
    },

});

