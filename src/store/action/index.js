//action은 상태에 변화가 필요할 때 발생하는 액션을 사전에 정의하는 객체
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