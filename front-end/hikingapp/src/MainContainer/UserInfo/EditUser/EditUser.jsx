import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
        }
    }
    handleChange = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("here is this.props in handleSubmit() in EditUser right before we call udpateUser()");
        console.log(this.props)
        this.props.toggleHidden()
        this.props.updateUser(this.props.currentUser.id, this.state)
    }
    render(){
        return (
            <div className = 'editInfo'>
                 {!this.props.isHidden}
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="location" placeholder = {this.props.currentUser.location}/>
                    <button type = 'submit'>UPDATE HOMEBASE</button>
                </form>
            </div>
        )
    }
}

export default EditUser;