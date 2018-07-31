import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
    count: 1
}

const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count -= 1;
    }
}

const getters = {
    count: function(state) {
        return state.count += 100;
    }
}

const actions = {
    addAction(context) {
        // context -> store self
        // context.commit('add', 10);
        setTimeout(() => {
            context.commit('add', 10);
        }, 3000);
        console.log('behind of add function!');
    },
    reduceAction({commit}) {
        // commit -> object
        commit('reduce')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
})

// USE MODULES
// const moduleA = {
//     state, mutations, getters, actions
// }

// export default new Vuex.Store({
//     modules: {
//         a: moduleA
//     }
// })
