import React, {Component} from 'react';


class WeatherInfo extends Component {
    constructor(){
        super();
        this.state = {
            currWeather: []
        }
    }

    componentDidMount() {
        console.log(this.props)
        this.findWeather();
    
    }

    componentWillReceiveProps() {
        console.log(this.props)
        this.findWeather();
    }

    

    findWeather = async () => {
        try{
            const searchURL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/1deca2ce9560a3815284c163518326b0/${this.props.lat},${this.props.lng}`
            const result = await fetch(searchURL);
            const parsedResponse = await result.json();
            // console.log(parsedResponse)
            if(result.status === 200){
                this.setState({
                    currWeather: parsedResponse
                })
                console.log(this.state.currWeather)
            }
        
            }catch(err){
                console.log(err);
            }
        }
    
    render(){
        return(
            <div>
                {this.state.currWeather.currently !== undefined ?
                <div>
                    <p>{this.state.currWeather.currently.summary}</p>
                    <p>{this.state.currWeather.currently.temperature}</p>
                </div>
                :
                null
                }
            </div>
        )
    }
}


export default WeatherInfo;
