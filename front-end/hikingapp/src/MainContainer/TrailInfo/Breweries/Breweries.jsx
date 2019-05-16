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
        const searchURL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=brewery&location=${this.props.lat},${this.props.lng}&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg`
        const result = await fetch(searchURL)
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
        const breweryList = this.state.breweries.map((brewery) => {
            return (
                <div>
                   <p>{brewery.name}</p>
                </div>
            )
        })
        return(
            <div>
                <h2>Breweries near {this.props.city}</h2>
                {breweryList}
            </div>
    )
}
}
export default Breweries;