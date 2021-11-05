import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

import "../styles/login.scss";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container container">
      <div className="login-form">
        <h1 className="form-title">Login Here</h1>
        <div className="input-group">
          <label className="input-label">Email</label>
          <TextField
            name="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
            type="email"
            fullWidth
          />
        </div>

        <div className="input-group">
          <label className="input-label">Password</label>
          <TextField
            name="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Enter your password"
            type="password"
            fullWidth
          />
        </div>
        <Button fullWidth variant="contained">
          Login
        </Button>

        <h4 className="or">Or</h4>

        <Button fullWidth>
          Register Here
        </Button>
      </div>
    </div>
  );
};

export default Login;
