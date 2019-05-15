import React, { Component } from 'react';
import EditUser from './EditUser/EditUser';

class UserInfo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            <h1>USER INFO: {this.props.currentUser.username}</h1>
            <p>{this.props.currentUser.location}</p>
            <EditUser currentUser = {this.props.currentUser} updateUser = {this.props.updateUser}/>
            <button onClick = {this.props.deleteUser}>Delete Accout</button>
            </div>
        )
    }
}

export default UserInfo;








