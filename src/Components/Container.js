import React from 'react';
import AddNotes from './AddNotes'; //we have imported child component AddNotes into our 
//parent component -> Container

//Parent

export default class Container extends React.Component {
	state ={
		notes:[] //suppose notes has 4 notes already
	}

	//addNote functionality
	addNote = (note) => {
		//console.log("name", name);
		this.setState(prevstate => { //second way to set the state
			let newArr = [...prevstate.notes]; //make a shallow copy of already 
			//existing  notes array in your state
			newArr.push(note); //pushing new object inside the duplicate array
			return {
				notes: newArr //setting the state
			}
		})
	}

	render(){
		console.log("State", this.state);
		return(
			<div>
				{this.state.name}
				<AddNotes 
					addNote={this.addNote} 
				/>
			</div>
		)
	}
}

//export default Container;


//How can child communicate with parent?
//1. there shud be a function in the parent
//2. that function should be sent to the child as props
//3. Child should use/call the function and pass the value to the function
