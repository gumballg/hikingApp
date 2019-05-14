import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: ''
        }
    }
    handleChange = (e) => {
        console.log('ALSKDJAS')
        console.log(this.state, 'THIS IS THE STATE ON THE EDIT USER')
        console.log(this.props.currentUser, 'THIS IS CURRENT USER ON THE EDIT USER');
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        // console.log(this.props.currentUser._id);
        // console.log(this.state);
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