import React from "react";
import PageHeader from "../components/PageHeader";
import eventsBg from "../images/events-header-bg.jpg";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import "../styles/contact.scss";

const Contact = () => {
  return (
    <div>
      <PageHeader image={eventsBg} title="Contact Us" subtitle="Get in Touch" />{" "}
      <div className="contact-container">
        <div className="content container">
          <TextField
            label="Name"
            type="text"
            variant="outlined"
            className="input"
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            className="input"
          />
          <TextField
            label="Subject"
            type="text"
            variant="outlined"
            className="input"
          />
          <TextareaAutosize
            rowsMin={4}
            placeholder="Message"
            className="input textarea"
          />
          <Button variant="contained" color="primary">
            Send Message
          </Button>

        </div>
      </div>
    </div>
  );
};

export default Contact;
