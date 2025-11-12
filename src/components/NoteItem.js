import React, { useContext } from 'react'
import noteContext from '../contexts/noteContext';


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const{deleteNote}=context;
    const {updateNote}=props;

    const { title, description, tag,_id } = props.note;
    return (
        <div className='col-md-3'>
            <div className="card my-3">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">{tag}</h6>
                    <p className="card-text">{description}</p>
                    <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(_id)}}></i>
                    <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNote(props.note)}}></i>
                </div>
            </div>
        </div>
    )
}

export default NoteItem