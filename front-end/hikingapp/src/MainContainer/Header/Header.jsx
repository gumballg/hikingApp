import React, {Component} from 'react';
import logo from './images/logo.png'

class Header extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <div className = 'mainLogo'>
                         <h1>HIKE ON</h1>    
                         <img src = {logo}/>
                </div>
                <div className = 'loginBar'>
                    <div className = 'welcomeText'>
                        <p>hello {this.props.currentUser.username}, happy hiking!</p>
                    </div>
                </div>
            </div>
        )
    }
}





export default Header;