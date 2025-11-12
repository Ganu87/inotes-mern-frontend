import React, { useContext, useState, useEffect, useRef } from 'react'
import NoteItem from './NoteItem';
import AddNote from '../components/AddNote'
import noteContext from '../contexts/noteContext';


const Notes = () => {
    const context = useContext(noteContext);
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const { notes, getAllNotes, editNote } = context;
    useEffect(() => {
        // eslint-disable-next-line
        getAllNotes()
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }
    const ref = useRef();
    const refClose = useRef();
    const handleUpdate = (e) => {
        console.log("handleupdate called ", note);
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    }

    const onchange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <>
            <AddNote />
            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} onChange={onchange} />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="desc" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onchange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onchange} />

                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update Changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-3'>
                <h1>Your Notes</h1>
                <div className='container'>
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {
                    notes && notes.map((note) => {
                        return <NoteItem key={note._id} updateNote={updateNote} note={note} />
                    })
                }

            </div>
        </>
    )
}

export default Notes;

