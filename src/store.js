import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { rootReducer } from './redux/reducers/rootReducer';
import thunk from 'redux-thunk';
import { compose } from 'redux';

const middleware = applyMiddleware(thunk)

const store = legacy_createStore(
    rootReducer, middleware)
    
export default store;