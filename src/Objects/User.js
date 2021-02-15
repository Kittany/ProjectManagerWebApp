class User{

currentUser

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


getAllUsersInDatabase = () =>  JSON.parse(localStorage.getItem('users'))


signIn(username)
{
    
}


}

export default new User();