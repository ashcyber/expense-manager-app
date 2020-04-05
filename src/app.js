import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux'; 
import Main from './components/Main'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
// import {
//     addExpense, 
//     editExpense, 
//     removeExpense
// } from './redux/actions/expenseActions'
// import {
//     setEndDate, 
//     setStartDate, 
//     setTextFilter, 
//     sortByAmount, 
//     sortByDate 
// } from './redux/actions/filterActions'; 
// import expenseSelector from './redux/selectors/expenseSelector'

const App = (
    <Provider store={store}>
        <Main/>
    </Provider>
)


ReactDOM.render(<App />, document.getElementById('root')); 