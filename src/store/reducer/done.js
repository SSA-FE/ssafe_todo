const doneReducer = (state = { done: [] }, action) => {
    switch (action.type) {
        case 'ADD_DONE':
            return {
                ...state,
                done: state.done.concat({ ...action.data })
            }
        case 'DELETE_DONE':
            return {
                ...state,
                done: state.done.filter(done => done.id !== action.id)
            }
        case 'UPDATE_DONE':
            return {
                ...state,
                done: state.done.map(done => done.id === action.id ? { ...done, ...action.data } : done)
            }
        default:
            return state;
    }
}

export default doneReducer;