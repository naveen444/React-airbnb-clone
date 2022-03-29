import React, { Component } from "react";
import './NavBar.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import logOutAction from "../../actions/logOutAction";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/Login/SignUp";

class NavBar extends Component {

	componentDidUpdate(oldProps) {
		if (oldProps.auth.token != this.props.auth.token) {
			this.props.openModal('closed', '');
		}
	}

  render() {

    let navColor = 'transparent'
    if (this.props.location.pathname !== '/') {
        //   user is on the home page
        navColor = 'black'
    }

    return (
    <div className="container-fluid nav">
        <div className="row">
            <nav className={navColor}>
                <div className="nav-wrapper">
                    <Link to = "/" className="logo left">Airbnb</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/">English (US)</Link></li>
                        <li><Link to="/">$ USD</Link></li>
                        <li><Link to="/">Become a host</Link></li>
                        <li><Link to="/">Help</Link></li>
                        {this.props.auth.email
							? 	<>
									<li>Hello, {this.props.auth.email}</li>
									<li onClick={() => this.props.logOutAction()}>Logout</li>
								</>
							: 	<>
								
									<li className="p-10" onClick={()=>{this.props.openModal('open',<SignUp />)}}>Sign Up</li>
									<li className="p-10" onClick={()=>{this.props.openModal('open',<Login />)}}>Log In</li>

								</>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
      auth: state.auth
  }
}

function mapDispatchToProps(dispatcher) {
  return bindActionCreators({
    openModal: openModal,
	logOutAction: logOutAction,
  },dispatcher)
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);