import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer)

console.log(store.getState())

store.dispatch({ type: 'ADD_TODO', data: { id: 1, title: 't1', content: '테스트1' } })
store.dispatch({ type: 'ADD_TODO', data: { id: 2, title: 't2', content: '테스트2' } })
store.dispatch({ type: 'ADD_TODO', data: { id: 3, title: 't3', content: '테스트3' } })
store.dispatch({ type: 'ADD_TODO', data: { id: 4, title: 't4', content: '테스트4' } })

export default store;