import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import openModal from '../../actions/openModal';
import './Login.css';
import SignUp from './SignUp';
import axios from 'axios';
import regAction from '../../actions/regAction';
import swal from 'sweetalert';

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

    submitLogin = async(e) => {
        e.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);

		// make an axios request to /users/login

		const url = `${window.apiHost}/users/login`;
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const resp = await axios.post(url,data);
        const token = resp.data.token;

		// handle:
			// -- badPass
			// -- noEmail
			// -- loggedIn
				// -- run regAction and pass it resp.data
		
		if(resp.data.msg === "noEmail"){
			swal({
				title: "Please provide an email",
				icon: "error",
			})
		}else if(resp.data.msg === "badPass"){
			swal({
				title: "Invalid email/password",
				text: "We don't have a match for that user name and password.",
				icon: "error",
			})
		}else if(resp.data.msg === "loggedIn"){
			swal({
				title: "Success!",
				icon: "success",
			});
			// we call our register action to update our auth reducer!!
			this.props.regAction(resp.data);
		}
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
        openModal: openModal,
		regAction: regAction
    },dispatcher)
}
  
export default connect(null, mapDispatchToProps)(Login);