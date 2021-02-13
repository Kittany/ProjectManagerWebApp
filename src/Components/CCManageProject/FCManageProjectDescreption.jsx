import React from 'react';
import { Button } from '@material-ui/core';

//Change all !true to !user.isAdmin

export default function FCManageProjectDescreption(props) {

  return (
    <div id="CCManageProjectDescreption">
    <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Project Status</label>{props.projectManagingAtTheMoment.status?<h4 style={{fontWeight:"bold",color:"green"}}>Open</h4>:<h4 style={{color:"red",fontWeight:"bold"}}>Closed</h4>} </div>
     <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Project Name</label> <input required name="projectName" type="text" disabled fullWidth value={props.projectManagingAtTheMoment.name}/></div>
     <div className="CCManageProjectDescreptionChild"><label  style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Open Date</label> <input required  name="openDate" type="date" value={props.projectManagingAtTheMoment.openDate} disabled/> </div>
      {/*replace true in "disabled" with props.user.isAdmin so the admin only can change the deadline time & see the close project button, date fromat = 2021-02-25*/}                                                                                                                                                                                                                                            
      <div className="CCManageProjectDescreptionChild"><label style={{fontWeight:"bold", fontSize:"20px",marginRight:"5px"}}>Deadline</label> <input onChange={props.updateProjectData} name="deadline" disabled={!true || !props.projectManagingAtTheMoment.status}  required id="deadline" value={props.projectManagingAtTheMoment.deadline} type="date"/> {props.projectManagingAtTheMoment.status?<Button onClick={props.updateProjectData} disabled={!true || !props.projectManagingAtTheMoment.status} variant="outlined" color="secondary" style={{fontFamily:"poppins"}}>Close Project</Button>:<Button onClick={props.updateProjectData} disabled={!true} variant="outlined" style={{fontFamily:"poppins",borderColor:"green",color:"green"}}>Open Again</Button>}</div>
      
      <div className="CCManageProjectDescreptionChild"><label style={{fontWeight:"bold", fontSize:"20px"}}>Descreption</label> <input onChange={props.updateProjectData} name="descreption" disabled={!true || !props.projectManagingAtTheMoment.status} type="text" placeholder="Write a short descpretion about the project"  value={props.projectManagingAtTheMoment.descreption} style={{width:"100%",height:"90%"}}/></div>
  </div>
  )
}



