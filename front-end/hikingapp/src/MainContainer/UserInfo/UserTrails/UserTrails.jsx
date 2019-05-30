import React, { Component } from 'react';

class UserTrails extends Component{
	constructor(props){
		super(props)
	}

	handleOnClick = async (id) => {
		console.log(id);
		try{
		    const deletedTrail = await fetch('http://localhost:8080/trails/' + id , {
		        method: 'DELETE',
		        credentials: 'include'
		    }) 
		}
		catch(err){
			console.log(err);
		}
	}

	render(){
		console.log(this.props.currentUser.trails);
		const trailList = this.props.currentUser.trails.map((trail, i) => {
	            console.log("trail ");
	            console.log(trail);
	            return (
	                <div className = 'eachTrail'>
	                <li key={i}>
	                    <div>
	                         <h4>{trail.name}</h4> 
	                    </div>
	                    <div>
                        <p>{trail.location}</p> 
	                    </div>
	                    <div className = 'mainTrailInfo'>
	                        <p>{trail.length} miles</p>
	                    </div>
	                    <div>
	                        <p>peak elevation: {trail.high}</p>
	                    </div>
	                    <div>
	                        <p>rating: {trail.stars} stars</p>
	                    </div>
	                    <div>
	                        <p><a href = {trail.url} target="_blank">more info</a></p>
	                    </div>
	                    <button onClick={this.handleOnClick.bind(null, trail.id)}>Delete Trail</button>
	                </li>
	                </div>
	            )
	        })

		return(
			<div>
				<ul>
					{trailList}
				</ul>
				
			</div>
		)
	}
}

export default UserTrails;