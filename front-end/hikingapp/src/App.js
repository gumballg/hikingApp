import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import LoginForm from './AuthPage/LoginForm/LoginForm'
// import RegistrationForm from './AuthPage/RegistrationForm/RegistrationForm'
import AuthPage from './AuthPage/AuthPage'
import MainContainer from './MainContainer/MainContainer';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      currentUser: null
    }
  }
  componentDidMount(){
    this.checkForUser();
  }
  checkForUser = async () => {
    const currentUser = await fetch('http://localhost:9000/users/current', {
      credentials: 'include'
    })
    const parsedResponse = await currentUser.json();
    if(parsedResponse.status === 200){
      this.setState({
        loggedIn: true,
        currentUser: parsedResponse.data
      })
    }
  }
  handleLogin = async (formData) => {
    console.log(formData);
    try{
      const loginResponse = await fetch('http://localhost:9000/users/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedLoginResponse = await loginResponse.json();
      console.log(parsedLoginResponse);
      if(parsedLoginResponse.status === 200){
        this.setState({
          loggedIn: true,
          currentUser: parsedLoginResponse.data
        })
      } else {
        console.log('Check yoself')
      }
    }catch(err){
      console.log(err);
    }
  }
  handleRegister = async (formData) => {
    console.log(formData);
    const response = await fetch('http://localhost:9000/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
        'Content-Type':  'application/json'
      }
    })
    const parsedResponse = await response.json();
    console.log(parsedResponse);
    if(parsedResponse.status === 200){
      this.setState({
        loggedIn: true,
        currentUser: parsedResponse.data
      })
    }
  }
  render(){
    return (
      <div className="App">
       {this.state.loggedIn ?
       <MainContainer/>
       :
       <AuthPage handleLogin = {this.handleLogin} handleRegister = {this.handleRegister}/>
      }
      </div>
    );
  }
}

export default App;
