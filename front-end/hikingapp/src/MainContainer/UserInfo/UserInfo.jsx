import React, { Component } from 'react';
import EditUser from './EditUser/EditUser';

class UserInfo extends Component {
    constructor(props){
        super(props);
    }
    // getUser = async() => {
    //     const user = await fetch(`http://localhost:9000/users`);
    //     const userJSON = await user.json();

    // }
    // deleteUser = async(id) => {
    //     console.log('DELETING USER', id)
    //     const deletedUser = await fetch (`http://localhost:9000/users/${id}`, {
    //         method: 'DELETE'
    //     })
    //     if(deletedUser.status === 200){
    //         this.setState({
    //             currentUser: null,
    //             logged: false
    //         })
    //     }
    // }
    
    render(){
        return (
            <div>
            <h1>USER INFO: {this.props.currentUser.username}</h1>
            <p>{this.props.currentUser.location}</p>
            <EditUser currentUser = {this.props.currentUser} updateUser = {this.props.updateUser}/>
            <button onClick = {this.props.deleteUser}>Delete Profile</button>
            </div>
        )
    }
}

export default UserInfo;








