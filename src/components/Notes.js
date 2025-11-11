import React, { useContext, useEffect } from 'react'
import NoteItem from './NoteItem';
import AddNote from '../components/AddNote'
import noteContext from '../contexts/noteContext';


const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getAllNotes } = context;
    useEffect(() => {

        getAllNotes()
    }, [])

    return (
        <>
            <AddNote />
            <div className='row my-3'>
                <h1>Your Notes</h1>
                {

                    //console.log("notes ",notes.data)

                    notes.data && notes.data.map((note) => {
                        return <NoteItem key={note._id} note={note} />
                    })
                }

            </div>
        </>
    )
}

export default Notes;

