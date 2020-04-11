import {
    startAddExpense, 
    addExpense, 
    editExpense, 
    removeExpense,  
    setExpenses
}
from '../../redux/actions/expenseActions'; 
import expenses from '../fixtures/expense'; 
import thunk from 'redux-thunk'; 
import configureStore from 'redux-mock-store'; 
import database from '../../firebase/firebase'; 

const createMockStore = configureStore([thunk]); 

test('should setup remove expense action', () => {
    const action = removeExpense('123abc'); 
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE', 
        id: '123abc'
    })
})


test('should setup edit expense action', () => {
    const action = editExpense('123abc', {
        description: 'some description', 
        note: 'some note', 
        amount: 200, 
        createdAt : 'some date'
    }); 
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'some description', 
            note: 'some note', 
            amount: 200, 
            createdAt : 'some date'
        }
    })
})

test('should setup add action object with provided value', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000, 
        createdAt: 200000, 
        note: 'Some note'
    }


    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            ...expenseData
        }
    }) 
})

test('should setup add action object with default values', () => {
    const action = addExpense({}); 

    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {}
    })
})


test('should setup setExpenses action object', () => { 
    const action = setExpenses(expenses); 
    expect(action).toEqual({
        type: 'SET_EXPENSES', 
        expenses
    })
})


// test('should add expense to database and store', (done) => {
//     const store = createMockStore({}); 
//     const expenseData = {
//         description: 'bill', 
//         amount: 1000, 
//         note: 'This one is a value', 
//         createdAt: 1000 
//     }
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         const actions = store.getActions(); 
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE', 
//             expense: {
//                 id: expect.any(String), 
//                 ...expenseData
//             }
//         })
//     })
// })
