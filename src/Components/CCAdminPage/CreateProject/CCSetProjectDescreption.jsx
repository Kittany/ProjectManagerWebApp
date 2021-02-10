import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


export default class CCSetProjectDescreption extends Component {
  render() {
    return (
      <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}> 
          <TextField
            required
            id="projectName"
            name="projectName"
            label="Project Name"
            fullWidth
          />
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
          />
        </Grid>
        
        <Grid item xs={12}>
          <label htmlFor="" style={{fontWeight:"bold", fontSize:"20px"}}>Project Goal</label>
          <br></br>
          <input
            required
            id="deadline"
            name="deadline"
            type="text"
            placeholder="Write a short descpretion about the project"
            style={{width:"80%",height:"100%"}}
          />
        </Grid>

      </Grid>
    </React.Fragment>
    )
  }
}

