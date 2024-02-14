const progressReducer = (state = {progress: []}, action) => {
    switch (action.type) {
        case 'ADD_PROGRESS':
            return {
                ...state,
                progress: state.progress.concat({ ...action.data })
            }
        case 'DELETE_PROGRESS':
            return {
                ...state,
                progress: state.progress.filter(progress => progress.id !== action.id)
            }
        case 'UPDATE_PROGRESS':
            return {
                ...state,
                progress: state.progress.map(progress => progress.id === action.id ? { ...progress, ...action.data } : progress)
            }
        default:
            return state;
    }
}

export default progressReducer;