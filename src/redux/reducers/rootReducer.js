import {combineReducers} from 'redux'; 
import expenseReducer from './expenseReducer'; 
import filtersReducer from './filterReducer'; 
import authReducer from './authReducer'; 

export default combineReducers({
    expenses: expenseReducer, 
    filters: filtersReducer, 
    auth: authReducer 
})