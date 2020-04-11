import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import {Provider} from 'react-redux'; 
import Main, { history } from './components/Main'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { startSetExpenses } from './redux/actions/expenseActions'
import {login, logout} from './redux/actions/auth'
import { firebase } from './firebase/firebase'

const App = () => (
    <Provider store={store}>
        <Main/>
    </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('root')); 

let hasRendered = false; 
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(<App />, document.getElementById('root')); 
        hasRendered = true; 
    }
}

firebase.auth().onAuthStateChanged((user) => {
    if(user) { 
        store.dispatch(login(user.uid)); 
        store.dispatch(startSetExpenses()).then((user) => {
            renderApp(); 
            if(history.location.pathname === '/'){
                history.push('/dashboard')
            }
        })
    }
    else {
        store.dispatch(logout()); 
        renderApp(); 
        history.push('/'); 
    }
})