import React,{useEffect, useState} from 'react'
import app from "../FireBase/firebase.js"

export const AuthContext = React.createContext(); //Creates a context 

export const AuthProvider = ({children}) =>{

    const [currentUser,setCurrentUser] = useState(null)

    useEffect(()=>{
    app.auth().onAuthStateChanged(setCurrentUser)
    },[]) //passing an array [] makes the useEffect run only when the components mount (one time)


//this basically returns the AuthProvider with the currentUser data so we can put all the components in the app.js which will allow us to use the currentUser in all the components tree without the need to pass parameters     
return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider> 

}

