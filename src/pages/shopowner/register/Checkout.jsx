
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import Information from './Information';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const steps = ['Shipping address', 'Information', 'Payment details' ,  'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <Information />;
    case 2:
      return <PaymentForm/>;
    case 3:
        return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const button = {
    bgcolor: "#66bb6a",
    
  };
const word = {
    color: "#66bb6a"
};

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    
    <>
    {/* <AppBar
          position="absolute"
          color="inherit"
          elevation={0}
          sx={{
              position: 'relative',
              borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
      >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={word} variant="h6" color="green" noWrap>
                  Company name
              </Typography>
              <Button sx={button} variant="contained" color="success">
                Already Registered
              </Button>   
          </Toolbar>
          <Link href="/login">LOGIN</Link>
      </AppBar> */}
      <Container component="main" Width="80%" sx={{ mb: 4 }}>
              <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
     
                  <Typography component="h1" variant="h4" align="center">
                      Register Here
                  </Typography>
                  <Stepper  activeStep={activeStep} sx={{ pl: 3 ,pt: 3, pb: 5, width: "95%" }}>
                      {steps.map((label) => (
                          <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                          </Step>
                      ))}
                  </Stepper>
                  <React.Fragment>
                      {activeStep === steps.length ? (
                          <React.Fragment>
                              <Typography variant="h5" gutterBottom>
                                  Thank you for your order.
                              </Typography>
                              <Typography variant="subtitle1">
                                  Your order number is #2001539. We have emailed your order
                                  confirmation, and will send you an update when your order has
                                  shipped.
                              </Typography>
                          </React.Fragment>
                      ) : (
                          <React.Fragment>
                              {getStepContent(activeStep)}
                              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                  {activeStep !== 0 && (
                                      <Button color="success" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                          Back
                                      </Button>
                                  )}

                                  <Button
                                      color='success'
                                      variant="contained"
                                      onClick={handleNext}
                                      sx={{ mt: 3, ml: 1 }}
                                  >
                                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                  </Button>
                              </Box>
                          </React.Fragment>
                      )}
                  </React.Fragment>
              </Paper>
              {/* <Copyright /> */}
          </Container></>
  );
}