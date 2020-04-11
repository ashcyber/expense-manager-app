import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux'; 
import Main from './components/Main'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './redux/actions/expenseActions'
const App = () => (

    <Provider store={store}>
        <Main/>
    </Provider>
)
console.log(store.dispatch(startSetExpenses()))
ReactDOM.render(<App />, document.getElementById('root')); 