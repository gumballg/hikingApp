import React, {Component} from 'react';
import UserInput from '../UserInput/UserInput';
import WeatherInfo from '../WeatherInfo/WeatherInfo';

class SideBar extends Component {
    constructor(){
        super();
        // this.state = {
        //     lat: '',
        //     lng: ''
        // }
    }
    
    render(){
        return (
            <div>
                <UserInput findGeoCode = {this.findGeoCode}/>
                <WeatherInfo/>
            </div>
        )
    }
}



export default SideBar;