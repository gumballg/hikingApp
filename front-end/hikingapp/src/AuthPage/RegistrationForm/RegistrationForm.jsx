import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            location: ""
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleRegister(this.state);
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return (
            <div>
                <form className = 'registration' onSubmit={this.handleSubmit}>
                    Username: <input onChange={this.handleChange} type="text" name="username"/>
                    <br></br>
                    Password: <input onChange={this.handleChange} type="password" name="password"/>
                    <br></br>
                    Your Homebase: <input onChange={this.handleChange} type="text" name="location"/>
                    <input type="submit" value="Register" />
                </form>
            </div>
        )
    }
}
export default RegistrationForm