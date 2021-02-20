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
import user from './Objects/User'
import AdminRoute from './Context & Private Routes/AdminRoute'



export default function App() {

useEffect(() => {onAppLaunch()}, [])


  return (
        <div id="App">
        <Route exact path="/" component={CCLogin}/>
        <PrivateRoute path="/projectmanager" component={CCSidebar}/>
        <PrivateRoute path="/projectmanager/userprojects"  component={CCUserProjects}/>
        <AdminRoute path="/projectmanager/administrator" component={CCAdminPage}/>
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


//Default accounts that we want to start the project with
user.Create({ username: 'Hakam', firstName: 'Hakam', lastName: 'Mssarwe', email: "HakamStudent@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/hv3LwnTr/002-man.png", role: "Fullstack", isAdmin: true, state: "Earth", address: "Home", projects:[],notes:[]})
user.Create({username: 'Mohamed', firstName: 'Mohamed', lastName: 'Kittany', email: "M_love_1999@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/9FKPYWWX/005-man.png", role: "Fullstack", isAdmin: true, state: "Moon", address: "Home", projects: [], notes: []})
user.Create({username: 'Shareef', firstName: 'Shareef', lastName: 'Abu-badr', email: "Shareef@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/q7d8Wjh9/011-man.png", role: "Fullstack", isAdmin: false, state: "Mars", address: "Home", projects: [], notes: []})
user.Create({username: 'Muhamad', firstName: 'Wattad', lastName: 'Mssarwe', email: "Muhamad@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/h43VKSQ8/013-man.png", role: "Fullstack", isAdmin: false, state: "Jupiter", address: "Home", projects: [], notes: []})


} 