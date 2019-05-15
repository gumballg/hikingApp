import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: ''
        }
    }
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateUser(this.props.currentUser._id, this.state)
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                Location: <input onChange={this.handleChange} type="text" name="location"/>
                <input type="submit"/>
            </form>
        )
    }
}

export default EditUser;