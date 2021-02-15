class User{

Create(newUser)
{
let users = this.getAllUsersInDatabase()
users = [...users,newUser]
localStorage.setItem('users',JSON.stringify(users))
}


Remove(username)
{
let users = this.getAllUsersInDatabase()
users = users.filter(user => user.username.toLowerCase() !== username.toLowerCase())
localStorage.setItem('users',JSON.stringify(users))
}

signIn(username,password)
{ 
    let users = this.getAllUsersInDatabase()
    if (users.some(user=> user.username.toLowerCase() === username.toLowerCase() && user.password === password))
    {
        sessionStorage.setItem("currentUser",JSON.stringify(users.filter(user => user.username.toLowerCase() === username.toLowerCase())))
        return true;
    }

    else
       return false;  
    
}

signOut = () => sessionStorage.clear()




getAllUsersInDatabase = () =>  JSON.parse(localStorage.getItem('users'))
getCurrentUser = () => JSON.parse(sessionStorage.getItem('currentUser')) === null? null : JSON.parse(sessionStorage.getItem('currentUser'))[0]


updateUser(specificUser)
{
    let users = this.getAllUsersInDatabase()

    if (this.getCurrentUser().username === specificUser.username)
        sessionStorage.setItem('currentUser',JSON.stringify([specificUser]))   

   
    else if (users.filter(user => user.username === specificUser.username).length !== 0)
    {
        users = users.filter(user => user.username !== specificUser.username)
        users.push(specificUser)
        localStorage.setItem('users',JSON.stringify(users))
    }

    else
        console.log('You tried to update a user that does not exist!')
     
}

}

export default new User();