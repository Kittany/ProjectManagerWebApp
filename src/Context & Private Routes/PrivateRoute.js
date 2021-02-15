import {useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import User from '../Objects/User.js'

//this function accepts the components that was sent to this private route and the props of that route
const PrivateRoute = ({component:RouteComponent,...rest}) =>{
     
    //check if user name is signed in so you can redirect him
    
    return(
    <Route
    {...rest}
    render={routeProps => !!User.getCurrentUser() ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/"}/>)}
    >

    </Route>
    )


}


export default PrivateRoute