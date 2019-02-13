import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		logged: false
	},
	getters: {
		logged: (state) => state.logged
	},
	actions: {
		login({
			commit,
			dispatch
		}, payload) {
			commit('login', payload)
		},
		logout({
			commit,
			dispatch
		}, payload) {
			commit('logout', payload)
		}
	},
	mutations: {
		login(state, payload) {
			state.logged = true
		},
		logout(state, payload) {
			state.logged = false
		}
	},
	modules: {}
})


export default store;