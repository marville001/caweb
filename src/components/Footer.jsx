import React from "react";
import "../styles/footer.scss";
import { Link } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <h2>Logo</h2>
        </div>

        <div className="contacts">
          <h3>CONNECT</h3>
          <p>Email: dekutca01@gmail.com</p>
          <p>Phone: +254784773592</p>
          <div className="social-footer-icons">
            <Link to={{pathname:"https://facebook.com/"}} target="_blank" >
              <FacebookIcon />
            </Link>
            <Link to={{pathname:"https://twitter.com/"}} target="_blank" >
              <TwitterIcon />
            </Link>
            <Link to={{pathname:"https://instagram.com/"}} target="_blank" >
              <InstagramIcon />
            </Link>
            <Link to={{pathname:"https://youtube.com/"}} target="_blank" >
              <YouTubeIcon />
            </Link>
          </div>
        </div>

        <div className="links">
          <h3>LINKS</h3>
          <Link to="daily-readings">Readings</Link>
          <Link to="activities">Activities</Link>
          <Link to="news">News</Link>
          <Link to="prayers">Morning Prayers</Link>
        </div>
      </div>
      <p style={{ textAlign: "center", margin: "20px" }}>
        Copyright &copy; 2021, DekutCC. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
