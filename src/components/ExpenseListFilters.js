import React from 'react'; 
import {connect} from 'react-redux'; 
import {
    setTextFilter, 
    sortByDate, 
    sortByAmount, 
    setStartDate, 
    setEndDate
} from '../redux/actions/filterActions'
import {DateRangePicker} from 'react-dates'
import moment from 'moment';

class ExpenseListFilters extends React.Component {
    state = {
        startDate: moment().startOf('month'), 
        endDate: moment().endOf('month'), 
        focusedInput: null
    }

    handleTextChange = (e) => {
        this.props.dispatch(setTextFilter(e.target.value))
    }

    handleSortByChange = (e) => {
        let val = e.target.value; 
        if(val === 'date'){
            this.props.dispatch(sortByDate())
        }
        else if(val === 'amount') {
            this.props.dispatch(sortByAmount()) 
        }
    }

    handleDateChange = (startDate, endDate) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate)); 
    }

    render() {
        return (
            <div>
                <input type="text" 
                    value={this.props.filters.text} 
                    onChange={e => this.handleTextChange(e)}
                />
                <select onChange={(e) => this.handleSortByChange(e)}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="id_startDate" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="id_endDate" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.handleDateChange(startDate, endDate)} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}


const mapStateToProps = state => ({
    filters: state.filters 
})

export default connect(mapStateToProps)(ExpenseListFilters); 