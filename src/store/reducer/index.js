const reducer = (state = {todos: []}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            //비어있으면 1, 아니면 마지막 id + 1
            const id = state.todos.length === 0 ? 1 : state.todos[state.todos.length - 1].id + 1;
            return {
                ...state,
                todos: state.todos.concat({ id, ...action.data })
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? { ...todo, ...action.data } : todo)
            }
        default:
            return state;
    }
}

export default reducer;