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
        <div>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>           
            <p>{numeral(props.amount).format('$0,0.00')} - {moment(props.createdAt).format("Do MMM YYYY") }</p>
            <button onClick={() => handleRemove()}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem); 