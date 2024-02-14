import { combineReducers } from 'redux';

import todoReducer from './todo';
import progressReducer from './progress';
import doneReducer from './done';

const rootReducer = combineReducers({
    todos: todoReducer,
    progress: progressReducer,
    done: doneReducer
});

export default rootReducer;