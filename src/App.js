import React,{useState,useEffect} from 'react'
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
import {AuthProvider} from './Context & Private Routes/AuthProvider.js'


export default function App() {
  return (
        <AuthProvider>
        <div id="App">
        <Route exact path="/" component={CCLogin}/>
        <PrivateRoute path="/projectmanager" component={CCSidebar}/>
        <PrivateRoute exact path="projectmanager/userprojects"  component={CCUserProjects}/>
        <PrivateRoute exact path="projectmanager/administrator" component={CCAdminPage}/>
        <PrivateRoute exact path="projectmanager/profiles" component={CCUserProfile}/>
        <PrivateRoute exact path="projectmanager/settings" component={FCSettingsPage}/>
        <PrivateRoute exact path="projectmanager/chat" component={CCChat}/>
        </div>
        </AuthProvider>
  )
}

<PrivateRoute exact path/>