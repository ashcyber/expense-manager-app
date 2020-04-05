import React from 'react';
import {connect} from 'react-redux'; 
import {
    addExpense
} from '../redux/actions/expenseActions'
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => {

    return (
        <ExpenseForm onSubmit={(values) => {
            props.dispatch(addExpense(values)); 
            props.history.push('/'); 
        }}/>
    )
}

export default connect()(AddExpensePage); 