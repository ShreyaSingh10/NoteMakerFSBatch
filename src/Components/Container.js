import React from 'react';
import AddNotes from './AddNotes';

export default class Container extends React.Component {
	state ={
		name: "first app"
	}

	addNote = () => {

	}

	render(){
		return(
			<div>
				{this.state.name}
				<AddNotes />
			</div>
		)
	}
}

//export default Container;
