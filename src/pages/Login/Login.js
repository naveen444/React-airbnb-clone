import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import './Login.css';
import SignUp from './SignUp';
import axios from 'axios';

class Login extends Component{

    state = {
        email: "",
        password: ""
    }

    changeEmail = (e) => {
        this.setState({email: e.target.value})
    }

    changePassword = (e) => {
        this.setState({password: e.target.value})
    }

    submitLogin = (e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
    }

    render(){
        return(
            <div className="login-form">
                <form onSubmit={this.submitLogin}>
                    <button className="facebook-login">Connect With Facebook</button>
                    <button className="google-login">Connect With Google</button>
                    <div className="login-or center">
                        <span>or</span>
                        <div className="or-divider"></div>
                    </div>
                    <input type="text" onChange={this.changeEmail} className="browser-default" placeholder="Email address" />
                    <input type="password" onChange={this.changePassword} className="browser-default" placeholder="Password" />
                    <button type='submit' className="sign-up-button">Login</button>
                    <div className="divider"></div>
                    <div>Don't have an account? <span className='pointer' onClick={()=>{this.props.openModal('open',<SignUp />)}}>Sign up</span></div>
                </form>
            </div>
        )
    }

}

function mapDispatchToProps(dispatcher) {
    return bindActionCreators({
        openModal: openModal
    },dispatcher)
}
  
export default connect(null, mapDispatchToProps)(Login);