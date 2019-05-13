import React, {Component} from 'react';
import Header from './Header/Header'
import SideBar from './TrailInfo/SideBar/SideBar';
import TrailInfo from './TrailInfo/TrailInfo';

class MainContainer extends Component {
    constructor(){
        super();
        this.state = {
            lat: '',
            lng: '',
        }
    }
    render(){
        console.log(`${this.props.currentUser.username} THIS IS CURRENT USER ON THE MAIN CONTAINER`)
        return (
            <div>
                <Header currentUser = {this.props.currentUser}/>
                <TrailInfo/>
            </div>
        )
    }
}

export default MainContainer;