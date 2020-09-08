import {GET_USER_INFO_ASYNC} from '../mutations-types'
import Vue from 'vue'

import {doAsync, httpService} from "@/httpService";



const state = {
    user: null,
    [GET_USER_INFO_ASYNC.loadingKey]: false,

};
const getters = {
    [GET_USER_INFO_ASYNC.loadingKey](state) {
        return state.getUserInfoPending
    }
}
const actions = {
    getUserInfos({commit}, {token, url}) {
        let req = httpService(token).get(url + 'initial-data')
        doAsync({commit}, req, GET_USER_INFO_ASYNC)

    },

};
const mutations = {
    [GET_USER_INFO_ASYNC.SUCCESS] (state, info) {
        state[GET_USER_INFO_ASYNC.loadingKey] = false
        Vue.set(state, [GET_USER_INFO_ASYNC.stateKey], info)
    },

    [GET_USER_INFO_ASYNC.PENDING] (state) {
        state[GET_USER_INFO_ASYNC.loadingKey] = true
        Vue.set(state, GET_USER_INFO_ASYNC.loadingKey, true)
    },
    [GET_USER_INFO_ASYNC.FAILURE] (state) {
        Vue.set(state, GET_USER_INFO_ASYNC.loadingKey, false)
    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}