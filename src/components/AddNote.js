import React, { useContext,useState } from 'react'
import noteContext from '../contexts/noteContext';

const AddNote = (props) => {

    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({title:"",description:"",tag:"general"})

    const handleAdd = (e) => {
        console.log("handleAdd called")
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
        props.showAlert("Note added","success");
        setNote({title:"",description:"",tag:""})
    }

    const onchange =(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    return (
        <div>

            <div className='container'>
                <h1>Add Notes</h1>
                <form className='my-3'>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" name="title" value={note.title} onChange={onchange} />
                        
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description</label>
                        <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onchange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onchange} />
                        
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleAdd}>Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote