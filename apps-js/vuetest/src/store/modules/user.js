import * as types from '../mutations-types'
import Vue from 'vue'

import {doAsync, httpService} from "@/httpService";



const state = {
    user: null,
    [types.GET_USER_INFO_ASYNC.loadingKey]: false,

};
const getters = {
    getUser: (state) => {
        console.log(state.info)
        return state.info.data[0]
    },
    isActiveUser: (state) => {
        return state.info.data[0].is_active
    },
    getUserProgrammes: (state) => {
        return state.info.data[0].programs
    },

    [types.GET_USER_INFO_ASYNC.loadingKey](state) {
        return state.getUserInfoPending
    }
}
const actions = {
    getUserInfos({commit}, {token, url}) {
        let req = httpService(token).get(url + 'initial-data')
        doAsync({commit}, req, types.GET_USER_INFO_ASYNC)

    },

};
const mutations = {
    [types.GET_USER_INFO_ASYNC.SUCCESS] (state, info) {
        state[types.GET_USER_INFO_ASYNC.loadingKey] = false
        Vue.set(state, [types.GET_USER_INFO_ASYNC.stateKey], info)
    },

    [types.GET_USER_INFO_ASYNC.PENDING] (state) {
        console.log("y", types.GET_USER_INFO_ASYNC.loadingKey)
        state[types.GET_USER_INFO_ASYNC.loadingKey] = true
        Vue.set(state, types.GET_USER_INFO_ASYNC.loadingKey, true)
    },
    [types.GET_USER_INFO_ASYNC.FAILURE] (state) {
        console.log("b", types.GET_USER_INFO_ASYNC.loadingKey)
        Vue.set(state, types.GET_USER_INFO_ASYNC.loadingKey, false)
    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}