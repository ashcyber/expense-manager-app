import React from 'react';
import {
    BrowserRouter as Router,
    Route, 
    Switch,
} from 'react-router-dom'; 
import Header from './Header'; 
import ExpenseDashboardPage from './ExpenseDashboardPage';
import AddExpensePage from './AddExpensePage';
import EditExpensePage from './EditExpensePage';
import HelpPage from './HelpPage';
import NotFoundPage from './NotFoundPage';

const Main = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} exact={true}/>
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

export default Main; 