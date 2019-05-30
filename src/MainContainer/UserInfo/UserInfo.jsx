import React, { Component } from 'react';
import EditUser from './EditUser/EditUser';
import UserTrails from './UserTrails/UserTrails'

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
        console.log("props");
        console.log(this.props);
        return (
            <div class = 'allUserInfo'>
                {this.state.isHidden ? 
                <EditUser  toggleHidden={this.toggleHidden.bind(this)} currentUser = {this.props.currentUser} updateUser = {this.props.updateUser}/>
                :
                <div class = 'userButtons' >
                    <p>{this.props.currentUser.user.username} <span class = 'heart'></span><span>'s  </span> {!this.state.isHidden && this.props.currentUser.user.location}</p>
                    <button onClick = {this.toggleHidden.bind(this)}>
                        Edit Homebase!
                    </button>
                    <button onClick = {this.props.deleteUser}>Delete Account</button>
                </div>
                }
                <UserTrails currentUser = {this.props.currentUser} />
            </div>
        )
    }
}

export default UserInfo;








