import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


export default class CCManageProjectDescreption extends Component {
  constructor(props)
  {
    super(props)

    this.state = {
    //replace it with the deadline from the object of the project
    deadline:""

    }
  }

//Methods
changeDeadline = (event) =>{
this.setState({deadline:event.target.value})
}

  render() {
    return (
      <div id="CCManageProjectDescreption">
         <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Project Name</label> <input required id="projectName" name="projectName" type="text" disabled fullWidth value="Project name should be here" /></div>
         <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Open Date</label> <input required id="deadline" name="deadline" type="date" disabled/> </div>
          {/*replace true in "disabled" with this.props.user.isAdmin so the admin only can change the deadline time & see the close project button, date fromat = 2021-02-25*/}
          <div className="CCManageProjectDescreptionChild"><label style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Deadline</label> <input disabled={!true} required id="deadline" name="deadline" type="date" onChange={this.changeDeadline}/> {true && <Button variant="outlined" color="secondary" style={{fontWeight:"bold",fontFamily:"poppins"}}>Close Project</Button>}</div>
          
          
          <div className="CCManageProjectDescreptionChild"><label style={{fontWeight:"bold", fontSize:"20px"}}>Project Goal</label> <input disabled={!true} required id="deadline" name="deadline" type="text" placeholder="Write a short descpretion about the project"  value="Project descpretion should be here" style={{width:"100%",height:"90%"}}/></div>
      </div>
    )
  }
}


