import React from "react";
import {  Switch } from "react-router-dom";

// components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loading from "../../components/Loading/Loading";
import { Box, styled } from "@mui/material";

// Pages
// const Login = React.lazy(() => import("./pages/Login/Login"));

const DashContainer = styled(Box)((theme)=>({
    background:"whitesmoke",
    minHeight: "100vh"
}))

const DashboardWrapper = () => {
  return (
    <DashContainer>
      <Navbar />
      <Sidebar />
      <React.Suspense fallback={<Loading />}>
        <Switch>
          {/* <Route exact path="/admin/login" render={(props) => <Login {...props} />} />
        <Route path="/admin/" render={(props) => <DashboardWrapper {...props} />} /> */}
        </Switch>
      </React.Suspense>
    </DashContainer>
  );
};
export default DashboardWrapper;
