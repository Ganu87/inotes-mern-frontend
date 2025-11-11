import { useState } from 'react';
import NoteContext from './noteContext'

const NoteState = (props) => {
    const initialNotes=[
        {
            "_id": "6911760e15bddfd230957b70",
            "user": "690f1231dd7531a734a1e2cc",
            "title": "Note 1",
            "description": "my description",
            "tag": "general",
            "date": "2025-11-10T05:20:14.145Z",
            "__v": 0
        },
        {
            "_id": "6912c19da3f30e6ace48f023",
            "user": "690f1231dd7531a734a1e2cc",
            "title": "Note 33",
            "description": "my description 33",
            "tag": "general",
            "date": "2025-11-11T04:54:53.516Z",
            "__v": 0
        },
        {
            "_id": "6912c1a8a3f30e6ace48f026",
            "user": "690f1231dd7531a734a1e2cc",
            "title": "Note 35",
            "description": "my description 35",
            "tag": "general",
            "date": "2025-11-11T04:55:04.680Z",
            "__v": 0
        }
    ];

    const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState

