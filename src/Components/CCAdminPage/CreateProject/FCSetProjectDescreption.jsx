import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';




export default function FCSetProjectDescreption(props) {



  // change to all the projects available on the database
  const [projects,setProjects] = useState([
    {name:"Skype",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"lolo"}],tasks:["task1"],notes:["note1"],descreption:"bla bla bla",status:true},
    {name:"Facebook",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"meow"},{username:"lolo"}],tasks:["task2"],notes:["note3"],descreption:"bla bla bla",status:true},
    {name:"Youtube",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"meow"}],tasks:["task1"],notes:["note1"],descreption:"bla bla bla",status:false},
    {name:"Google",openDate:"2020-05-30",deadline:"2021-10-20",users:[{username:"3bbod"},{username:"lolo"}],tasks:["task"],notes:["note5"],descreption:"bla bla bla",status:false}
  ])


const manageProjectName = (e) =>{
  props.manageNewProject((prevState) => ({...prevState,name:e.target.value}))
  props.setErrorMessage("")
}

const manageProjectNameErrorMessage = (e)=>{
  props.manageNewProject((prevState) => ({...prevState,name:e.target.value}))
  props.setErrorMessage("Project name is taken, try another.")
}




  return (
    <React.Fragment>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}> 
        <TextField
          required
          id="projectName"
          name="projectName"
          label="Project Name"
          value={props.newProject.name}
          fullWidth
          onChange={e => projects.some(project => project.name.toLowerCase() === e.target.value.toLowerCase())?manageProjectNameErrorMessage(e) : manageProjectName(e)}
        />
          <p style={{color:"red",marginTop:"3%",fontSize:"13px",fontFamily:"poppins"}}>{props.errorMessage}</p>
      </Grid>
  
      <Grid item xs={12}>
        <label htmlFor="" style={{fontWeight:"bold", fontSize:"20px"}}>Deadline</label>
        <br></br>
        <input
          required
          id="deadline"
          name="deadline"
          type="date"
          fullWidth
          value={props.newProject.deadline}
          onChange={e => console.log(e.target.value)}
        />
      </Grid>
      
      <Grid item xs={12}>
        <label htmlFor="" style={{fontWeight:"bold", fontSize:"20px"}}>Project Goal</label>
        <br></br>
        <input
          required
          id="descreption"
          name="descreption"
          type="text"
          placeholder="Write a short descpretion about the project"
          style={{width:"80%",height:"100%"}}
          onChange={e => props.manageNewProject((prevState) => ({...prevState,descreption:e.target.value}))}
        />
      </Grid>

    </Grid>
  </React.Fragment>
  )
}


