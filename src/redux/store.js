import {createStore} from 'redux'; 
import rootReducer from './reducers/rootReducer'; 
import {getVisibleExpenses} from './selectors/expenseSelector'; 

import {
    addExpense
} from './actions/expenseActions'; 

import {
    setTextFilter, 
    sortByDate
} from './actions/filterActions'

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

const store = createStore(rootReducer); 
store.subscribe(() => {
    console.log(store.getState()); 
    const state = store.getState(); 
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses); 
})


const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 500, createdAt: 10000}))
// const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -10000})); 

// store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 1000, description: 'ETS'}))

// store.dispatch(setTextFilter('e')); 
// store.dispatch(setTextFilter()); 

// store.dispatch(sortByAmount()); 
// store.dispatch(sortByDate()); 

// store.dispatch(setStartDate(123))
// store.dispatch(setStartDate()); 

