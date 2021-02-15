class User{

Create(username,firstName,lastName,email,password,avatar,role,isAdmin,state,address,projects,notes)
{
let users = JSON.parse(localStorage.getItem('users'))
users.push({username:username,firstName:firstName,lastName:lastName,email:email,password:password,avatar:avatar,role:role,isAdmin:isAdmin,state:state,address:address,projects:projects,notes:notes})
localStorage.setItem('users',JSON.stringify(users))
}


Remove(username)
{
let users = JSON.parse(localStorage.getItem('users'));
users = users.filter(user => user.username !== username)
localStorage.setItem('users',JSON.stringify(users))
}

signIn(username)
{
    let users = JSON.parse(localStorage.getItem('users'))
    if (users.some(user=> user.username.toLowerCase() === username.toLowerCase()))
        sessionStorage.setItem("currentUser",JSON.stringify(users.filter(user => user.username.toLowerCase() === username.toLowerCase())))

    else
       alert('Looks like that account does not exist, try again!')   
}


getAllUsersInDatabase = () =>  JSON.parse(localStorage.getItem('users'))
getCurrentUser = () => JSON.parse(sessionStorage.getItem('currentUser'))



updateAUser(username)
{
  


 sessionStorage.setItem('currentUser',JSON.stringify(user))   
 let users = JSON.parse(localStorage.getItem('users'))


}
}

export default new User();