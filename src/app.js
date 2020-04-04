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
import ExpenseDashboardPage from './components/ExpenseDashboardPage';
import AddExpensePage from './components/AddExpensePage';
import EditExpensePage from './components/EditExpensePage';
import HelpPage from './components/HelpPage';
import NotFoundPage from './components/NotFoundPage';


const Header = () => (
    <header>
        <h1>Expense Manager App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" exact={true}>Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink>

    </header>
)

const Main = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage} exact={true}/>
                <Route path="/edit" component={EditExpensePage} exact={true}/>
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<Main />, document.getElementById('root')); 