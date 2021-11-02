import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Loading from "../../components/Loading/Loading";
import { Box, styled } from "@mui/material";

// Pages
const HomeDashboard = React.lazy(() =>
  import("../HomeDashboard/HomeDashboard")
);

const DashboardWrapper = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <DashContainer>
      <Sidebar open={sidebarOpen} />
      <DashMain>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route
              path="/admin/"
              render={(props) => <HomeDashboard {...props} />}
            />
          </Switch>
        </React.Suspense>
      </DashMain>
    </DashContainer>
  );
};

const DashContainer = styled(Box)((theme) => ({
  background: "whitesmoke",
  minHeight: "100vh",
  display: "flex",
}));
const DashMain = styled("main")((theme) => ({
  background: "#fff",
  minHeight: "100vh",
  flex: 1,
}));

export default DashboardWrapper;
