import React, {Component} from 'react';
import Header from './Header/Header'
import SideBar from './TrailInfo/SideBar/SideBar';
import TrailInfo from './TrailInfo/TrailInfo';

class MainContainer extends Component {
    constructor(){
        super();
        this.state = {
            lat: '',
            lng: ''
        }
    }
    render(){
        return (
            <div>
                <Header/>
                <TrailInfo/>
            </div>
        )
    }
}

export default MainContainer;