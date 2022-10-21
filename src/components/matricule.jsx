import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectMatricule() {
  const [choice, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-controlled-open-select-label">
          Do you have a tax number ? *
        </InputLabel>
        <Select
          required
          fullWidth
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          onClose={handleClose}
          onOpen={handleOpen}
          value={choice}
          label="Do you have a tax number ?"
          onChange={handleChange}
        >
          <MenuItem>Yes</MenuItem>
          <MenuItem>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
