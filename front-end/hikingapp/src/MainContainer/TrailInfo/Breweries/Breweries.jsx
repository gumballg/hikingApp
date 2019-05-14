import React, { Component } from 'react';

class Breweries extends Component {
    constructor(){
        super();
        this.state = {
            breweries: []
        }
    }
    componentDidMount(){
        console.log(this.props, 'IN DID MOUNT')
        this.findBreweries();
    }
    componentWillReceiveProps() {
        console.log(this.props, 'IN WILL RECEIVE PROPS')
        this.findBreweries();
    }

    findBreweries = async () => {
        console.log(this.props)
        try{
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=brewery&location=${this.props.lat},${this.props.lng}&rankby=distance&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg`
        const result = await fetch(searchURL)
        // console.log(result, 'THIS IS THE BREWERY RESULT')
        const parsedResponse = await result.json();
        if(result.status === 200){
            this.setState({
                breweries: parsedResponse.results.filter(breweries => breweries.rating > 1)
            })
            console.log(this.state.breweries)
        }
        }catch(err){
            console.log('YOURE WRONG')
        }

    }
    render(){
        // console.log(this.state.breweries)
        const breweryList = this.state.breweries.map((brewery) => {
            return (
                <div>
                   <p>{brewery.name} | {brewery.rating}/5 stars</p>
                </div>
            )
        })
        // console.log('this is the lat', this.state.lat, this.state.lng)
        return(
            <div>
                {breweryList}
            </div>
    )
}
}
export default Breweries;