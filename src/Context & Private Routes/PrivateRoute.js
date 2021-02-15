import {useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'


//this function accepts the components that was sent to this private route and the props of that route
const PrivateRoute = ({component:RouteComponent,...rest}) =>{

    // const {currentUser} = useContext(AuthContext) //This returns the value of the currentUser that we passed to the AuthContext.Provider

    //check if user name is signed in so you can redirect him
    
    return(
    <Route
    {...rest}
    render={routeProps => true ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/"}/>)}
    >

    </Route>
    )


}


export default PrivateRoute