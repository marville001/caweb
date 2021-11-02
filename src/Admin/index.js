import React from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "./components/Loading/Loading";

// Pages
const Login = React.lazy(() => import("./pages/Login/Login"));
const DashboardWrapper = React.lazy(() => import("./pages/DashboardWrapper/DashboardWrapper"));

const Admin = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/admin/login" render={(props) => <Login {...props} />} />
        <Route path="/admin/" render={(props) => <DashboardWrapper {...props} />} />
      </Switch>
    </React.Suspense>
  );
};

export default Admin;
