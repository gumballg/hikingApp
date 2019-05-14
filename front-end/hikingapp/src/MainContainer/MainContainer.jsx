import React, {Component} from 'react';
import Header from './Header/Header'
import TrailInfo from './TrailInfo/TrailInfo';
import UserInfo from './UserInfo/UserInfo';

class MainContainer extends Component {
    constructor(){
        super();
    }
    render(){
        console.log(`${this.props.currentUser.username} THIS IS CURRENT USER ON THE MAIN CONTAINER`)
        return (
            <div>
                <Header currentUser = {this.props.currentUser}/>
                <TrailInfo/>
                <UserInfo loggedIn = {this.props.loggedIn} currentUser = {this.props.currentUser} updateUser = {this.props.updateUser} deleteUser = {this.props.deleteUser}/>
            </div>
        )
    }
}

export default MainContainer;