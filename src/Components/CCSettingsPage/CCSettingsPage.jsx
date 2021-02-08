import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import '../../Styles/CCSettingsPage.css'
import CCAccountSecurity from './CCAccountSecurity'
import CCProfileSettings from './CCProfileSettings'

export default class CCSettingsPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabOpened:"ProfileSettings"
        }
    }


    btnChangeTabs = (tabOpened) =>{
        this.setState({tabOpened})
    }


    render() {
        return (
            <div id="CCSettingsPage">
                <div id="CCSettingsPageFirstChild">
                <Button  onClick={e => this.btnChangeTabs("ProfileSettings")} variant="contained" color="primary" disableElevation style={{marginBottom:"10px",fontFamily: "poppins",width: "100%",height: "6%"}}>Profile Settings</Button>
                <Button  onClick={e => this.btnChangeTabs("AccountSecurity")} variant="contained" color="primary" disableElevation style={{marginBottom:"10px",fontFamily: "poppins",width: "100%",height: "6%"}}>Account Security</Button>
                <Button variant="contained" color="primary" disableElevation style={{marginBottom:"10px",fontFamily: "poppins",width: "100%",height: "6%"}}>Dark Theme (might remove)</Button>
                </div>
                <div id="CCSettingsPageSecondChild">
                    {this.state.tabOpened === "ProfileSettings"?<CCProfileSettings/>:<CCAccountSecurity/>}
                </div>
            </div>
        )
    }
}
