import React,{Component} from 'react';
import { Button } from '@material-ui/core';


export default class CCManageProjectDescreption extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
     deadline:this.props.projectManagingAtTheMoment.deadline,
     descreption:this.props.projectManagingAtTheMoment.descreption
    }
  }



//Methods
changeDeadline = (event) => this.setState({deadline:event.target.value})

changeDescreption = (event) => this.setState({descreption:event.target.value})




  render() 
  {
    return (
      <div id="CCManageProjectDescreption">
        <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Project Status</label>{this.props.projectManagingAtTheMoment.status === "Open"?<h4 style={{fontWeight:"bold",color:"green"}}>Open</h4>:<h4 style={{color:"red",fontWeight:"bold"}}>Closed</h4>} </div>
         <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Project Name</label> <input required id="projectName" name="projectName" type="text" disabled fullWidth value={this.props.projectManagingAtTheMoment.name}/></div>
         <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Open Date</label> <input required id="openDate" name="openDate" type="date" value={this.props.projectManagingAtTheMoment.openDate} disabled/> </div>
          {/*replace true in "disabled" with this.props.user.isAdmin so the admin only can change the deadline time & see the close project button, date fromat = 2021-02-25*/} 
          <div className="CCManageProjectDescreptionChild"><label style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Deadline</label> <input onChange={this.changeDeadline}  disabled={!true || this.props.projectManagingAtTheMoment.status !== 'Open'}  required id="deadline" value={this.state.deadline} name="deadline" type="date" onChange={this.changeDeadline}/> {true && this.props.projectManagingAtTheMoment.status === "Open"?<Button variant="outlined" color="secondary" style={{fontFamily:"poppins"}}>Close Project</Button>:<Button variant="outlined" style={{fontFamily:"poppins",borderColor:"green",color:"green"}}>Open Again</Button>}</div>
          
          <div className="CCManageProjectDescreptionChild"><label style={{fontWeight:"bold", fontSize:"20px"}}>Project Goal</label> <input onChange={this.changeDescreption} disabled={!true} required id="descreption" descreption="deadline" type="text" placeholder="Write a short descpretion about the project"  value={this.state.descreption} style={{width:"100%",height:"90%"}}/></div>
      </div>
    )
  }
}


