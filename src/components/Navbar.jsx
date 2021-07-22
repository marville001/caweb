import React, { useState } from 'react'

import { AppBar,  IconButton } from "@material-ui/core"

import MenuIcon from '@material-ui/icons/Menu';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ClearIcon from '@material-ui/icons/Clear';
import "../styles/navbar.scss"

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
                        <h1 className="logo">
                            DkUT Catholic Chaplaincy</h1>
                        <ul>
                            <li>
                                <a href="/about">About</a>
                                <a href="/contact">Contact</a>
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
                            <li onClick={() => setNavOpen(false)}><a style={{ marginLeft: "0px" }} href="/home">Home</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/events-activities">Events & Activities</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/news">News</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/leadership">Leadership</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/scc">SCC</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/gallery">Gallery</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/library">Library</a></li>
                            <li onClick={() => setNavOpen(false)}><a href="/readings">Readings</a></li>
                            <li onClick={() => setNavOpen(false)}><a style={{ marginRight: "0px" }} href="/prayers">Prayers</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </AppBar>
    )
}

export default Navbar
