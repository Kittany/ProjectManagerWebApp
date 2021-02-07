import React, { Component } from 'react'
import '../../Styles/CCAdminPage.css'
import FCUser from './FCUser.jsx'

export default class CCUsers extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            users:this.props.users
        }
    
    }
    render() {
        return (
            <div id="CCUsers"> {/* this is temp, use map when ready*/}
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>
                <FCUser user={"temp"}/>

            </div>
        )
    }
}















