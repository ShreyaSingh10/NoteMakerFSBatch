import React from 'react';
import AddNotes from './AddNotes'; //we have imported child component AddNotes into our 
import Note from './Note';
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
			let newArr = [...prevstate.notes]; //make a shallow copy of already - > dumy array
			//existing  notes array in your state
			newArr.push(note); //pushing new object inside the duplicate array
			return {
				notes: newArr //setting the state
			}
		})
	}

	//editNote functionality
	editNote = (value, place) => {
		//we will get the value and index from each note upon editing it
		console.log("COMING HERE");
		//make a dummy state => tempState and store the previous state in this variable
		const tempState = this.state; //storing old state before update
		//create a dummy note object 
		const tempNote = this.state.notes[place]; //suppose index is 1 initially value was HI => tempNote = {name:"hi"}
		tempNote.name = value; //example value is HIHIHIHI => tempnote becomes => HIHIHIHI
		tempState.notes[place] = tempNote; //updating tempstate with new value
		this.setState({notes: tempState.notes});
	}

	render(){
		console.log("State", this.state);
		return(
			<div>
				<h1>Note Maker</h1>
				<AddNotes 
					addNote={this.addNote} 
				/>
				<div>
					{
						this.state.notes.map(
							(note, place) => 
							(<Note
								name={note.name}
								editNote={this.editNote}
								place={place}
							/>
							)
						)
					}
				</div>
			</div>
		)
	}
}

//export default Container;


//How can child communicate with parent?
//1. there shud be a function in the parent
//2. that function should be sent to the child as props
//3. Child should use/call the function and pass the value to the function
