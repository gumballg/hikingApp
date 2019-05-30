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
            <div className = 'loginFormComponent'>
                <form onSubmit = {this.handleSubmit} className = "stackedForm">
                    <div>
                        <input onChange = {this.handleChange} value = {this.state.username} className = "formInput" placeholder = 'USERNAME' type = "text" name = "username"/>
                    </div>
                    <div>
                        <input onChange = {this.handleChange} value = {this.state.password} className = "formInput" placeholder = 'PASSWORD' type = "password" name = "password"/>
                    </div>
                    <div>
                        <button type = "submit" className = "loginSubmit">LOGIN</button>
                    </div>
                </form>
            </div>
        )
        }
}


export default LoginForm;