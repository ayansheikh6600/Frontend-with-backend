import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
    <form className="border w-[80%] mx-auto mt-3 gap-2 flex flex-col p-4">
      <div className="sm:flex gap-2">
        <TextField
          className="w-full"
          sx={{ marginBottom: "8px" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
        />
      </div>

      <TextField
        className="w-full"
        id="outlined-basic"
        label="Email"
        variant="outlined"
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Password"
        variant="outlined"
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Age"
        variant="outlined"
      />
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={value}
        // onChange={handleChange}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <Button variant="contained">Signup</Button>
    </form>
  );
};

export default Signup;
