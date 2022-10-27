import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


export default function AddressForm({formData,setFormData}) {
  
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChanges = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [values, setValues] = React.useState({
    password: '',
    reenterpassword: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={11} md={6}>
        <TextField  sx={{  width: '100%' }}
              required
              fullWidth
              id="The shop name"
              label="The shop name"
              name="The shop name"
              autoComplete="name"
              autoFocus
              value={formData.name} 
              onChange={event => {setFormData({...formData, name:event.target.value})}}
              />
      </Grid>
       
        <Grid item sm={11} md={6}>
        <TextField 
              required
              fullWidth
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={formData.cin}
              type="number"
              label="CIN"
              onChange={event => {setFormData({...formData, cin:event.target.value})}}
            />
          </Grid>
        <Grid item sm={11} md={6}>
        <TextField 
              required
              fullWidth
              id="Full name"
              label="Full name"
              name="Full name"
              autoComplete="Full name"
              autoFocus
              value={formData.Fullname} 
              onChange={event => {setFormData({...formData, Fullname:event.target.value})}}
            />
          </Grid>
          <Grid item sm={11} md={6} >
        <TextField  sx={{  width: '100%' }}
              required
              fullWidth
              id="Enter your phone number"
              label="Enter your phone number"
              name="Enter your phone number"
              autoComplete="Enter your phone number"
              autoFocus
              value={formData.phonenumber} 
              onChange={event => {setFormData({...formData, phonenumber:event.target.value})}}
            />
        </Grid>  
        <Grid item sm={11} md={6}>
        <TextField  
              required
              fullWidth
              id="New email"
              label="New email"
              name="New email"
              autoComplete="New email"
              autoFocus
              value={formData.email} 
              onChange={event => {setFormData({...formData, email:event.target.value})}}
            />
        </Grid>
        <Grid item xs={11} md={6}>
        <TextField 
              required
              fullWidth
              id="email"
              label="Confirm new email"
              name="Confirm new email"
              autoComplete="email"
              autoFocus
              value={formData.confirmemail} 
              onChange={event => {setFormData({...formData, confirmemail:event.target.value})}}
            />
        </Grid>  

       <Grid item xs={11} md={6}>
        <FormControl  sx={{ width: "100%" }} variant="outlined">
        <InputLabel  required htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput  
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
       
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      </Grid>
        <Grid item xs={11} md={6} >
        <FormControl   sx={{ width: "100%" }} variant="outlined">
        <InputLabel  required htmlFor="outlined-adornment-password">Reenter Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Reenter Password"
        />
      </FormControl>
      </Grid>  
     
      </Grid>
    </React.Fragment>
  );
}

