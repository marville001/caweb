import { Button } from "@mui/material";
import React from "react";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <div>
      <h4>Navbar</h4>
      <Button variant="contained" onClick={() => setSidebarOpen(!sidebarOpen)}>
        Toggle
      </Button>
    </div>
  );
};

export default Navbar;
