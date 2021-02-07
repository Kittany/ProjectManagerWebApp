import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCUserProjects.css'
import FCNav from './FCNav.jsx'



export default class CCUserProjects extends Component {
    render() {
        return (
            <div id="CCUserProjects">
                <div id="firstChild">
                <FCNav/>
                <Button id="btn" variant="contained" color="primary" disableElevation>Add note</Button>
                </div>
                <div id="secondChild"></div>
            </div>
        )
    }
}


/*onChange={(event, newValue) => {setValue("I changed"); }} */