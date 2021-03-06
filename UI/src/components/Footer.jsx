import React from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <>
      {/* News and Events */}
      <div className="subscribe">
        <div className="container subscribe-content">
          <h1>Receive News and Events</h1>
          <input placeholder="Email" />
          <Button variant="contained" color="primary">
            Subscribe now
          </Button>
        </div>
      </div>
      <div className="footer">
        <div className="container footer-content">
          <div className="footer-logo">
            <h2>DEKUTCC</h2>
          </div>

          <div className="contacts">
            <h3>CONNECT</h3>
            <p>Email: dekutca01@gmail.com</p>
            <p>Phone: +254784773592</p>
            <div className="social-footer-icons">
              <Link to={{ pathname: "https://facebook.com/" }} target="_blank">
                <FacebookIcon />
              </Link>
              <Link to={{ pathname: "https://twitter.com/" }} target="_blank">
                <TwitterIcon />
              </Link>
              <Link to={{ pathname: "https://instagram.com/" }} target="_blank">
                <InstagramIcon />
              </Link>
              <Link to={{ pathname: "https://youtube.com/" }} target="_blank">
                <YouTubeIcon />
              </Link>
            </div>
          </div>

          <div className="links">
            <h3>LINKS</h3>
            <Link to="readings">Readings</Link>
            <Link to="events-activities">Activities</Link>
            <Link to="news">News</Link>
            <Link to="prayers">Morning Prayers</Link>
          </div>
          <div className="links">
            <h3>SERVICE TIME</h3>
            <Link to="readings">Sunday Mass Service</Link>
            <Link to="events-activities">9.00am - 11.00am</Link>
          </div>
        </div>
        <p style={{ textAlign: "center", margin: "20px" }}>
          Copyright &copy; 2021, DekutCC. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
