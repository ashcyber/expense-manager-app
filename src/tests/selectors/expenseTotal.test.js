import expenseTotal from '../../redux/selectors/expenseTotal'; 
import expenses from '../fixtures/expense'; 

test('should return 0 if no expenses', () => {
    expect(expenseTotal([])).toBe(0); 
})

test('should return the current amount if passed expenses', () => {
    const res = expenseTotal(expenses); 
    expect(expenseTotal(expenses)).toBe(4500)
})