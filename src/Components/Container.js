import React from 'react';
import AddNotes from './AddNotes'; //we have imported child component AddNotes into our 
import Note from './Note';
import './styles.css';
//parent component -> Container

//Parent

export default class Container extends React.Component {
	state ={
		notes:[] //suppose notes has 4 notes already
	}

	componentDidMount() {
		let localNotes = localStorage.getItem('notes');
		if(localNotes){
			this.setState({
				notes: JSON.parse(localNotes)
			})
		}
	}
	//addNote functionality
	addNote = (note) => {
		//console.log("name", name);
		this.setState(prevstate => { //second way to set the state
			let newArr = [...prevstate.notes]; //make a shallow copy of already - > dumy array
			//existing  notes array in your state
			newArr.push(note); //pushing new object inside the duplicate array
			//using localstorage to store data
			localStorage.setItem('notes', JSON.stringify(newArr));
			return {
				notes: newArr //setting the state
			}
		})
	}

	//editNote functionality
	editNote = (value, place) => {
		//we will get the value and index from each note upon editing it
		//make a dummy state => tempState and store the previous state in this variable
		const tempState = this.state; //storing old state before update
		//create a dummy note object 
		const tempNote = this.state.notes[place]; //suppose index is 1 initially value was HI => tempNote = {name:"hi"}
		tempNote.name = value; //example value is HIHIHIHI => tempnote becomes => HIHIHIHI
		tempState.notes[place] = tempNote; //updating tempstate with new value
		localStorage.setItem('notes', JSON.stringify(tempState.notes));
		this.setState({notes: tempState.notes});
	}

	//deleteNote functionality
	deleteNote = (id) => { //2
		this.setState(prevstate => {
			let newNotes = prevstate.notes.filter(
				(note, index) => index != id  //0,1,3,4,5 => 0-4
			)
			localStorage.setItem('notes', JSON.stringify(newNotes));
			return {
				notes: newNotes
			}
		})
	}

	render(){
		//console.log("State", this.state);
		return(
			<div className="parent_div">
				<h1 id="heading">Note Maker</h1>
				<AddNotes 
					addNote={this.addNote} 
				/>
				<div>
					{
						this.state.notes.map(
							(note, place) => 
							(<Note
								key ={note.name}
								name={note.name}
								editNote={this.editNote}
								place={place}
								deleteNote={this.deleteNote}
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
