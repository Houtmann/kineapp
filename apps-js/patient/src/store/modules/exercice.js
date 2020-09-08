import {EXERCICE} from '../mutations-types'
import Vue from 'vue'

import {doAsync, httpService} from "@/httpService";


const state = {
    programs: null,
    [EXERCICE.loadingKey]: false,

};
const getters = {}
const actions = {
    getProgramsData({commit}, {token, url}) {
        let req = httpService(token).get(url + '')
        doAsync({commit}, req, EXERCICE)

    },

};
const mutations = {
    [EXERCICE](state, info) {
        state[EXERCICE.loadingKey] = false
        Vue.set(state, [EXERCICE.stateKey], info)
    },

    [EXERCICE.PENDING](state) {

        state[EXERCICE.loadingKey] = true
        Vue.set(state, EXERCICE.loadingKey, true)
    },
    [EXERCICE.FAILURE](state) {
        console.log("b", EXERCICE.loadingKey)
        Vue.set(state, EXERCICE.loadingKey, false)
    }
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}