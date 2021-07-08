import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom"
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#173355",
    },
    secondary: {
      main: "#f47431"
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
