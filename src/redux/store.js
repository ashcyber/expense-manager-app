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

import {createStore} from 'redux'; 
import rootReducer from './reducers/rootReducer'; 

export default createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);