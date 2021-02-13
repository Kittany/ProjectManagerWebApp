import React,{useState} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FCManageProjectDescreption from './FCManageProjectDescreption';
import CCManageTasksInProject from './CCManageTasksInProject';
import CCManageMembersInProject from './CCManageMembersInProject';



export default function FCManageProject(props) {
  const steps = ['Descreption', 'Tasks & Notes'];

  //replace true with user.isAdmin from database
     true && steps.push('Users')

  const [activeStep, setActiveStep] = useState(0);



  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };


  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FCManageProjectDescreption projectManagingAtTheMoment={props.projectManagingAtTheMoment} updateProjectData={props.updateProjectData}/>;
      case 1:
        return <CCManageTasksInProject projectManagingAtTheMoment={props.projectManagingAtTheMoment} updateProjectData={props.updateProjectData}/>;
      case 2:
        return <CCManageMembersInProject projectManagingAtTheMoment={props.projectManagingAtTheMoment} updateProjectData={props.updateProjectData}/>;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <div id="FCManageProject" onMouseDown={props.closeProjectManageWindow}>
      <div id="FCManageProjectChild">
          <Typography component="h1" variant="h4" align="center" style={{fontFamily:"poppins",marginTop:"5px", width:"100%",height:"10%",fontWeight:"bold"}}>
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
                <div style={{width:"100%",height:"2%", display:"flex",justifyContent:"flex-end",alignItems:"flex-end",marginTop:"2%"}}>
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