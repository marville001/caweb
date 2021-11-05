import React, { useState } from "react";

import {  IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import ClearIcon from "@mui/icons-material/Clear";
import "../styles/navbar_.scss";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNavbar = () => {
    setNavOpen(!navOpen);
  };

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  console.log(id, setAnchorEl);
  return (
    <div className="appBar">
      <div className="container navbar">
        <Link onClick={() => setNavOpen(false)} to="/home" className="logo">
          DKUT CC
        </Link>
        <div className={navOpen ? "nav_left open" : "nav_left"}>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/events-activities">
            Events
          </Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/leadership">Leadership</Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/news">
            News
          </Link>         
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/gallery">
            Gallery
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/scc">
            SCC
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item" to="/prayers">
            Prayers
          </Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/library">Library</Link>
          <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/contact">Contact</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/about">About</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item nav_item_menu" to="/readings">Readings</Link>
          <p className="nav_item menu">
              <span>More+</span>
          <div className="menu-items">
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/contact">Contact</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/about">About</Link>
            <Link onClick={() => setNavOpen(false)} className="nav_item" to="/readings">Readings</Link>
          </div>
          </p>
        </div>
        <div className="nav_right">
          <button onClick={()=>history.push("/login")} style={{marginRight:"5px"}} className="login_btn">Login or Register</button>
          <IconButton
            onClick={toggleNavbar}
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="menu"
          >
            {navOpen ? <ClearIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
