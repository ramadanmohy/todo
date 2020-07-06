const TodoModule = {
    namespaced: true,
    state: {
        'title': null,
        'items': [],
        'isModalOpen': false,
        'selectedId': null
      },
      mutations: {
        updateTitle(state, value){
            state.title = value;
        },
        updateItems(state, value){
            state.items = value;
        },
        openModal(state, value){
          state.isModalOpen = value;
        },
        setSelectedId(state, value){
          state.selectedId = value;
        }
      },
      actions: {
        addItem({state, commit}){
            const item = {
              title: state.title,
              id: Date.now(),
              done: false
            }
            commit('updateItems',[...state.items, item])
            commit('updateTitle', null) 
        },
        deleteItem({state, commit}){
          commit('openModal', false) 
          commit('updateItems', state.items.filter(item=> item.id != state.selectedId))
          commit('setSelectedId', null) 
        },
        completeItem({state, commit}, id){
          let selected = state.items.find((item) => item.id == id);
          let items = state.items.map((item) => {
            if (item.id == id) {
              return Object.assign({}, selected, {
                done: true,
              });
            }
            return item;
          });
          commit('updateItems', items)
        },
        updateItem({state, commit}, payload){
          let selected = state.items.find((item) => item.id == payload.id);
          let items = state.items.map((item) => {
            if (item.id == payload.id) {
              return Object.assign({}, selected, {
                title: payload.title,
              });
            }
            return item;
          });
          commit('updateItems', items)
        }
      }
}

export default TodoModule;