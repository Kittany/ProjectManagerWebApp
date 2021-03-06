class User{

Create(newUser)
{

if (this.getAllUsersInDatabase() == null)
    return;

let users = this.getAllUsersInDatabase()
users = [...users,newUser]
localStorage.setItem('users',JSON.stringify(users))
}


Remove(username)
{

if (this.getAllUsersInDatabase() == null)
return;

let users = this.getAllUsersInDatabase()
users = users.filter(user => user.username.toLowerCase() !== username.toLowerCase())
localStorage.setItem('users',JSON.stringify(users))
}

signIn(username,password)
{ 

if (this.getAllUsersInDatabase() == null)
return;

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

getSpecificUser = (username) => JSON.parse(localStorage.getItem('users')).filter(user => user.username === username).length === 0? null : JSON.parse(localStorage.getItem('users')).filter(user => user.username === username)



updateUser(specificUser)
{

    if (this.getAllUsersInDatabase() == null)
    return;

    
    let users = this.getAllUsersInDatabase()

    if (this.getCurrentUser().username === specificUser.username)
    {
        sessionStorage.setItem('currentUser',JSON.stringify([specificUser]))  
        users = users.filter(user => user.username !== specificUser.username)
        users.push(specificUser)
        localStorage.setItem('users',JSON.stringify(users)) 
    }

    else
        console.log('You tried to update a user that does not exist!')
     
}

}

export default new User();