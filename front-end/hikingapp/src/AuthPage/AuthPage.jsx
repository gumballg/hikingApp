import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import AuthHeader from './AuthHeader/AuthHeader';

class AuthPage extends Component {
    constructor(props){
      super(props);
      this.state = {
        isHidden: true
      }
    }
    toggleHidden(){
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render(){
        console.log(this.props, 'IS ON AUTH PAGE')
      return (
        <div className="AuthPage">
          <div>
            <AuthHeader/>
          </div>
          <div>
            <h1>LOGIN TO HIKE ON</h1>
            <button onClick = {this.toggleHidden.bind(this)}>
              NEW? SIGN UP FOR FREE!
            </button>
            {!this.state.isHidden && <RegistrationForm handleRegister = {this.props.handleRegister}/>}
          </div>
          <div>
            <div>
              {this.state.isHidden && <LoginForm handleLogin = {this.props.handleLogin}/>}
            </div>
  
          </div>
        </div>
      );
    }
  }
  export default AuthPage