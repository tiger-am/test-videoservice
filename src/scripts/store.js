import {applyMiddleware, createStore} from 'redux'
import reducer from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store
