import React from 'react'; 
import {connect} from 'react-redux'; 
import expenseSelector from '../redux/selectors/expenseSelector'
import ExpenseListItem from './ExpenseListItem';


const ExpenseList  = (props) => (
    <div>
        <h2>Expense List</h2>

        {props.expenses.map((expense, idx) => (
            <ExpenseListItem {...expense} key={`${idx}-expense`}/>
        ))}


    </div>
); 


const mapStateToProps = state => ({
    expenses: expenseSelector(state.expenses, state.filters)
})

export default connect(mapStateToProps, {})(ExpenseList); 