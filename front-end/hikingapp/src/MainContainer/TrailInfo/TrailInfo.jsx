import React, {Component} from 'react';
import UserInput from './UserInput/UserInput';


class TrailInfo extends Component {
    constructor(){
        super();
        this.state = {
            lat: '',
            lng: '',
            city: '',
            state: '',
            trails: []
        }
    }
    componentDidMount(){
        this.findGeoCode({lat: '', lng: ''}); 
      }
    
    findGeoCode = async (formData) => {
        // console.log(this.state)
        try{
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/geocode/json?address=${formData.city},+${formData.state}&key=AIzaSyDVPLLlJAQ679Frd0gu11khJ9mW02wsvWQ`
        const result = await fetch(searchURL)
        const parsedResponse = await result.json();
        console.log(parsedResponse);
        console.log(parsedResponse.results[0].geometry.location.lat)
        if(result.status === 200){
            this.setState({
                lat: parsedResponse.results[0].geometry.location.lat,
                lng: parsedResponse.results[0].geometry.location.lng,
                city: formData.city,
                state: formData.state
            })
        }
        this.findTrails();
        }catch(err){
            console.log('YOURE WRONG')
        }
    }
    findTrails = async () => {
        try{
        const searchURL = `https://www.hikingproject.com/data/get-trails?lat=${this.state.lat}&lon=${this.state.lng}&maxDistance=10&key=200465360-942e3fb792b81fa531e25b7484cbc0f9`
        const result = await fetch(searchURL);
        const parsedResponse = await result.json();
        console.log(parsedResponse)
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
        console.log(`${this.state.trails} in render`);
        const trailList = this.state.trails.map((trail) => {
            console.log(trail.name)
            return (
                <div>
                   <p>{trail.name}</p> 
                   <p>{trail.length} miles</p>
                </div>
            )
        })
        return(
            <div>
                <UserInput findGeoCode = {this.findGeoCode}/>
                {trailList}
            </div>
        )
    }
}



export default TrailInfo;