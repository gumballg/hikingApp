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
            <div className = 'mainPage'>
                <div className = 'mainHeader'>
                    <Header currentUser = {this.props.currentUser}/>
                </div>
                <div className = 'mainInfo'>
                    <TrailInfo/>
                </div>
                <div className = 'userInfo'>
                    <UserInfo loggedIn = {this.props.loggedIn} currentUser = {this.props.currentUser} updateUser = {this.props.updateUser} deleteUser = {this.props.deleteUser}/>
                </div>
            </div>
        )
    }
}

export default MainContainer;