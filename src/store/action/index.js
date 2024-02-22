export const addTodo = (data) => {
    return {
        type: 'ADD_TODO',
        data
    }
}

export const deleteTodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

export const updateTodo = (id, data) => {
    return {
        type: 'UPDATE_TODO',
        id,
        data
    }
}

export const addDone = (data) => {
    return {
        type: 'ADD_DONE',
        data
    }
}

export const deleteDone = (id) => {
    return {
        type: 'DELETE_DONE',
        id
    }
}

export const updateDone = (id, data) => {
    return {
        type: 'UPDATE_DONE',
        id,
        data
    }
}

export const addProgress = (data) => {
    return {
        type: 'ADD_PROGRESS',
        data
    }
}

export const deleteProgress = (id) => {
    return {
        type: 'DELETE_PROGRESS',
        id
    }
}

export const updateProgress = (id, data) => {
    return {
        type: 'UPDATE_PROGRESS',
        id,
        data
    }
}

