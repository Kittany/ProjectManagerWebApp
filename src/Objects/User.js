class User{

Create(username,firstName,lastName,email,password,avatar,role,isAdmin,state,address,projects,notes)
{
let users = JSON.parse(localStorage.getItem('users'))
console.log(users);
users.push({username:username,firstName:firstName,lastName:lastName,email:email,password:password,avatar:avatar,role:role,isAdmin:isAdmin,state:state,address:address,projects:projects,notes:notes})
localStorage.setItem('users',JSON.stringify(users))
console.log(localStorage.getItem('users'));

}


}

export default new User();