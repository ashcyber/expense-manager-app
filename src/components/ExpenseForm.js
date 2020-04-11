import React from 'react';
import moment from 'moment'; 
import 'react-dates/initialize'; 
import { SingleDatePicker } from 'react-dates'; 

const now = moment(); 
export class ExpenseForm extends React.Component {
    constructor(props){ 
        super()
        this.state = {
            description: props.expense ? props.expense.description : '', 
            amount: props.expense ? props.expense.amount : 0, 
            note: props.expense ? props.expense.note : '', 
            createdAt: props.expense ? moment(props.expense.createdAt): now,
            focused: false
        }; 
    }

    handleChange = (e) => {
        let {name, value} = e.target;
        this.setState(() => ({
            ...this.state,
            [name]: value
        }))
    }

    handleAddExpense = (e) => {
        e.preventDefault(); 
        let isValid = true; 
        Object.keys(this.state).map((key) => {
            if((typeof this.state[key] === 'number' && this.state[key] === 0) || (this.state[key] === ''))
                isValid = false
        }); 

        if(isValid) { 

            let values = {
                description: this.state.description,
                amount: this.state.amount, 
                note: this.state.note, 
                createdAt: this.state.createdAt.valueOf()
            }

            if(this.props.expense) {
                this.props.onSubmit(this.props.expense.id, values)
            }else{
                this.props.onSubmit(values); 
            }
        }
    }

    handleDateChange = (date) => {
        this.setState(() => ({
            ...this.state,
            createdAt: date
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleAddExpense(e)}>
                    <input
                        type="text"
                        placeholder="Description"
                        name="description"
                        autoFocus
                        value={this.state.description}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <input
                        type="number"
                        placeholder="Amount"
                        name="amount"
                        value={this.state.amount}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.handleDateChange}
                        focused={this.state.focused} 
                        onFocusChange={({ focused }) => this.setState({ focused })}
                        displayFormat={"DD/MM/YYYY"}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        onChange={(e) => this.handleChange(e)}
                        value={this.state.note}
                        name="note"
                    >
                    </textarea>
                    <button type="submit">Save Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm; 