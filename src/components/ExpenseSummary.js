import React from 'react'; 
import {connect} from 'react-redux'; 
import numeral from 'numeral'; 
import expenseSelector from '../redux/selectors/expenseSelector'; 
import expensesTotal from '../redux/selectors/expenseTotal'; 

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'; 
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00'); 
    return (
        <div>
            <h1>{`Viewing ${expenseCount} ${expenseWord} totalling ${formattedExpensesTotal}`}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = expenseSelector(state.expenses, state.filters); 

    return {
        expenseCount: visibleExpenses.length, 
        expensesTotal: expensesTotal(visibleExpenses)
    };
}; 

export default connect(mapStateToProps)(ExpensesSummary); 