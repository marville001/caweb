import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// components
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChaseLoading from "../../components/Loading/ChaseLoading";
import { Box, styled } from "@mui/material";
import AddUser from "../AddUser/AddUser";

// Pages
const Account = React.lazy(() => import("../Account/Account"));
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
      <Sidebar open={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <DashMain open={sidebarOpen}>
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <React.Suspense fallback={<ChaseLoading />}>
          <Switch>
            <Route
              exact
              path="/admin/"
              render={(props) => <HomeDashboard {...props} />}
            />
            <Route
              exact
              path="/admin/account"
              render={(props) => <Account {...props} />}
            />
            <Route
              exact
              path="/admin/users"
              render={(props) => <ViewUsers {...props} />}
            />
            <Route
              exact
              path="/admin/users/new"
              render={(props) => <AddUser {...props} />}
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
const DashMain = styled("main")(({ theme, open }) => ({
  background: "#fff",
  minHeight: "100vh",
  flex: 1,
  marginLeft: "280px",
  [theme.breakpoints.down("md")]: {
    marginLeft: "0px",
  },
}));

export default DashboardWrapper;
