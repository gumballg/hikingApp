import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'

class AuthPage extends Component {
    constructor(props){
      super(props);
    }
    render(){
        console.log(this.props, 'IS ON AUTH PAGE')
      return (
        <div className="AuthPage">
         <LoginForm handleLogin = {this.props.handleLogin}/>
         <RegistrationForm handleRegister = {this.props.handleRegister}/>
        </div>
      );
    }
  }
  export default AuthPage