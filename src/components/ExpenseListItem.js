import React from 'react';
import {connect} from 'react-redux';  
import {
    removeExpense
} from '../redux/actions/expenseActions'
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) =>{
   
    const handleRemove = () => {  
        props.dispatch(removeExpense(props.id)); 
    }

    return (
        <div>
            <Link to={`/edit/${props.id}`}>
                <h3>{props.description}</h3>
            </Link>           
            <p>{props.amount} - {props.createdAt}</p>
            <button onClick={() => handleRemove()}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem); 