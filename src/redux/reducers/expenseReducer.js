import {
    ADD_EXPENSE, 
    REMOVE_EXPENSE, 
    EDIT_EXPENSE
}  from '../actions/types'

const expensesReducerDefaultState = []; 
const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) { 
        case ADD_EXPENSE:
          return [
              ...state, 
              action.expense
          ]
        case REMOVE_EXPENSE: 
          return state.filter((val) => val.id !== action.id)
        
        case EDIT_EXPENSE: 
          return state.map((expense) => {
              if(expense.id === action.id) { 
                  return {
                      ...expense, 
                      ...action.updates 
                  }
              }
              return expense
          }); 
          case 'SET_EXPENSES' : 
            return action.expenses;
             
        default: 
            return state 
    }
}

export default expenseReducer; 