const state = {
    user: {}
};
const getters = {
    user: state => state.user
};
const mutations = {
    SET_USER: (state, info) => {
        state.user = info;
    }
};
const actions = {
    // 设置企业信息
    setUserInfo({ commit }, info) {
        commit('SET_USER', info);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
