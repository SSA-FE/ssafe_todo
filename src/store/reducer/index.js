import { combineReducers } from 'redux';

import todoReducer from './todo';
import progressReducer from './progress';
import doneReducer from './done';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage: storage,
}

const rootReducer = combineReducers({
    todos: todoReducer,
    progress: progressReducer,
    done: doneReducer
});

export default persistReducer(persistConfig, rootReducer);
