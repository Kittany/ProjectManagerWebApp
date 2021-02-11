import React, { Component } from 'react'
import '../../Styles/CCUserProjects.css'
import FCNote from './FCNote.jsx'

//Might be changed to functional Component!
export default class CCNotes extends Component {

constructor(props)
{
    super(props)
    this.state = {}
}

    render() {
        return (
            <div id="CCUserNotes"> {/* this is temp, use map when ready*/}
               {this.props.notes.map(noteData => <FCNote note={noteData}/>)}
            </div>
        )
    }
}















