import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectIdentity() {
  const [choice, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{  minWidth: 535 }}>
        <InputLabel id="demo-simple-select-standard-label">Type of identity document of the owner of the company or legal representative *</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={choice}
          onChange={handleChange}
          label="Choose an option"
        >
          
          <MenuItem>Passport</MenuItem>
          <MenuItem>Carte d'identité nationale</MenuItem>
        </Select>
      </FormControl>
      </div>
      
)}