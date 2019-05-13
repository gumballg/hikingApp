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
                <h1>Hello {this.props.currentUser.username}, happy hiking!</h1>
            </div>
        )
    }
}





export default Header;