import { createStore, combineReducers, applyMiddleware } from 'redux';
import Reducer from '../reducers';
import thunk from 'redux-thunk';

var store = createStore(
    combineReducers(Reducer),
    applyMiddleware(thunk)
);

export default store;