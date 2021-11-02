import { Button, TextField } from "@mui/material";
import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Admin</h2>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          className="input"
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          className="input"
        />
        <Button className="login-btn" variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
