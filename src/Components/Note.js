import React from 'react';

export default class Note extends React.Component {

	state={
		name: ""
	}

	//settin
	componentDidMount() {
		this.setState({
			name: this.props.name
		})
	}

	handleChange = (e) => {
		const name= e.target.value; //important /fetching the data from the input element
		this.setState({name: name}); //setting in state (one way)
	}

	// updateNote = () => {
	// 	this.props.editNote(this.state.name, this.props.place);
	// }

	render(){
		const {name} = this.state;
		const {editNote, deleteNote, place} = this.props;
		return(
			<div>
				<input
					type="text"
					value={name}
					onChange={this.handleChange}
					onBlur={() => editNote(name, place)}
				/>
				<button onClick={() => deleteNote(place)}>X</button>
			</div>
		)
	}
}