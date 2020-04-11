import React from 'react';
import {connect} from 'react-redux'; 
import {
    startAddExpense
} from '../redux/actions/expenseActions'
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => {

    return (
        <ExpenseForm onSubmit={(values) => {
            props.dispatch(startAddExpense(values)); 
            props.history.push('/'); 
        }}/>
    )
}


export default connect()(AddExpensePage); 