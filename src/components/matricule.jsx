import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMatricule() {
  const [choice, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{  minWidth: 340 }}>
        <InputLabel id="demo-simple-select-standard-label">Do you have a tax number ? *</InputLabel>
        <Select
          required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={choice}
          onChange={handleChange}
          label="Choose an option"
        >
          
          <MenuItem>Yes</MenuItem>
          <MenuItem>No</MenuItem>
        </Select>
      </FormControl>
      </div>
      
)}