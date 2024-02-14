import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

store.dispatch({ type: 'ADD_TODO', data: { id: 1, title: 't1', content: '테스트1' } })
store.dispatch({ type: 'ADD_TODO', data: { id: 2, title: 't2', content: '테스트2' } })
store.dispatch({ type: 'ADD_TODO', data: { id: 3, title: 't3', content: '테스트3' } })
store.dispatch({ type: 'ADD_TODO', data: { id: 4, title: 't4', content: '테스트4' } })

store.dispatch({ type: 'ADD_PROGRESS', data: { id: 1, title: 'p1', content: '테스트1' } })

store.dispatch({ type: 'ADD_DONE', data: { id: 1, title: 'd1', content: '테스트1' } })


export default store;