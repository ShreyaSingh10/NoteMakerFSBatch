import React from 'react';

//Child

export default class AddNotes extends React.Component {

	state={
		name: ""
	}

	handleChange = (e) => {
		const name= e.target.value; //important /fetching the data from the input element
		this.setState({name: name}); //setting in state (one way)
	}

	handleSubmit = (e) => {
		//console.log("SUBMITTING");
		e.preventDefault(); // use this whenever u are working with forms to stop
		//page from reloading
		//child parent se communicate kare - doesnt mean child has to return a value to parent
		const note = {
			name: this.state.name
		}
		this.props.addNote(note);
		this.setState({name: ''}); //-> to remove value from input field upon clicking on add button
	}

	render(){
		//console.log("PROPS", this.props);
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Add your note"
						type="text"
						onChange= {this.handleChange}
						value={this.state.name}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}