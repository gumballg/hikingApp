import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                Username: <input onChange = {this.handleChange} value = {this.state.username} type = "text" name = "username"/>
                Password: <input onChange = {this.handleChange} value = {this.state.password} type = "password" name = "password"/>
                <input type = "submit"/>
            </form>
        )
        }
}


export default LoginForm;