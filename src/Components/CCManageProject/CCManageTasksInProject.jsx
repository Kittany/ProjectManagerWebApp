import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    fontFamily:"poppins",
    position:"relative",
    display:"flex",
    justifyContent:"center",
    alignSelf:"center",
    flexDirection:"column",
  },
  inline: {
    display: 'inline',
  },
}));



export default class CCManageTasksInProject extends Component {

  constructor(props)
  {
    super(props);

    this.state ={
      taskInput:"",
      noteInput:"",
    }
  }


//Tasks
changeTaskInput = (event) =>{
this.setState({taskInput:event.target.value})
}

addTask = () => {
this.props.updateProjectData(this.state.taskInput,"addTask")
this.setState({taskInput:""})
}



//Notes
changeNoteInput = (event) =>{
  this.setState({noteInput:event.target.value})
  }
  
  addNote = () => {
  this.props.updateProjectData(this.state.noteInput,"addNote")
  this.setState({noteInput:""})


  }


  render() {
    return (
      <div id="CCManageTasksInProject">
    
      {/*Tasks Div*/}
      <div className="CCManageTasksInProjectChild">
      <Grid item xs={12}>
          <input
            required
            id="tasks"
            name="tasks"
            type="text"
            placeholder="Task"
            value={this.state.taskInput}
            onChange={this.changeTaskInput}
            style={{width:"85%"}}
            /*Change this to this.props.user.isAdmin*/
            disabled={!true}
          />
          <Button                /*Change this to this.props.user.isAdmin*/
          onClick={this.addTask} disabled={!true} variant="outlined" color="secondary" style={{fontFamily:"poppins",marginLeft:"1%",height:"30%",width:"10%"}}>Add</Button>
        </Grid>

      <List style={{display:"block",overflowY:"scroll",height:"95%",width:"100%",marginBottom:"1%",marginTop:"2%",padding:"15px"}}>
      {this.props.projectManagingAtTheMoment.tasks.map(task => <>
      <ListItem alignItems="flex-start" style={{marginBottom:"1%",backgroundColor:"rgb(238, 238, 238)"}}><p style={{width:"90%", margin:0,padding:0,height:"3VH", fontSize:"15px",display:"block"}}>{task}</p>
      <Button onClick={e => this.props.updateProjectData(task,"delTask")} variant="outlined" color="secondary" style={{fontFamily:"poppins",width:"10%", padding:"0"}}>X</Button>
      <Divider  component="li" />
      </ListItem></>)}
      </List>
      </div>
    
              {/*Notes Div*/}
      <div className="CCManageTasksInProjectChild">
      <Grid item xs={12}>
          <input
            required
            id="notes"
            name="notes"
            type="text"
            placeholder="Notes"
            value={this.state.noteInput}
            onChange={this.changeNoteInput}
            style={{width:"85%"}}
          />
          <Button onClick={this.addNote} variant="outlined" color="secondary" style={{fontFamily:"poppins",marginLeft:"1%",height:"30%",width:"10%"}}>Add</Button>
        </Grid>

      <List style={{display:"block",overflowY:"scroll",height:"95%",width:"100%",marginBottom:"1%",marginTop:"2%",padding:15}}>
      {this.props.projectManagingAtTheMoment.notes.map(note => <>
      <ListItem alignItems="flex-start" style={{marginBottom:"1%",backgroundColor:"rgb(238, 238, 238)"}}><p style={{width:"90%", margin:0,padding:0,height:"3VH", fontSize:"15px",display:"block"}}>{note}</p>
      <Button onClick={e => this.props.updateProjectData(note,"delNote")} variant="outlined" color="secondary" style={{fontFamily:"poppins",width:"10%", padding:"0"}}>X</Button>
      <Divider  component="li" />
      </ListItem></>)}
      </List>

        
      </div>
    </div>
    )
  }
}



