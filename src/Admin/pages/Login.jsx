import { Button, TextField } from "@material-ui/core";
import React from "react";
import "../styles/login.scss";

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
        <Button variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
