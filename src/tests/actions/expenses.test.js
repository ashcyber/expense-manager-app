import {
    addExpense, 
    editExpense, 
    removeExpense 
}
from '../../redux/actions/expenseActions'; 

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
            id: expect.any(String), 
            ...expenseData
        }
    }) 
})


test('should setup add action object with default values', () => {
    const action = addExpense({}); 

    expect(action).toEqual({
        type: 'ADD_EXPENSE', 
        expense: {
            id: expect.any(String),
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })

})
