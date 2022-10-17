import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SelectVariants from '../../../Component/select';
import InputAdornments from '../../../Component/password';


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="The Shop name"
            name="The Shop name"
            label="The Shop name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <SelectVariants/>
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Full name"
            name="Full name"
            label="Full name"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Enter Your Phone Number"
            name="Enter Your Phone Number"
            label="Enter Your Phone Number"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="New email"
            name="New email"
            label="New email"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <TextField
            required
            id="Confirm new email"
            name="Confirm new email"
            label="Confirm new email"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={11} md={6}>
          <InputAdornments 
            
          />
        </Grid>
        
        <Grid item xs={11}>
          <FormControlLabel
            control={<Checkbox color="success" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

