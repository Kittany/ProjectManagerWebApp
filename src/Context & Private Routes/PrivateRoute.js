import {useContext} from 'react'
import {Route,Redirect} from 'react-router-dom'
import {AuthContext} from './AuthProvider'

//this function accepts the components that was sent to this private route and the props of that route
const PrivateRoute = ({component:RouteComponent,...rest}) =>{

    const {currentUser} = useContext(AuthContext) //This returns the value of the currentUser that we passed to the AuthContext.Provider

    return(
    <Route
    {...rest}
    render={routeProps => true ? (<RouteComponent {...routeProps} />) : (<Redirect to={"/login"}/>)}
    >

   

    </Route>
    )


}


export default PrivateRoute