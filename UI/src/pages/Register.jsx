import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

import "../styles/login-register.scss";

import { useHistory } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    name: "",
    contact: "",
    school: "",
    gender: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container container">
      <div className="login-form">
        <h1 className="form-title">Register Here</h1>
        <div className="input-group">
          <FormLabel className="input-label">Full Name</FormLabel>
          <TextField
            name="name"
            value={user.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
            type="text"
            fullWidth
          />
        </div>

        <div className="input-group">
          <FormLabel className="input-label">Email</FormLabel>
          <TextField
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            type="email"
            fullWidth
          />
        </div>
        <FormControl fullWidth>
          <FormLabel className="input-label">School</FormLabel>
          <Select
            value={user.school}
            name="school"
            onChange={handleInputChange}
          >
            <MenuItem value="science">School of Science</MenuItem>
            <MenuItem value="business">School of Business</MenuItem>
            <MenuItem value="engineering">School of Engineering</MenuItem>
          </Select>
        </FormControl>
        <div className="input-group">
          <FormLabel className="input-label">Phone Number</FormLabel>
          <TextField
            name="contact"
            value={user.contact}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
            type="text"
            fullWidth
          />
        </div>
        <div className="input-group">
          <FormLabel className="input-label">Password</FormLabel>
          <TextField
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            type="password"
            fullWidth
          />
        </div>

        <FormControl component="fieldset">
          <FormLabel className="input-label" component="legend">
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-label="gender"
            defaultValue="female"
            value={user.gender}
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
        <div style={{margin:"10px"}} />

        <Button fullWidth variant="contained">
          Register
        </Button>

        <h5 className="or">Already have an account?</h5>

        <Button fullWidth onClick={() => history.push("/login")}>
          Login Here
        </Button>
      </div>
    </div>
  );
};

export default Login;
