const TodoModule = {
    namespaced: true,
    state: {
        'title': null,
        'items': [],
        'isModalOpen': false,
        'selectedId': {}
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
          commit('updateItems', state.items.filter(item=> item.id == state.id))
          commit('setSelectedId', null) 
        }
      }
}

export default TodoModule;