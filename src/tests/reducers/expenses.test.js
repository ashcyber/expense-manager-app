import expenseReducer from '../../redux/reducers/expenseReducer';
import expenses from '../fixtures/expense'; 

test('should set default state', () => {
    const state = expenseReducer(undefined, {type: '@@INIT'}); 
    expect(state).toEqual([])
})

test('should remove a value by id', () => {
    const state = expenseReducer(expenses, {type: 'REMOVE_EXPENSE', id: expenses[0].id})
    expect(state).toEqual([expenses[1],expenses[2]]); 
})

test('should note remove a value by id if not found', () => {
    const state = expenseReducer(expenses, {type: 'REMOVE_EXPENSE', id: '-1'})
    expect(state).toEqual(expenses); 
})


test('should edit a value by id', () => {
    const state = expenseReducer(expenses, 
        {type: 'EDIT_EXPENSE', 
        id: expenses[1].id, 
        updates: {'description': 'test'}}); 
    
    expect(state[1].description).toBe('test'); 
})

test('should not edit if expense not found', () => {
    const state = expenseReducer(expenses, 
        {
            type: 'EDIT_EXPENSE', 
            id: '-1', 
            updates: {
                description: 'No test'
            }
        })

    expect(state).toEqual(expenses)
})


test('should add expense', () => {
    const expenseToAdd = {
        id: '4', 
        amount: 100, 
        description: '', 
        createdAt: 0, 
        note: ''
    }

    const state = expenseReducer(expenses, {
        type: 'ADD_EXPENSE', 
        expense: expenseToAdd
    })

    expect(state[state.length - 1]).toEqual(expenseToAdd); 
})

test('should set expenses', () => { 
    const state = expenseReducer(undefined, {
        type: 'SET_EXPENSES', 
        expenses
    })

    expect(state).toEqual(expenses);  
})