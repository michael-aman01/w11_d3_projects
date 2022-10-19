import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import produceReducer from './produce';

const rootReducer = combineReducers({
    produce: produceReducer
})

let enhancer; 

if(process.env.NODE_ENV !== "production"){
    const logger = require("redux-logger").default;
    const composeEnhancers = 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preLoadedState) => {
    return createStore(rootReducer, preLoadedState, enhancer)
}

export default configureStore;