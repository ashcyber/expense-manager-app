import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route, 
    Switch,
    NavLink, 
} from 'react-router-dom'; 
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 

import Header from './components/Header'; 
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import HelpPage from './components/HelpPage';
import NotFoundPage from './components/NotFoundPage';

const Main = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} exact={true}/>
                <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Main />, document.getElementById('root')); 