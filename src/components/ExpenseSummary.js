import React from 'react'; 
import {connect} from 'react-redux'; 
import numeral from 'numeral'; 
import expenseSelector from '../redux/selectors/expenseSelector'; 
import expensesTotal from '../redux/selectors/expenseTotal'; 
import { Link } from 'react-router-dom';

const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'; 
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00'); 
    return (
        <div className="summary-box">
            <p>
                Viewing<span> {expenseCount} </span> 
                {expenseWord} totalling <span> { formattedExpensesTotal }</span>
            </p>
            <Link to="/create"><button className="add-btn">Add Expense</button></Link>
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