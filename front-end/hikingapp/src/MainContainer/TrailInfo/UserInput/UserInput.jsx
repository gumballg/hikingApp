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
                    <div>
                        <input onChange = {this.handleChange} className = "formInput" placeholder = 'CITY' type = "text" name = "city"/>
                    </div>
                    <div>
                        <input onChange = {this.handleChange} className = "formInput" placeholder = 'STATE' type = "text" name = "state"/>
                    </div>
                    <div>
                        <select onChange = {this.handleChange} className = "formInput select" value = {this.state.minLength}name = 'minLength'>
                            <option value = '0'>MIN MILES</option>
                            <option value = '1'>1 MILE</option>
                            <option value = '10'>10 MILES</option>
                            <option value = "15">15 MILES</option>
                            <option value = "20">20 MILES</option>
                        </select>
                    </div>
                    <div>
                        <select onChange = {this.handleChange} className = "formInput select" value = {this.state.maxLength} name = 'maxLength'>
                            <option value = '0'>MAX MILES</option>
                            <option value = '5'>5 MILES</option>
                            <option value = '10'>10 MILES</option>
                            <option value = "15">15 MILES</option>
                            <option value = "20">20 MILES</option>
                            <option value = "25">25 MILES</option>
                            <option value = "30">30 MILES</option>
                        </select>
                    </div>
                    <div>
                        <select onChange = {this.handleChange} className = "formInput select" value = {this.state.difficulty} name = 'difficulty'>
                            <option value = 'greenBlue'>NOVICE</option>
                            <option value = 'blue'>PROFICIENT</option>
                            <option value = "blueBlack">STRENUOUS</option>
                            <option value = "black">EXTREMELY STRENUOUS</option>
                        </select>
                    </div>
                    <div>
                        <button type = "submit" className = "loginSubmit findTrails">FIND TRAILS</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default UserInput;