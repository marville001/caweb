import React, { useState } from "react";
import { Box, Button, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

const SidebarContainer = styled(Box)(({ theme, open }) => ({
  background: "#fff",
  width: open ? "280px" : "0px",
  borderRight: "1px solid #f5f5f1",
  padding: open?"20px":"0px",
  transition:"all .3s linear",
  [theme.breakpoints.down("md")]: {
    transform: open ? "translateX(0)" : "translateX(-100%)",
    opacity: open ? 1 : 0,
    zIndex: open ? 100 : -1,
  },
}));

const Sidebar = ({ open }) => {
  return (
    <SidebarContainer open={open}>
      <div>
        <h1 className="side-title">My Title</h1>
        <ul>
          <li>Dashboard</li>
          <NavLink to="/admin/"></NavLink>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
