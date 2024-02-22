import { createStore } from 'redux';
import rootReducer from './reducer';

import { v4 as uuidv4 } from 'uuid';

const store = createStore(rootReducer);

store.dispatch({
    type: 'ADD_TODO',
    data: {
        id: uuidv4(),
        title: '할 일 1',
        content: '할 일 1 내용',
    }
});

store.dispatch({
    type: 'ADD_PROGRESS',
    data: {
        id: uuidv4(),
        title: '할 일 2',
        content: '할 일 2 내용',
    }
});

store.dispatch({
    type: 'ADD_DONE',
    data: {
        id: uuidv4(),
        title: '할 일 3',
        content: '할 일 3 내용',
    }
});


export default store;