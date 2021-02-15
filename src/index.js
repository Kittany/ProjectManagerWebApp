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
  localStorage.setItem('chatApp',JSON.stringify([]))

  //Default accounts that we want to start the project with
  user.Create('ChiefHakam','Hakam','Mssarwe',"HakamStudent@projectmanager.com","123","20","Fullstack",true,"Earth","Home",[],[])
  user.Create('ChiefMohamed','Mohamed','Kittany',"M_love_1999@projectmanager.com","123","25","Fullstack",true,"Moon","Home",[],[])
  user.Create('Shareef','Shareef','Abu-badr',"Shareef@projectmanager.com","123","20","Fullstack",false,"Mars","Home",[],[])
  user.Create('Muhamad','Wattad','Mssarwe',"Muhamad@projectmanager.com","123","20","Fullstack",false,"Jupiter","Home",[],[])
  user.Create('Mosaab','Mosaab','Aburkiyya',"Aburkiyya@projectmanager.com","123","20","Fullstack",false,"The sun","Home",[],[])
  user.Create('Shay','Shay','Avraham',"Shay@projectmanager.com","123","20","Fullstack",false,"Earth","Home",[],[])
  user.Create('Nir','Nir','Haan',"HakamStudent@projectmanager.com","123","20","Fullstack",true,"Earth","Home",[],[])
  user.Create('Tseyon','Tseyon','Misalti',"Tseyon@projectmanager.com","123","20","Fullstack",false,"Earth","Home",[],[])
  user.Create('Anita','Anita','Ullman',"Anita@projectmanager.comm","123","20","Fullstack",false,"Earth","Home",[],[])
  user.Create('Tami','Tami','Zuckerman',"Tami@projectmanager.com","123","20","Fullstack",false,"Earth","Home",[],[])
  user.Create('Adi','Adi','Zimmerman',"Adi@projectmanager.com","123","20","Fullstack",false,"Earth","Home",[],[])







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

