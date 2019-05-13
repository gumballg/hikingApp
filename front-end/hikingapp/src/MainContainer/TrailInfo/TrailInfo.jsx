import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import WeatherInfo from './WeatherInfo/WeatherInfo'


class TrailInfo extends Component {
    constructor(){
        super();
        this.state = {
            lat: '',
            lng: '',
            city: '',
            state: '',
            trails: [],
            minLength: '',
            difficulty: '',
        }
    }

    findGeoCode = async (formData) => {
        try{
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${formData.city},+${formData.state}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`
        const result = await fetch(searchURL)
        const parsedResponse = await result.json();
        if(result.status === 200){
            this.setState({
                lat: parsedResponse.results[0].geometry.location.lat,
                lng: parsedResponse.results[0].geometry.location.lng,
                city: formData.city,
                state: formData.state,
                minLength: formData.minLength,
                difficulty: formData.difficulty
            })
        }
        this.findTrails();
        }catch(err){
            console.log('YOURE WRONG')
        }
    }
    findTrails = async () => {
        try{
        const searchURL = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lng}&minLength=${this.state.minLength}&${this.state.difficulty}&key=200465360-942e3fb792b81fa531e25b7484cbc0f9`
        const result = await fetch(searchURL);
        const parsedResponse = await result.json();
        if(result.status === 200){
            this.setState({
                trails: parsedResponse.trails
            })
        }
        }catch(err){
            console.log(err);
        }
    }

    render(){
        const trailList = this.state.trails.map((trail) => {
            return (
                <div>
                   <p>{trail.name}</p> 
                   <p>{trail.location}</p>
                   <p>{trail.length} miles</p>
                </div>
            )
        })
        console.log('this is the lat', this.state.lat, this.state.lng)
        return(
            <div>
                <UserInput findGeoCode = {this.findGeoCode}/>
                {trailList}
                {this.state.lat !== '' ?
                <WeatherInfo lat = {this.state.lat} lng = {this.state.lng} />
                :
                null
                }
            </div>
        )
    }
}


export default TrailInfo;