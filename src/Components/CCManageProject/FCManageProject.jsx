import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CCManageProjectDescreption from './CCManageProjectDescreption';
import CCManageTasksInProject from './CCManageTasksInProject';
import CCManageMembersInProject from './CCManageMembersInProject';
import { Alert, AlertTitle } from '@material-ui/lab';






function getStepContent(step) {
  switch (step) {
    case 0:
      return <CCManageProjectDescreption />;
    case 1:
      return <CCManageTasksInProject />;
    case 2:
      return <CCManageMembersInProject />;
    default:
      throw new Error('Unknown step');
  }
}

export default function FCCreateProject(props) {
  const steps = ['Descreption', 'Tasks & Notes'];

  //replace true with props.user.isAdmin
  if(false)
     steps.push('Users')

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div id="FCManageProject">
      <div id="FCManageProjectChild">
          <Typography component="h1" variant="h4" align="center" style={{fontFamily:"poppins",marginTop:"5px", width:"100%",height:"5%"}}>
            Project Management
          </Typography>
          <Stepper activeStep={activeStep} style={{width:"100%",height:"10%"}}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
                {getStepContent(activeStep)}
                <div style={{width:"100%",height:"10%", display:"flex",justifyContent:"flex-end",alignItems:"flex-end",marginTop:"2%"}}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} variant="outlined" style={{fontFamily:"poppins"}}>
                      Back
                    </Button>
                  )}


                     {activeStep !== steps.length-1 && (
                    <Button onClick={handleNext}  
                    variant="contained"
                    color="primary"
                    style={{fontFamily:"poppins",marginLeft:"1%"}}>
                      Next
                    </Button>
                  )}

                  </div>
          </React.Fragment>
    </div>
    </div>
  );
}