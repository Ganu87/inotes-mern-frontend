import { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {
    const s1 = {
        "name": "Ganu", "class": "3A"
    }
    const [state, setState] = useState(s1)

    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"shiva",
                "class":"10"
            })
        }, 3000);
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState

