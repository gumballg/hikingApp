import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
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
      console.log(parsedLoginResponse, 'LOGIN HANDLED');
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
  updateUser = async (id, user) => {
    console.log('UPDATE CLICKED')
    const response = await fetch(`http://localhost:9000/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log('MADE IT PAST RESPONSE')
    const updatedUser = await response.json();
    console.log(updatedUser);
    if(response.status === 200){
        console.log('GOOD JOB!!!!!')
        this.setState({
            currentUser: updatedUser.data
        })
    }

  }
  deleteUser = async(id) => {
    if(this.state.currentUser !== null){
      console.log(`DELETING USER ${this.state.currentUser._id}`)
      const deletedUser = await fetch(`http://localhost:9000/users/${this.state.currentUser._id}`, {
        method: 'DELETE'
      })
      if(deletedUser.status === 200){
        this.setState({
          loggedIn: false,
          currentUser: null
        })
      }
    }
  } 
  render(){
    console.log(this.state)
    return (
      <div className="App">
       {this.state.loggedIn ?
       <MainContainer loggedIn = {this.state.loggedIn} currentUser = {this.state.currentUser} updateUser = {this.updateUser} deleteUser = {this.deleteUser}/>
       :
       <AuthPage handleLogin = {this.handleLogin} handleRegister = {this.handleRegister}/>
      }
      </div>
    );
  }
}

export default App;
