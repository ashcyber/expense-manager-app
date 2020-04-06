import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux'; 
import Main from './components/Main'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {
    addExpense, 
    editExpense, 
    removeExpense
} from './redux/actions/expenseActions'

import {
    setEndDate, 
    setStartDate, 
    setTextFilter, 
    sortByAmount, 
    sortByDate 
} from './redux/actions/filterActions'; 
import expenseSelector from './redux/selectors/expenseSelector'

const App = () => (

    <Provider store={store}>
        <Main/>
    </Provider>
)

store.dispatch(addExpense({description: 'Rent', note: 'pay_now', amount: 500, createdAt: 10000}))
store.dispatch(addExpense({description: 'Water Bill', note: 'pay_now', amount: 500, createdAt: 10000})); 
store.dispatch(addExpense({description: 'Tuition', note: 'pay_now', amount: 1000, createdAt: 10000})); 

ReactDOM.render(<App />, document.getElementById('root')); 