import React, {Component} from 'react';

class UserInput extends Component {
    constructor(){
        super();
        this.state = {
            city: '',
            state: '',
            minLength: '0',
            maxLength: '0',
            difficulty: 'greenBlue'
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.findGeoCode(this.state)
    }
    render(){
        // console.log(this.state)
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    City: <input onChange = {this.handleChange} type = "text" name = "city"/>
                    State: <input onChange = {this.handleChange} type = "text" name = "state"/>
                    Minimum Length: <select onChange = {this.handleChange} value = {this.state.minLength}name = 'minLength'>
                        <option value = '0'>Set Min Miles</option>
                        <option value = '1'>1 mile</option>
                        <option value = '10'>10 miles</option>
                        <option value = "15">15 miles</option>
                        <option value = "20">20 miles</option>
                        </select>
                    Maximum Length: <select onChange = {this.handleChange} value = {this.state.maxLength} name = 'maxLength'>
                        <option value = '0'>Set Max Miles</option>
                        <option value = '5'>5 miles</option>
                        <option value = '10'>10 miles</option>
                        <option value = "15">15 miles</option>
                        <option value = "20">20 miles</option>
                        <option value = "25">25 miles</option>
                        <option value = "30">30 miles</option>
                        </select>
                    Difficulty: <select onChange = {this.handleChange} value = {this.state.difficulty} name = 'difficulty'>
                        <option value = 'greenBlue'>Novice</option>
                        <option value = 'blue'>Proficient</option>
                        <option value = "blueBlack">Strenuous</option>
                        <option value = "black">Extemely Strenuous</option>
                        </select>
                    <input type = "submit"/>
                </form>
            </div>
        )
    }
}


export default UserInput
;