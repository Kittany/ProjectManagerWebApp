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



export default class CCAddTasksToProject extends Component {

  constructor(props)
  {
    super(props);

    this.state ={
      taskInput:"",
    }
  }


changeTaskInput = (event) =>{
this.setState({taskInput:event.target.value})
}


addTask = () => {
  if (this.state.taskInput.trim() == "" || this.props.newProject.tasks.filter(task => task == this.state.taskInput).length == 1 || this.state.taskInput.length > 40)
      return;

this.props.manageNewProject((prevState) => ({...prevState,tasks:[...this.props.newProject.tasks,this.state.taskInput]}))
this.setState({taskInput:""})

}

deleteTask = (value) =>{
  this.props.manageNewProject((prevState) => ({...prevState,tasks:[...this.props.newProject.tasks].filter(task => task !== value)}))
}


  render() {
    return (
      <React.Fragment>
      <Grid item xs={12}>
          <input
            required
            id="deadline"
            name="deadline"
            type="text"
            placeholder="Task"
            value={this.state.taskInput}
            onChange={this.changeTaskInput}
            style={{width:"80%"}}
          />
          <Button onClick={this.addTask} variant="outlined" color="secondary" style={{fontFamily:"poppins",marginLeft:"3%",height:"30%",width:"10%"}}>Add</Button>
        </Grid>

      <List style={{display:"block",overflowY:"scroll",height:"30vh",marginBottom:"4%",marginTop:"2%",padding:0}}>
      {this.props.newProject.tasks.map(task => <>
      <ListItem alignItems="flex-start" style={{marginBottom:"1%",backgroundColor:"rgb(238, 238, 238)"}}><p style={{width:"90%", margin:0,padding:0,height:"3VH", fontSize:"15px",display:"block"}}>{task}</p>
      <Button onClick={e => this.deleteTask(task)} variant="outlined" color="secondary" style={{fontFamily:"poppins",width:"10%", padding:"0"}}>X</Button>
      <Divider  component="li" />
      </ListItem></>)}
      
      
    
      </List>
    </React.Fragment>
    )
  }
}



