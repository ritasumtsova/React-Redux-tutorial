import { createStore } from 'redux';
import cakeReduser from './cake/cakeReducer';

const store = createStore(cakeReduser);

export default store;
