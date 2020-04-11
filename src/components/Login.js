import React from 'react'; 
import {connect} from 'react-redux'; 
import {startLogin} from '../redux/actions/auth';

class Login extends React.Component { 
    render() { 
        return (
            <div className="box-layout">
                <div className="box-login">
                    <h2 className="main-text">Expense Manager React App</h2>
                    <p className="sub-text">Record and Analyse your daily expenses with this cool React App</p>
                    <button onClick={this.props.startLogin} className="btn-login">Login</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined, mapDispatchToProps)(Login); 