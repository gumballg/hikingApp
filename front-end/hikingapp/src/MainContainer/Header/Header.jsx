import React, {Component} from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
                <div className = 'loginLogo'>
                    <h1>HIKE ON</h1>
                </div>
                <div className = 'loginBar'>
                <p>Hello {this.props.currentUser.username}, happy hiking!</p>
                </div>
            </div>
        )
    }
}





export default Header;