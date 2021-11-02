import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import SidebarMenuItem from "./SidebarMenuItem";
import { Home, PeopleAlt, Event, Notifications,Analytics, Message } from "@mui/icons-material";

const dashitems = [
  { to: "/admin/", label: "Home", icon: <Home /> },
  { to: "/admin/users", label: "Users", icon: <PeopleAlt /> },
  { to: "/admin/events", label: "Events", icon: <Event /> },
];

const genitems = [
  { to: "/admin/analytics", label: "Analytics", icon: <Analytics /> },
  { to: "/admin/notifications", label: "Notifications", icon: <Notifications /> },
  { to: "/admin/messages", label: "Messages", icon: <Message /> },
];

const Sidebar = ({ open }) => {
  return (
    <SidebarContainer open={open}>
      <div>
        <SidebarHeader>
          <h3>Welcome</h3>
        </SidebarHeader>
        <SidebarMenuItem items={dashitems} title="Dashboard" />
        <SidebarMenuItem items={genitems} title="General" />
        <SidebarMenuItem />
        <SidebarMenuItem />
        <SidebarMenuItem />

        <LogoutButton>
          <Button style={{flex: 1}} variant="contained">Logout</Button>
        </LogoutButton>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled(Box)(({ theme, open }) => ({
  background: "#fff",
  position: "sticky",
  top: "0px",
  left: "0px",
  height: "100vh",
  overflow: "auto",
  width: open ? "280px" : "0px",
  borderRight: "2px solid #f5f5f1",
  transition: "all .3s linear",
  [theme.breakpoints.down("md")]: {
    transform: open ? "translateX(0)" : "translateX(-100%)",
    opacity: open ? 1 : 0,
    zIndex: open ? 100 : -1,
  },
  [theme.breakpoints.up("md")]: {
    transform: "translateX(0)",
    opacity: 1,
    zIndex: 100,
    width: "280px",
  },
}));

const SidebarHeader = styled(Box)(({ theme, open }) => ({
  height:"100px",
  // textAlign:"center",
  padding:"30px",
  // backgroundColor:theme.palette.primary.light
}))

const LogoutButton = styled(Box)(({ theme, open }) => ({
  display:"flex",
  justifyContent:"center",
  padding:"20px 40px"
}))

export default Sidebar;
