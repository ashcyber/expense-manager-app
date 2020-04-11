/**
 * Store: takes in a single reducer 
 * parameter 
 * 
 * Reducers: pure functions that take 
 * in two parameters action state and action 
 * It returns a state if there is action.type 
 * else returns a default state 
 *  
 * Action: The dispatch action goes into the 
 * particular reducer where the change of state is 
 * controlled. 
 */

import {createStore, applyMiddleware, compose} from 'redux'; 
import rootReducer from './reducers/rootReducer'; 
import thunk from 'redux-thunk'; 
 
let middleware = [thunk]

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f 
    )
);  