import React, {Component} from 'react';

class AuthHeader extends Component {
    constructor(){
        super();
        this.state = {
        }
    }
    render(){
        return (
            <div>
            <div>
                <h1 className = 'loginLogo'>HIKE ON</h1>
            </div>
            <div className = 'loginBar'></div>
            </div>
        )
    }
}





export default AuthHeader;