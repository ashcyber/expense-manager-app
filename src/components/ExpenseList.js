import React from 'react'; 
import {connect} from 'react-redux'; 
import expenseSelector from '../redux/selectors/expenseSelector'
import ExpenseListItem from './ExpenseListItem';


export const ExpenseList  = (props) => (
    <div className="expense-list-box">
        <h2 className="expense-list-header">Expense List</h2>

        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense, idx) => (
                    <ExpenseListItem {...expense} key={`${idx}-expense`}/>
                ))
            )
        }



    </div>
); 


const mapStateToProps = state => ({
    expenses: expenseSelector(state.expenses, state.filters)
})

export default connect(mapStateToProps, {})(ExpenseList); 