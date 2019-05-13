import React, {Component} from 'react';

class UserInput extends Component {
    constructor(){
        super();
        this.state = {
            city: '',
            state: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.findGeoCode(this.state)
    }
    render(){
        console.log(this.state)
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    City: <input onChange = {this.handleChange} type = "text" name = "city"/>
                    State: <input onChange = {this.handleChange} type = "text" name = "state"/>
                    <input type = "submit"/>
                </form>
            </div>
        )
    }
}


export default UserInput
;