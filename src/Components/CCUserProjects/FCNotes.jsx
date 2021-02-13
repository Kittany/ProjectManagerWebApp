import React from 'react'
import '../../Styles/CCUserProjects.css'
import FCNote from './FCNote.jsx'



export default function FCNotes(props) {
    return (
        <div id="FCUserNotes"> 
        {props.userNotes.map(noteData => <FCNote note={noteData} deleteNoteData={props.deleteNoteData}/>)}
        </div>
   
    )
}
















