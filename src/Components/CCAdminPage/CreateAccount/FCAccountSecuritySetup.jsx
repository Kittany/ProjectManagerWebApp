import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Form } from 'react-bootstrap';

export default function FCAccountSecuritySetup(props) {

let tempUsers = [{username:"hakam"}] //Replace this with the database one



const checkUsername = (e) =>{
     props.setChildComponentInput(prevState => ({...prevState, errorMessage:""}))
     props.setNewAccount((prevState) => ({...prevState,username:e.target.value}))
   
     if (tempUsers.some(user => user.username.toLowerCase() === e.target.value.toLowerCase()))
     {
      props.setChildComponentInput(prevState => ({...prevState, errorMessage:"Username is already taken, try another"}))
         return;
     }      
     
}



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Account Security
      </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} style={{padding:0, paddingLeft:"15px",paddingTop:"15px"}}> 
          <p style={{color:"red"}}>{props.childComponentInput.errorMessage}</p>
        </Grid>
      <Grid item xs={12}> 
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            value={props.newAccount.username}
            onChange={checkUsername}
          />
        </Grid>
        <Grid item xs={12} sm={6} style={{paddingTop:0}}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            onChange={e => props.setNewAccount(prevState => ({...prevState,firstName:e.target.value}))}
            value={props.newAccount.firstName}

          />
        </Grid>
        <Grid item xs={12} sm={6} style={{paddingTop:0}} >
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            onChange={e => props.setNewAccount(prevState => ({...prevState,lastName:e.target.value}))}
            value={props.newAccount.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            onChange={e => props.setChildComponentInput(prevState => ({...prevState,email:e.target.value}))}
            value={props.childComponentInput.email}
          /> 
        </Grid>
        <Grid item xs={12}>
        <TextField
            required
            id="emailConfirm"
            name="emailConfirm"
            label="Confirm Email Address"
            fullWidth
            onChange={e => props.setChildComponentInput(prevState => ({...prevState,confirmEmail:e.target.value}))}
            value={props.childComponentInput.confirmEmail}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Password"
            name="Password"
            label="Password"
            type="password"
            onChange={e => props.setChildComponentInput(prevState => ({...prevState,password:e.target.value}))}
            fullWidth
            value={props.childComponentInput.password}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField 
          id="PasswordConfirm" 
          name="PasswordConfirm" 
          label="Confirm Password"
           fullWidth 
           type="password"
           onChange={e => props.setChildComponentInput(prevState => ({...prevState,confirmPassword:e.target.value}))}
           value={props.childComponentInput.confirmPassword}
           />
         
        </Grid>
        <Grid item xs={12}>
        <Form.Row style={{display:"flex",justifyContent:"space-around"}}>
        <Form.Group as="Col" controlId="role" style={{width:"45%"}}>
        <Form.Label>Role</Form.Label>
        <Form.Control as="select" defaultValue={props.newAccount.role} fullWidth onChange={e => props.setNewAccount(prevState => ({...prevState,role:e.target.value}))}>
        <option>Fullstack</option>
        <option>Backend</option>
        <option>Design</option>
        <option>Database Manager</option>
        <option>Quality Assurance</option>
        </Form.Control>
         </Form.Group>
        <Form.Group as="Col" controlId="role" style={{width:"45%"}}>
        <Form.Label>Status</Form.Label>
        <Form.Control as="select" defaultValue={props.newAccount.isAdmin?"Admin":"Member"} onChange={e => props.setNewAccount(prevState => ({...prevState,isAdmin:e.target.value === "Admin"}))}>
        <option>Member</option>
        <option>Admin</option>
        </Form.Control>
        </Form.Group>
        </Form.Row>





        </Grid>
      </Grid>
    </React.Fragment>
  );
}



