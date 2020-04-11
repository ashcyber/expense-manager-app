import React from 'react'; 
import {connect} from 'react-redux'; 
import {startLogin} from '../redux/actions/auth';

class Login extends React.Component { 
    render() { 
        return (
            <button onClick={this.props.startLogin}>Login</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})


export default connect(undefined, mapDispatchToProps)(Login); 