import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: '',
        loginUser: ''
    },
    mutations: {},
    actions: {
        setToken: (state, token) => {
            state.token = token;
            localStorage.setItem('mytoken', token)
        },
        logout: state => {
            state.token = null;
            localStorage.removeItem('mytoken');
        },
        setUser: (state, loginUser) => {
            state.loginUser = loginUser;
            localStorage.setItem('user', loginUser)
        },
    },
    modules: {}
})