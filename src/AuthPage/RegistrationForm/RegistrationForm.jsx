import React, {Component} from 'react';

class RegistrationForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            location: "",
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
                    <div>
                        <input onChange={this.handleChange} className = "formInput" type="text" placeholder = 'USERNAME 'name="username"/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} className = "formInput" placeholder = 'PASSWORD' type="password" name="password"/>
                    </div>
                    <div>
                        <input onChange={this.handleChange} className = "formInput" placeholder = 'HOMEBASE' type="text" name="location"/>
                    </div>
                    <div>
                        <button type="submit" value="Register" className = "loginSubmit">REGISTER</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default RegistrationForm