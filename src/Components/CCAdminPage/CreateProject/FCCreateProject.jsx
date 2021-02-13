import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FCSetProjectDescreption from './FCSetProjectDescreption';
import CCAddTasksToProject from './CCAddTasksToProject';
import CCAddMembersToProject from './CCAddMembersToProject';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: '100%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(550 + theme.spacing(2) * 2)]: {
      width: "100%",
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
      
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Project Descreption', 'Set Tasks', 'Assign Users'];



export default function FCCreateProject(props) {

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FCSetProjectDescreption errorMessage={errorMessage} newProject={newProject} setErrorMessage={setErrorMessage} manageNewProject = {manageNewProject} />;
      case 1:
        return <CCAddTasksToProject  newProject={newProject} manageNewProject = {manageNewProject}/>;
      case 2:
        return <CCAddMembersToProject newProject={newProject} manageNewProject = {manageNewProject}/>;
      default:
        throw new Error('Unknown step');
    }
  }



  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errorMessage,setErrorMessage] = React.useState("")

  //Create new project with default values
  let tomorrow = new Date();
  tomorrow.setDate(new Date().getDate()+1)
  const [newProject,manageNewProject] = 
  new React.useState({name:"",openDate:new Date().toISOString().substring(0,10),deadline:tomorrow.toISOString().substring(0,10),users:[],tasks:[],notes:[],descreption:"",status:true})

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div id="FCCreateProject" onMouseDown={props.closeCreateProjectWindow}>
      <div id="FCCreateProjectChild">
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper} style={{margin:0}}>
          <Typography component="h1" variant="h4" align="center" style={{fontFamily:"poppins"}}>
            Start A Project
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button} style={{fontFamily:"poppins"}}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={activeStep === steps.length-1? e => (props.updateProjectData(newProject,"CreateProject")):errorMessage === "" && newProject.name.trim() !== "" && handleNext}
                    className={classes.button} style={{fontFamily:"poppins"}}
      
                  >
                    {activeStep === steps.length - 1 ? 'Start Project' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
    </div>
    </div>
  );
}