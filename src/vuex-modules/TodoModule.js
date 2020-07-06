const TodoModule = {
    namespaced: true,
    state: {
        'title': null,
        'items': [

        ]
      },
      mutations: {
        updateTitle(state, value){
            state.title = value;
        },
        addItem(state, value){
            state.items = value;
        }
      },
      actions: {
        addItem({state, commit}){
            const item = {
              title: state.title,
              id: Date.now(),
              done: false
            }
            commit('addItem',[...state.items, item])
            commit('updateTitle', null) 
        }
      }
}

export default TodoModule;