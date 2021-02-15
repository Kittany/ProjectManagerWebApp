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
  user.Create('Hakam','Hakam','Mssarwe',"HakamStudent@projectmanager.com","123","https://i.postimg.cc/hv3LwnTr/002-man.png","Fullstack",true,"Earth","Home",[],[])
  user.Create('Mohamed','Mohamed','Kittany',"M_love_1999@projectmanager.com","123","https://i.postimg.cc/9FKPYWWX/005-man.png","Fullstack",true,"Moon","Home",[],[])
  user.Create('Shareef','Shareef','Abu-badr',"Shareef@projectmanager.com","123","https://i.postimg.cc/q7d8Wjh9/011-man.png","Fullstack",false,"Mars","Home",[],[])
  user.Create('Muhamad','Wattad','Mssarwe',"Muhamad@projectmanager.com","123","https://i.postimg.cc/h43VKSQ8/013-man.png","Fullstack",false,"Jupiter","Home",[],[])
  user.Create('Mosaab','Mosaab','Aburkiyya',"Aburkiyya@projectmanager.com","123","https://i.postimg.cc/ZKBpR16G/014-man.png","Fullstack",false,"The sun","Home",[],[])
  user.Create('Shay','Shay','Avraham',"Shay@projectmanager.com","123","https://i.postimg.cc/26SBfJzX/019-man.png","Fullstack",false,"Earth","Home",[],[])
  user.Create('Nir','Nir','Haan',"HakamStudent@projectmanager.com","123","https://i.postimg.cc/1t7VRHXR/020-man.png","Fullstack",true,"Earth","Home",[],[])
  user.Create('Tseyon','Tseyon','Misalti',"Tseyon@projectmanager.com","123","https://i.postimg.cc/Y0J4YCQJ/021-man.png","Fullstack",false,"Earth","Home",[],[])
  user.Create('Anita','Anita','Ullman',"Anita@projectmanager.comm","123","https://i.postimg.cc/SRX2nMY6/022-woman.png","Fullstack",false,"Earth","Home",[],[])
  user.Create('Tami','Tami','Zuckerman',"Tami@projectmanager.com","123","https://i.postimg.cc/kMZRkfLf/023-woman.png","Fullstack",false,"Earth","Home",[],[])
  user.Create('Adi','Adi','Zimmerman',"Adi@projectmanager.com","123","https://i.postimg.cc/RZT75w7h/033-woman.png","Fullstack",false,"Earth","Home",[],[])







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

