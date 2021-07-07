import React, { useState } from 'react'
import { Link } from "react-router-dom"

import { AppBar, Toolbar, Typography, useMediaQuery, IconButton } from "@material-ui/core"

import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import ClearIcon from '@material-ui/icons/Clear';
import "../styles/navbar.scss"

const Navbar = () => {
    const matches = useMediaQuery("(min-width:600px)");
    const [navOpen, setNavOpen] = useState(false)

    const toggleNavbar = () => {
        setNavOpen(!navOpen);
    }

    return (
        <AppBar position="static" className="appBar" style={{ backgroundColor: "white" }}>
            {matches && <div className="topBar">
                <Typography className="contactDet">
                    <CallIcon style={{ marginRight: "2px" }} /> 4487847847887448
                </Typography>
                <Typography className="contactDet" style={{ marginRight: "30px" }}>
                    <MailIcon style={{ marginRight: "2px" }} /> dekutemail@email.dkut
                </Typography>
                <div className="socialIcons">
                    <Link to="http:facebook.com" className="socialLink">
                        <FacebookIcon className="socialLinkIcon" fontSize="medium" />
                    </Link>
                    <Link to="http:facebook.com" className="socialLink">
                        <TwitterIcon className="socialLinkIcon" fontSize="medium" />
                    </Link>
                    <Link to="http:facebook.com" className="socialLink">
                        <InstagramIcon className="socialLinkIcon" fontSize="medium" />
                    </Link>
                </div>
            </div>}
            <Toolbar className="nav">
                <h1>Weee</h1>

                <ul className={navOpen ? "open" : ""}>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Home</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">About Us</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">News</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Events & Activities</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Leadership</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">SCC</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Gallery</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Library</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Readings</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Prayers</a></li>
                    <li onClick={() => setNavOpen(false)}><a href="/home">Contact Us</a></li>
                </ul>

                <IconButton onClick={toggleNavbar} edge="start" className="menuButton" color="inherit" aria-label="menu">
                    {navOpen ? <ClearIcon /> : <MenuIcon />}
                </IconButton>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
