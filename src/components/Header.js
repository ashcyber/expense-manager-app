import React from 'react'; 
import { NavLink, Link } from 'react-router-dom';
import {connect} from 'react-redux'; 
import {startLogout}  from '../redux/actions/auth'; 

const Header = ({startLogout}) => (
    <header className="header-nav">
        <Link to="/dashboard" style={{textDecoration: "none"}}><h1 className="header__title">Expense Manager App</h1></Link>
        {/* <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink> */}
        <button onClick={startLogout}>Logout</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({ 
    startLogout: dispatch(startLogout)
})

export default connect(undefined, mapDispatchToProps)(Header); 