import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [age, setAge] = useState()
    const [phoneNumber, setPhoneNumber] = useState()

    // console.log(lastName)


  return (
    <form className="border w-[80%] mx-auto mt-3 gap-2 flex flex-col p-4">
      <div className="sm:flex gap-2">
        <TextField
          className="w-full"
          sx={{ marginBottom: "8px" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e)=>{setFirstName(e.target.value)}}
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e)=>{
            setLastName(e.target.value)
          }}
        />
      </div>

      <TextField
        className="w-full"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        onChange={(e)=>{setPhoneNumber(e.target.value)}}
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Age"
        variant="outlined"
        onChange={(e)=>{setAge(e.target.value)}}
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
      <p>Already Have An Account <Link to="/login">LOGIN</Link></p>
    </form>
  );
};

export default Signup;
