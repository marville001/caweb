import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChaseLoading from "../../components/Loading/ChaseLoading";
import { Box, styled } from "@mui/material";

// Pages
const HomeDashboard = React.lazy(() =>
  import("../HomeDashboard/HomeDashboard")
);
const ViewUsers = React.lazy(() => import("../ViewUsers/ViewUsers"));
const ViewEvents = React.lazy(() => import("../ViewEvents/ViewEvents"));
const Analytics = React.lazy(() => import("../Analytics/Analytics"));
const Notifications = React.lazy(() =>
  import("../Notifications/Notifications")
);
const Messages = React.lazy(() => import("../Messages/Messages"));

const DashboardWrapper = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <DashContainer>
      <Sidebar open={sidebarOpen} />
      <DashMain>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <React.Suspense fallback={<ChaseLoading />}>
          <Switch>
            <Route
              exact
              path="/admin/"
              render={(props) => <HomeDashboard {...props} />}
            />
            <Route
              path="/admin/users"
              render={(props) => <ViewUsers {...props} />}
            />
            <Route
              path="/admin/events"
              render={(props) => <ViewEvents {...props} />}
            />
            <Route
              path="/admin/analytics"
              render={(props) => <Analytics {...props} />}
            />
            <Route
              exact
              path="/admin/notifications"
              render={(props) => <Notifications {...props} />}
            />
            <Route
              path="/admin/messages"
              render={(props) => <Messages {...props} />}
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
