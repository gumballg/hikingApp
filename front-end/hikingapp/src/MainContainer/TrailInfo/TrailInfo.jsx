import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';
import WeatherInfo from './WeatherInfo/WeatherInfo'
import Breweries from './Breweries/Breweries';


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
            maxLength: '',
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
                maxLength: formData.maxLength,
                difficulty: formData.difficulty
            })
        }
        this.findTrails();
        }catch(err){
            console.log('YOURE WRONG')
        }
    }
    findTrails = async () => {
        console.log(this.state.maxLength)
        try{
        const searchURL = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lng}&minLength=${this.state.minLength}&${this.state.difficulty}&maxDistance=10&key=200465360-942e3fb792b81fa531e25b7484cbc0f9`
        const result = await fetch(searchURL);
        const parsedResponse = await result.json();
        if(result.status === 200){
            this.setState({
                trails: parsedResponse.trails.filter(trails => trails.length <= this.state.maxLength)
            })
        }
        }catch(err){
            console.log(err);
        }
    }

    render(formData){
        console.log(this.state.trails)
        // console.log(formData)
        console.log(this.state.lat, this.state.lng, 'IN TRAILS INFO')
        const trailList = this.state.trails.map((trail) => {
            return (
                <div className = 'eachTrail'>
                    <div>
                         <h4>{trail.name}</h4> 
                    </div>
                     <div>
                        <p>{trail.location}</p> 
                     </div>
                    <div className = 'mainTrailInfo'>
                        <p>{trail.length} miles</p>
                     </div>
                    <div>
                        <p>peak elevation: {trail.high}</p>
                    </div>
                    <div>
                        <p>rating: {trail.stars} stars</p>
                    </div>
                    <div>
                        <p><a href = {trail.url}>more info</a></p>
                    </div>
                </div>
            )
        })
        // console.log('this is the lat', this.state.lat, this.state.lng)
        return(
            <div className = 'whatIsThisDiv'>
                <div>
                    <div className = 'userInput'>
                        <UserInput findGeoCode = {this.findGeoCode}/>
                    </div>
                {this.state.lat !== '' ?
                    <div className = 'weather'>
                        <WeatherInfo lat = {this.state.lat} lng = {this.state.lng} city = {this.state.city} />
                    </div>
                :
                null
                }
                {this.state.lng !== ''?
                    <div className = 'breweries'>
                        <Breweries lat = {this.state.lat} lng = {this.state.lng} city = {this.state.city}/>
                    </div>
                :
                null
                }
                </div>
                {this.state.lng !== '' ?
                <div className = 'trailInfo'>
                    <h2>Hiking Trails Near {this.state.city}, {this.state.state}</h2>
                    <div className = 'trailList'>
                    {trailList}
                    </div>
                </div>
                :
                null
                }
                
            </div>
        )
    }
}


export default TrailInfo;