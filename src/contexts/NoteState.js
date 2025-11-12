import { useState } from 'react';
import NoteContext from './noteContext'

const NoteState = (props) => {
    const host = "http://localhost:5001/api";
    const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2FudSIsImVtYWlsIjoiZzg3QGcuY29tIiwiaWF0IjoxNzYyODUyOTE5fQ.cqWJ-cLc_Ty5566aycRAPwJ2NyKtzWiYcfwTNGcflPs";
    const initialNotes = [];

    const [notes, setNotes] = useState(initialNotes)

    /// Fetch all notes

    const getAllNotes = async () => {

        const response = await fetch(`${host}/notes/fetchAllNotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            }
        });

        const jsonData= await response.json();
        setNotes(jsonData.data);
    }

    //Add note

    const addNote = async (title, description, tag) => {

        const response = await fetch(`${host}/notes/addNote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
            body: JSON.stringify({title,description,tag}),

        });

        
        //setNotes(notes);
        await getAllNotes();
    }
    //Edit note
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/notes/updateNote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
            body: JSON.stringify({title, description, tag}),

        });

        let newNotes = JSON.parse(JSON.stringify(notes));

        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];

            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }

        }

        setNotes(newNotes);
    }

    //Delete note

    const deleteNote = async (id) => {

        const response = await fetch(`${host}/notes/deleteNote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
            body: JSON.stringify({}),

        });
        //console.log("notes.data  ",notes);
        const newNotes = notes && notes.filter((note) => { return note._id !== id })
        //console.log("newNotes ",newNotes);
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote,getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState

