import userEvent from '@testing-library/user-event'
import React from 'react'
import '../Styles/FCSidebar.css'

export default function FCSidebar(props) {
    return (
        <nav id="sidebar">
     <div className="p-4 pt-5">
       <a href="#" className="img logo rounded-circle mb-5" style={{backgroundImage: 'url(KittyWithGlasses.jpg)'}} /> 
       <ul className="list-unstyled components mb-5">
         <li>
           <a href="#pageSubmenu"  aria-expanded="false">My Projects</a>
         </li>
         <li>  
           {true?<a href="#" style={{color:'goldenrod'}}>Project Management</a> : null} {/*if the user is an admin render it*/}
         </li>
         <li>
           <a href="#">Chat</a>
         </li>
         <li>
           <a href="#">Profile Page</a>
         </li>
         <li className="active">
           <a href="#homeSubmenu" aria-expanded="false">Account Settings</a>
         </li>
       </ul>
     </div>
   </nav>
    )
}
