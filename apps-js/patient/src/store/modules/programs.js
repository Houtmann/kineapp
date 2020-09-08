import { GET_USER_PROGRAM_ASYNC} from '../mutations-types'
import Vue from 'vue'

import {doAsync, httpService} from "@/httpService";



const state = {
    [GET_USER_PROGRAM_ASYNC.loadingKey]: false,

};
const getters = {
    [GET_USER_PROGRAM_ASYNC.stateKey](state) {
        return state[GET_USER_PROGRAM_ASYNC.stateKey]
    }

}
const actions = {
    getProgramsData({commit}, {token, url}) {
            let req = httpService(token).get(url + 'programmes')
            doAsync({commit}, req, GET_USER_PROGRAM_ASYNC)

    },

};
const mutations = {
    [GET_USER_PROGRAM_ASYNC.SUCCESS] (state, info) {
        state[GET_USER_PROGRAM_ASYNC.loadingKey] = false
        Vue.set(state, [GET_USER_PROGRAM_ASYNC.stateKey], info)
    },

    [GET_USER_PROGRAM_ASYNC.PENDING] (state) {
        Vue.set(state, GET_USER_PROGRAM_ASYNC.loadingKey, true)
    },
    [GET_USER_PROGRAM_ASYNC.FAILURE] (state) {
        Vue.set(state, GET_USER_PROGRAM_ASYNC.loadingKey, false)
    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}