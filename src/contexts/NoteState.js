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
        setNotes(jsonData);
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

        const note = {
            "_id": "6912c1a8a3f30e6ace48f026",
            "user": "690f1231dd7531a734a1e2cc",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2025-11-11T04:55:04.680Z",
            "__v": 0
        }

        setNotes(notes.concat(note));
    }
    //Edit note
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/notes/updateNote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": authToken
            },
            body: JSON.stringify(title, description, tag),

        });



        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];

            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;


            }

        }
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

        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote,getAllNotes }}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState

