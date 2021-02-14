import React,{useState,useContext,useEffect} from 'react'
import './Styles/CCLogin.css';
import CCLogin from './Components/CCLogin.jsx';
import CCSidebar from './Components/CCSidebar.jsx';
import CCUserProjects from './Components/CCUserProjects/CCUserProjects.jsx'
import CCAdminPage from './Components/CCAdminPage/CCAdminPage.jsx'
import CCUserProfile from './Components/CCUserProfile/CCUserProfile.jsx'
import FCSettingsPage from './Components/CCSettingsPage/FCSettingsPage';
import CCChat from './Components/CCChat/CCChat';


export default function App() {
  return (
    <div id="App">
    {/* <CCLogin /> */}
    <CCSidebar user={{username:"Hakam",status:"Admin"}}/>
    {/* <CCUserProjects/> */}
    {/* <CCAdminPage/>   */}
    {/* <CCUserProfile/> */}
    {/* <FCSettingsPage/> */}
    {/* <CCChat/> */}
  </div>
  )
}

