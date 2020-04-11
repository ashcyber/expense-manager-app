import React from 'react';
import {connect} from 'react-redux';  
import {
    startRemoveExpense
} from '../redux/actions/expenseActions'
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral'; 

const ExpenseListItem = (props) =>{
   
    const handleRemove = () => {  
        props.dispatch(startRemoveExpense(props.id)); 
    }

    return (
        <div className="expense-item">
            <h3>{props.description}</h3>
            <p>{numeral(props.amount).format('$0,0.00')} - {moment(props.createdAt).format("Do MMM YYYY") }</p>
            <Link to={`/edit/${props.id}`}>
                <button className="edit-btn">Edit</button>
            </Link>
            <button onClick={() => handleRemove()} className="remove-btn">Remove</button>
            
        </div>
    )
}

export default connect()(ExpenseListItem); 