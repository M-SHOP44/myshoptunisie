
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import Review from './Review';
import Information from './Information';
import Link from '@mui/material/Link';
import axios from 'axios';
import IP from '../../../utils/api'




const steps = ['information personnel', 'information du shop' ,  'Verification de vos données'];

const GetStepContent = ({step , formData, setFormData}) => {
  switch (step) {
    case 0:
      return <AddressForm formData={formData} setFormData={setFormData}/>;
    case 1:
      return <Information formData={formData} setFormData={setFormData} />;
    case 2:
        return <Review formData={formData} setFormData={setFormData} />;
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


export default function Register() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ active , setActive ] = React.useState(false)

  const [formData, setFormData] = useState({
    email: '',
    confirmemail: '',
    password: '',
    confirmPassword:'',
    name: '',
    Fullname: '',
    phonenumber: '',
    address: '',
    postalcode: '',
    city: '',
    name: '',
    Fullname: '',
    tax: '',
    cin:''
})
 
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  const register = () => {
    axios.post(`${IP}/auth/shopowner/signup`, formData,{authorization: "Bearer " + localStorage.getItem("token") }).then((response) => {
      console.log(response.data);
    })
}

    React.useEffect(()=> {
        console.log(formData);
        setActive(false)
        switch ( activeStep ) {
            case 0: setActive( formData.name.length == 0 || formData.cin.length || formData.Fullname.length== 0 || formData.phonenumber.length== 0 || formData.email.length== 0 || formData.confirmemail.length== 0
            || formData.password.length == 0 || formData.confirmPassword.length == 0 ); break ;
    
            case 1 :  setActive( formData.address.length == 0 || formData.postalcode.length== 0 || formData.city.length== 0 || formData.Fullname.length== 0 || formData.tax.length== 0); break ;
            
            case 2:  setActive(true) ; break ;
    
            default: setActive(true) ; break ;
        }
    }      ,[formData,active,activeStep])



  return (
    
    <>
     <AppBar
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
              <Link href='/' underline="none">MyShopTunis</Link>
              </Typography>
              <Button sx={button} variant="contained" color="success" href='/login'>
                Already Registered
              </Button>   
          </Toolbar>
         
      </AppBar> 
      <Container component="main" maxWidth="sm" sx={{ mb: 4}}>
              <Paper variant="outlined"  sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3  }} }>
     
                  <Typography component="h1" variant="h4" align="center">
                      Register Here 
                  </Typography>
                  <Stepper  activeStep={activeStep}  sx={{ pt: 3, pb: 5}}>
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
                              <GetStepContent step={activeStep} formData={formData} setFormData={setFormData}/>
                              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                  {activeStep !== 0 && (
                                      <Button color="success" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                          Back
                                      </Button>
                                  )}

                                  <Button
                                      color='success'
                                      variant="contained"
                                      disabled={activeStep == 2 ? false : active}
                                      onClick={(() => {
                                        if (activeStep == 2)
                                        (register()) 
                                        else
                                        (handleNext())})}
                                      sx={{ mt: 3, ml: 1 }}
                                  >
                                      {activeStep === steps.length - 1 ? 'Register' : 'Next' }
                                  </Button>
                                  
                              </Box>
                          </React.Fragment>
                      )}
                  </React.Fragment>
              </Paper>
          </Container></>
  );
}