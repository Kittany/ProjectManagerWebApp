import React, { Component } from 'react'
import '../../Styles/CCUserProjects.css'
import FCNote from './FCNote.jsx'

export default class CCNotes extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            user:this.props.user
        }
    
    }
    render() {
        return (
            <div id="CCUserNotes"> {/* this is temp, use map when ready*/}
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
                <FCNote user={"temp"}/>
            </div>
        )
    }
}















