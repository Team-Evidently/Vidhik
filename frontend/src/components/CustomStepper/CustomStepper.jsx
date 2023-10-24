import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Alert, Snackbar } from '@mui/material';

const steps = ['Select an Arbitrator', 'Upload Details', 'Send Request'];

export default function CustomStepper({ updateStep ,handleSubmit}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [submissionCompleted, setSubmissionCompleted] = React.useState(false);
  const ArbritratorCount = JSON.parse(localStorage.getItem('selectedArbritrators')) || [];
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const numberOfObjects = ArbritratorCount.length;

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    console.log(numberOfObjects);
    if (numberOfObjects % 2 === 0 || numberOfObjects >= 6) {
      // Display Snackbar for invalid count
      setSnackbarOpen(true);
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    updateStep(activeStep + 1);

    if (isLastStep()) {
      // If it's the last step, mark the submission as completed
      setSubmissionCompleted(true);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSubmissionCompleted(false);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    // handleNext();
    handleSubmit();
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel sx={{ marginTop: "20px" }}>
  {steps.map((label, index) => (
    <Step key={label}>
      <StepLabel
        StepIconProps={{
          style: {
            color: index <= activeStep ? (index === activeStep ? 'blue' : 'green') : 'grey',
            fontSize: "35px", // Adjust the font size for the step number
          },
        }}
        className="text-lg" // Apply Tailwind CSS class for font size
      >
        {label}
      </StepLabel>
    </Step>
  ))}
</Stepper>

      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>

          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: 'flex', flexDirection: 'row',justifyContent:"space-between", pt: 2 ,width:"15%",marginLeft:"50px"}}>
              <Button
                variant='outlined'
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 ,fontSize:"16px"}}
                
              >
                Back
              </Button>
           

              <Button onClick={isLastStep() ? handleComplete : handleNext} sx={{ mr: 1 ,fontSize:"16px"}} variant='contained'>
                {isLastStep() ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          elevation={6}
          variant="filled"
          severity="warning"
          onClose={handleCloseSnackbar}
        >
          You can only have arbitrators in counts of 1, 3, 5, etc.
        </Alert>
      </Snackbar>
    </Box>
  );
}
