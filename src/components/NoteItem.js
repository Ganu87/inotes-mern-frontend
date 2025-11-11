import React from 'react'

const NoteItem = (props) => {
    const { title, description, tag } = props.note;
    return (
        <div className='col-md-3'>
            <div class="card my-3">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">{tag}</h6>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem