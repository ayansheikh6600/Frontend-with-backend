import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";

const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [gender, setGender] = useState();

  // console.log(gender)
  const SignupHandler = async (e) => {
    e.preventDefault();
    console.log("loginHandler");

    try {
      if (
        !firstName ||
        !lastName ||
        !age ||
        !gender ||
        !email ||
        !password ||
        !phoneNo
      ) {
        alert("required field are missing");
        return;
      }

      const ObjToSend = {
        firstName,
        lastName,
        email,
        password,
        age,
        phoneNo,
        gender,
      };

      // return console.log(ObjToSend)

      const response = await axios.post(`${BASE_URL}/api/signup`, ObjToSend);
      if (response.data.status) {
        // navigate("/");
        
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log("error", error.message);
      alert("error", error.message);
    }
  };

  return (
    <form
      onSubmit={SignupHandler}
      className="border w-[80%] mx-auto mt-3 gap-2 flex flex-col p-4"
    >
      <div className="sm:flex gap-2">
        <TextField
          className="w-full"
          sx={{ marginBottom: "8px" }}
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <TextField
          className="w-full"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
      </div>

      <TextField
        className="w-full"
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Password"
        type="password"
        variant="outlined"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        onChange={(e) => {
          setPhoneNo(e.target.value);
        }}
      />
      <TextField
        className="w-full"
        id="outlined-basic"
        label="Age"
        variant="outlined"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        // value={s}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>

      <Button type="submit" variant="contained">
        Signup
      </Button>
      <p>
        Already Have An Account <Link to="/login">LOGIN</Link>
      </p>
    </form>
  );
};

export default Signup;
