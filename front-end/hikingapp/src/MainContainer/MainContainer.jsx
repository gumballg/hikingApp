import React, {Component} from 'react';
import Header from './Header/Header'
import TrailInfo from './TrailInfo/TrailInfo';

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
            </div>
        )
    }
}

export default MainContainer;