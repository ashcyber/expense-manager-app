import React from 'react'; 
import {connect} from 'react-redux'; 
import {startEditExpense} from '../redux/actions/expenseActions'
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm expense={props.expense} onSubmit={(id,values) => {
                props.dispatch(startEditExpense(id, values)); 
                props.history.push('/'); 
            }}/>
            
        </div>
        
    )
    
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage); 