import moment from 'moment'; 
import expenseSelector from '../../redux/selectors/expenseSelector'; 
import expenses from '../fixtures/expense'; 

test ('should filter by text value', () => {
    const filters = {
        text: 'j', 
        sortBy: 'date', 
        startDate: undefined, 
        endDate: undefined
    }

    const result = expenseSelector(expenses, filters)
    expect(result).toEqual([expenses[2]]); 

})



test('should filter by startDate', () => {
    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: moment(0), 
        endDate: undefined
    }

    const result = expenseSelector(expenses, filters); 
    expect(result).toEqual([expenses[2], expenses[0]])
})


test('should filter by endDate', () => {
    const filters = {
        text: '', 
        sortBy: 'date', 
        startDate: undefined, 
        endDate: moment(0).add(20,'days')
    }

    const result = expenseSelector(expenses, filters); 
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('should sort by amount', () => {
    const filters = {
        text: '', 
        sortBy: 'amount', 
        startDate: undefined, 
        endDate: undefined
    }
    const result = expenseSelector(expenses, filters); 
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])

})