const state = {
    title : '잠만보',
};

const mutations = {
    changeTitle(state, newTitle){
        state.title = newTitle;
    }
}

const actions = {
    callBookMutation({state,commit}, {newTitle}){
        if(newTitle) commit('changeTitle', newTitle);
    }
}

const getters = {
    getTitle(state){
        return `${state.title} 파괴광선 쿠와아아아아아아아`;
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};
