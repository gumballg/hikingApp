import React, { Component } from 'react';
import EditUser from './EditUser/EditUser';

class UserInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isHidden: false,
        }
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
          })
    }
    handleClick(){
        this.setState(function(prevState){
            return {isToggleOn: !prevState.isToggleOn}
        });
    }
    render(){
        return (
            <div>
            <p>{this.props.currentUser.username}</p>
            <p>{!this.state.isHidden && this.props.currentUser.location}</p>
            <button onClick = {this.toggleHidden.bind(this)}>
                Edit Homebase!
            </button>
                {this.state.isHidden && <EditUser  currentUser = {this.props.currentUser} updateUser = {this.props.updateUser}/>}
                <br/>
            <button onClick = {this.props.deleteUser}>Delete Account</button>
            </div>
        )
    }
}

export default UserInfo;








