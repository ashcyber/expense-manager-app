import {combineReducers} from 'redux'; 
import expenseReducer from './expenseReducer'; 
import filtersReducer from './filterReducer'; 

export default combineReducers({
    expenses: expenseReducer, 
    filters: filtersReducer
})