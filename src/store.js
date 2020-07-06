import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    'todos': [
      {id: 1, title: "first item", done: false},
      {id: 2, title: "second item", done: false},
      {id: 3, title: "third item", done: false}
    ]
  },
  mutations: {

  },
  actions: {

  }
})
