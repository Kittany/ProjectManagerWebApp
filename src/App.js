import React,{useState,useContext,useEffect} from 'react'
import './Styles/CCLogin.css';
import {Route} from 'react-router-dom'
import CCLogin from './Components/CCLogin.jsx';
import CCSidebar from './Components/CCSidebar.jsx';
import CCUserProjects from './Components/CCUserProjects/CCUserProjects.jsx'
import CCAdminPage from './Components/CCAdminPage/CCAdminPage.jsx'
import CCUserProfile from './Components/CCUserProfile/CCUserProfile.jsx'
import FCSettingsPage from './Components/CCSettingsPage/FCSettingsPage';
import CCChat from './Components/CCChat/CCChat';
import PrivateRoute from './Context & Private Routes/PrivateRoute.js';
import User from './Objects/User'



export default function App() {
useEffect(() => {onAppLaunch()}, [])

const user = User;
user.Create('ChiefHakam','Hakam','Mssarwe',"HakamStudent@Gmail.com","123","20","Fullstack",true,"Earth","Home",[],[])

  return (
        <div id="App">
        <Route exact path="/" component={CCLogin}/>
        <PrivateRoute path="/projectmanager" component={CCSidebar}/>
        <PrivateRoute path="/projectmanager/userprojects"  component={CCUserProjects}/>
        <PrivateRoute path="/projectmanager/administrator" component={CCAdminPage}/>
        <PrivateRoute path="/projectmanager/profiles" component={CCUserProfile}/>
        <PrivateRoute path="/projectmanager/settings" component={FCSettingsPage}/>
        <PrivateRoute path="/projectmanager/chat" component={CCChat}/>
        </div>
  )
}

<PrivateRoute exact path/>


const onAppLaunch = () =>{
localStorage.setItem('users',JSON.stringify([]))
localStorage.setItem('projects',JSON.stringify([]))
localStorage.setItem('chatApp',JSON.stringify([]))
}