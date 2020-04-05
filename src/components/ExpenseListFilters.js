import React from 'react'; 
import {connect} from 'react-redux'; 
import {
    setTextFilter, 
    sortByDate, 
    sortByAmount
} from '../redux/actions/filterActions'

const ExpenseListFilters = (props) => {

    const handleTextChange = (e) => {
        props.dispatch(setTextFilter(e.target.value))
    }

    const handleSortByChange = (e) => {
        let val = e.target.value; 
        if(val === 'date'){
            props.dispatch(sortByDate())
        }
        else if(val === 'amount') {
            props.dispatch(sortByAmount()) 
        }
    }

    return (
        <div>
            <input type="text" 
                value={props.filters.text} 
                onChange={e => handleTextChange(e)}
            />
            <select onChange={(e) => handleSortByChange(e)}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => ({
    filters: state.filters 
})

export default connect(mapStateToProps)(ExpenseListFilters); 