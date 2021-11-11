import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
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
    course: "",
    gender: "",
    email: "",
    password: "",
  });

  const courses = {
    science: [
      { value: "cs", name: "Computer Science" },
      { value: "it", name: "Information Technology" },
      { value: "bbit", name: "Business Information Technology" },
    ],
    business: [
      { value: "bba", name: "Business Administration" },
      { value: "bcom", name: "Business Commerce" },
    ],
    engineering: [
      { value: "mechanical", name: "Mechanical Engineering" },
      { value: "mechatronics", name: "Mechatronics Engineering" },
    ],
  };

  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container container">
      <div className="login-form">
        <h1 className="form-title">Register Here</h1>
        <div className="grid-form">
          <div className="input-group">
            <TextField
              name="name"
              variant="outlined"
              label="Full Name"
              value={user.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              type="text"
              fullWidth
            />
          </div>

          <div className="input-group">
            <TextField
              name="email"
              variant="outlined"
              label="Email"
              value={user.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              type="email"
              fullWidth
            />
          </div>
          <FormControl fullWidth>
            <InputLabel id="school-label" className="input-label">School</InputLabel>
            <Select
              value={user.school}
              name="school"
              labelId="school-label"
              label="School"
              onChange={handleInputChange}
            >
              <MenuItem value="science">School of Science</MenuItem>
              <MenuItem value="business">School of Business</MenuItem>
              <MenuItem value="engineering">School of Engineering</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="course-label" className="input-label">
              Course
            </InputLabel>
            <Select
              value={user.course}
              name="course"
              labelId="course-label"
              label="Course"
              onChange={handleInputChange}
              disabled={user.school ? false : true}
            >
              {courses[user.school]?.map((c) => (
                <MenuItem value={c.value}>{c.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <div className="input-group">
            <TextField
              name="contact"
              variant="outlined"
              label="Phone Number"
              value={user.contact}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              type="text"
              fullWidth
            />
          </div>
          <div className="input-group">
            <TextField
              variant="outlined"
              label="Password"
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
        </div>
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
