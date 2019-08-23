import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
