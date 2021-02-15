import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom'
import user from './Objects/User'

const onAppLaunch = () =>
{
  localStorage.setItem('users',JSON.stringify([]))
  localStorage.setItem('projects',JSON.stringify([]))
  localStorage.setItem('chat',JSON.stringify([]))
  //Default accounts that we want to start the project with
  user.Create({username: 'Hakam', firstName: 'Hakam', lastName: 'Mssarwe', email: "HakamStudent@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/hv3LwnTr/002-man.png", role: "Fullstack", isAdmin: true, state: "Earth", address: "Home", projects:[],notes:[]})
  user.Create({username: 'Mohamed', firstName: 'Mohamed', lastName: 'Kittany', email: "M_love_1999@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/9FKPYWWX/005-man.png", role: "Fullstack", isAdmin: true, state: "Moon", address: "Home", projects: [], notes: []})
  user.Create({username: 'Shareef', firstName: 'Shareef', lastName: 'Abu-badr', email: "Shareef@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/q7d8Wjh9/011-man.png", role: "Fullstack", isAdmin: false, state: "Mars", address: "Home", projects: [], notes: []})
  user.Create({username: 'Muhamad', firstName: 'Wattad', lastName: 'Mssarwe', email: "Muhamad@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/h43VKSQ8/013-man.png", role: "Fullstack", isAdmin: false, state: "Jupiter", address: "Home", projects: [], notes: []})
  user.Create({username: 'Mosaab', firstName: 'Mosaab', lastName: 'Aburkiyya', email: "Aburkiyya@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/ZKBpR16G/014-man.png", role: "Fullstack", isAdmin: false, state: "The sun", address: "Home", projects: [], notes: []})
  user.Create({username: 'Shay', firstName: 'Shay', lastName: 'Avraham', email: "Shay@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/26SBfJzX/019-man.png", role: "Fullstack", isAdmin: false, state: "Earth", address: "Home", projects: [], notes: []})
  user.Create({username: 'Nir', firstName: 'Nir', lastName: 'Haan', email: "HakamStudent@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/1t7VRHXR/020-man.png", role: "Fullstack", isAdmin: true, state: "Earth", address: "Home", projects: [], notes: []})
  user.Create({username: 'Tseyon', firstName: 'Tseyon', lastName: 'Misalti', email: "Tseyon@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/Y0J4YCQJ/021-man.png", role: "Fullstack", isAdmin: false, state: "Earth", address: "Home", projects: [], notes: []})
  user.Create({username: 'Anita', firstName: 'Anita', lastName: 'Ullman', email: "Anita@projectmanager.comm", password: "123", avatar: "https://i.postimg.cc/SRX2nMY6/022-woman.png", role: "Fullstack", isAdmin: false, state: "Earth", address: "Home", projects: [], notes: []})
  user.Create({username: 'Tami', firstName: 'Tami', lastName: 'Zuckerman', email: "Tami@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/kMZRkfLf/023-woman.png", role: "Fullstack", isAdmin: false, state: "Earth", address: "Home", projects: [], notes: []})
  user.Create({username: 'Adi', firstName: 'Adi', lastName: 'Zimmerman', email: "Adi@projectmanager.com", password: "123", avatar: "https://i.postimg.cc/RZT75w7h/033-woman.png", role: "Fullstack", isAdmin: false, state: "Earth", address: "Home", projects: [], notes: []})







}


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <App />
    {onAppLaunch()}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

