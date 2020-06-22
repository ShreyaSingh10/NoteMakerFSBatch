import React from 'react';

export default class AddNotes extends React.Component {

	state= {
		name: ''
	}

	handleChange = (e) => {
		console.log("Handling changes");
		const name= e.target.value; //important
		console.log("NAME", name);
		this.setState({name: name}, ()=> console.log("STATE", this.state));
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Add your note"
						type="text"
						onChange= {this.handleChange}
					/>
					<button>Add</button>
				</form>
			</div>
		);
	}
}