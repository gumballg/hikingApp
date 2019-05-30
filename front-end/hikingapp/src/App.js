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
  // componentDidMount(){
  //   this.checkForUser();
  // }
  checkForUser = async () => {
    console.log('checkForUser called');
    const currentUser = await fetch('http://localhost:8080/users/current', {
      credentials: 'include'
    })
    const parsedResponse = await currentUser.json();
    if(currentUser.status === 200){
      this.setState({
        loggedIn: true,
        currentUser: parsedResponse
      })
    }
  }

  handleLogin = async (formData) => {
    console.log(formData);
    try{
      const loginResponse = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedLoginResponse = await loginResponse.json();
      if(loginResponse.status === 200){
        this.checkForUser()
      } else {
        console.log('Check yoself')
      }
    }catch(err){
      console.log(err);
    }
  }
  
  handleRegister = async (formData) => {
    console.log(formData);
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify(formData),
      credentials: 'include',
      headers: {
        'Content-Type':  'application/json'
      }
    })
    const parsedResponse = await response.json();
    console.log('parsedResponse');
    console.log(parsedResponse);
    if(response.status === 200){
      this.setState({
        loggedIn: true,
        currentUser: parsedResponse
      })
    }
  }
  updateUser = async (id, user) => {
    console.log('UPDATE CLICKED')
    const response = await fetch(`http://localhost:8080/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        credentials: 'include',
        headers: {
            "Content-Type": "application/json"
        }
    })
    console.log('MADE IT PAST RESPONSE')
    console.log(response);
    const updatedUser = await response.json();
    console.log('updatedUser');
    console.log(updatedUser);
    console.log('data');
    console.log(updatedUser.data);
    if(response.status === 200){
        console.log('GOOD JOB!!!!!')
        this.setState({
            currentUser: updatedUser
        })
    }

  }
  deleteUser = async(id) => {
    if(this.state.currentUser !== null){
      console.log(`DELETING USER ${this.state.currentUser.id}`)
      const deletedUser = await fetch(`http://localhost:8080/users/${this.state.currentUser.id}`, {
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
       <MainContainer loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} updateUser={this.updateUser} deleteUser={this.deleteUser}/>
       :
       <AuthPage handleLogin={this.handleLogin} handleRegister={this.handleRegister}/>
      }
      </div>
    );
  }
}

export default App;
