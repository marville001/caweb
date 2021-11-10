import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import ChaseLoading from "./components/Loading/ChaseLoading";

import theme from './theme'
// Pages
const Login = React.lazy(() => import("./pages/Login/Login"));
const DashboardWrapper = React.lazy(() =>
  import("./pages/DashboardWrapper/DashboardWrapper")
);



const Admin = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Suspense fallback={<ChaseLoading />}>
        <Switch>
          <Route
            exact
            path="/admin/login"
            render={(props) => <Login {...props} />}
          />
          <Route
            path="/admin/"
            render={(props) => <DashboardWrapper {...props} />}
          />
        </Switch>
      </React.Suspense>
    </ThemeProvider>
  );
};

export default Admin;
