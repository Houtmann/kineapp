const state = {
    user: null,

};
const getters = {
    getUser: (state) => {
        return state.user
    },
    isActiveUser: (state) => {
        return state.user.is_active
    },
    getUserProgrammes: (state) => {
        return state.user.programs
    }
};
const actions = {
    saveUser({ commit }, user){
        commit('setUser', user)

    }
};
const mutations = {
    setUser (state, user) {
        state.user = user
    }
};
export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}