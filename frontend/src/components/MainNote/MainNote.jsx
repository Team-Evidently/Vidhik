import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './NotesList';
import "./CSSNote.css"
const MainNote = () => {
	const [notes, setNotes] = useState([
		{
			id: nanoid(),
			text: "my first note for this client",
			date: '9/23/2023',
		},
		
	]);

	const [searchText, setSearchText] = useState('');


	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div>
			<h1
        style={{
          position: 'absolute',
          left: '375px',
		top: '560px',
          color: '#000',
          fontFamily: 'Poppins',
          fontSize: '25px', 
          fontWeight: '700',
          
        }}
        className=""
      >
        My Notes
      </h1>
			<div style={{position:'absolute',top:'600px'}}className='container'>
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default MainNote;