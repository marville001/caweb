import React, { useState } from 'react'

import { AppBar,  IconButton } from "@material-ui/core"

import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import "../styles/navbar.scss"
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    }

    return (
        <AppBar position="static" className="appBar">
            <div className="nav">
                <div className="topNav">
                    <div className="container justify-between">
                        <h1 className="logo">DeKUT Catholic Chaplaincy</h1>
                        <ul>
                            <li>
                                <Link to="/about">About</Link>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <SearchOutlinedIcon />
                        </ul>
                        <IconButton onClick={toggleNavbar} edge="start" className="menuButton" color="inherit" aria-label="menu">
                            {navOpen ? <ClearIcon /> : <MenuIcon />}
                        </IconButton>
                    </div>
                </div>

                <div className="navs">
                    <div className="container">
                        <ul className={navOpen ? " open" : ""}>
                            <li onClick={() => setNavOpen(false)}><Link style={{ marginLeft: "0px" }} to="/home">Home</Link></li>
                            <li onClick={() => setNavOpen(false)}><Link to="/events-activities">Events & Activities</Link></li>
                            <li onClick={() => setNavOpen(false)}></li>
                            <li onClick={() => setNavOpen(false)}><Link to="/leadership">Leadership</Link></li>
                            <li onClick={() => setNavOpen(false)}><Link to="/scc">SCC</Link></li>
                            <li onClick={() => setNavOpen(false)}><Link to="/gallery">Gallery</Link></li>
                            <li onClick={() => setNavOpen(false)}><Link to="/library">Library</Link></li>
                            <li onClick={() => setNavOpen(false)}><Link to="/readings">Readings</Link></li>
                            <li onClick={() => setNavOpen(false)}><Link style={{ marginRight: "0px" }} to="/prayers">Prayers</Link></li>
                        </ul>
                    </div>
                </div>

            </div>
        </AppBar>
    )
}

export default Navbar
