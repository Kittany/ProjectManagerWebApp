import { Button } from '@material-ui/core'
import React, { useState } from 'react'
import '../../Styles/CCSettingsPage.css'
import CCAccountSecurity from './CCAccountSecurity'
import CCProfileSettings from './CCProfileSettings'

export default function CCSettingsPage(props) {


    const [tabOpened,setTabOpened] = useState("ProfileSettings")
    //replace this with the user signed in
    const [tempAccountSettings, setTempAccountSettings] = useState({ username: "tempUser", firstName: "3bbod", lastName: "meow", email: "momo3bbod@gmail.com", password: "123", avatar:"https://i.postimg.cc/SKvzkdJS/050-woman.png",role:"Fullstack",isAdmin:false,state:"Afghanistan",address:"Baka algrbiyya",projects:[],notes:[]})
    const [profilePageErrorMessage,setProfilePageErrorMessage] = useState("")
    const [securityPageInput,setSecurityPageInput] = useState({password:tempAccountSettings.password,confirmPassword:tempAccountSettings.password,email:tempAccountSettings.email,confirmEmail:tempAccountSettings.email,errorMessage:""})
    console.log(tempAccountSettings);

    const formValidation = () =>
    {
        setProfilePageErrorMessage("");
        setSecurityPageInput(prevState => ({...prevState,errorMessage:""}))

        if (tempAccountSettings.firstName === "" || tempAccountSettings.lastName === "" || tempAccountSettings.address === "")
        {
            setProfilePageErrorMessage("Please fill in the empty fields");
            return;
        }
        
        if (securityPageInput.email == "" || securityPageInput.confirmEmail == "" || securityPageInput.password == "" || securityPageInput.confirmPassword == "")
        {
            setSecurityPageInput(prevState => ({...prevState,errorMessage:"Please fill in the empty fields"}))
            return;
        }

        else if (securityPageInput.email !== securityPageInput.confirmEmail)
        {
            setSecurityPageInput(prevState => ({...prevState,errorMessage:"Emails do not match"}))
            return;
        }

        else if (securityPageInput.password !== securityPageInput.confirmPassword)
        {
            setSecurityPageInput(prevState => ({...prevState,errorMessage:"Passwords do not match"}))
            return;
        }
        else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(securityPageInput.email))
        {    
          setSecurityPageInput(prevState => ({...prevState,errorMessage:"Incorrect email format!"}))
          return;
        }  


        setTempAccountSettings(prevState => ({...prevState,email:securityPageInput.email,password:securityPageInput.password}))
        alert('Changes has been successfully made')
        //Save new data to database user
    }
    
    
    return (
            <div id="CCSettingsPage">
                <div id="CCSettingsPageFirstChild">
                <Button  onClick={e => setTabOpened("ProfileSettings")} variant="contained" color="primary" disableElevation style={{marginBottom:"10px",fontWeight:"bold",fontFamily: "poppins",width: "100%",height: "6%"}}>Profile Settings</Button>
                <Button  onClick={e => setTabOpened("AccountSecurity")} variant="contained" color="primary" disableElevation style={{marginBottom:"10px",fontWeight:"bold",fontFamily: "poppins",width: "100%",height: "6%"}}>Account Security</Button>
                <Button  onClick={formValidation} variant="contained" color="primary" disableElevation style={{marginBottom:"10px", fontSize:"17px",border:"solid 2px goldenrod",fontWeight:"bold",fontFamily: "poppins",width: "100%",height: "6%",color:"goldenrod"}}>Save Changes</Button>
                </div>
                <div id="CCSettingsPageSecondChild">
                    {tabOpened === "ProfileSettings"?<CCProfileSettings tempAccountSettings={tempAccountSettings}  setTempAccountSettings={setTempAccountSettings} profilePageErrorMessage={profilePageErrorMessage} setProfilePageErrorMessage={setProfilePageErrorMessage}/>:<CCAccountSecurity tempAccountSettings={tempAccountSettings}  setTempAccountSettings={setTempAccountSettings} securityPageInput={securityPageInput} setSecurityPageInput={setSecurityPageInput}/>}
                </div>
            </div>
        )
    
}

