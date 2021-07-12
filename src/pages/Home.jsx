import React from "react";

import "../styles/home.scss";
import dkut from "../images/dkut.jpeg";
import Title from "../components/Title";
import { Button } from "@material-ui/core";
const Home = (props) => {
  console.log(props);
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <div className="container hc">
            <h1>
              Blessed Sister Irene Stefani Catholic Action Dedan Kimathi
              University Of Technology
            </h1>
            <p>
              <i>"All for Jesus, Nothing for me."</i>
            </p>
            <Button className="find-out-btn">Find Out What's Happening</Button>
          </div>
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome">
        <div className="container welcome-content">
          <div className="welcome-left">
            <img alt="Welcome to DeKUTCC" src={dkut} />
          </div>
          <div className="welcome-right">
            <Title title="Welcome to DeKUTCC" />
            <p>
              The DeKUT Catholic Action Chaplaincy gets its identity from
              Blessed sister Irene Stefani? More interestingly, its not Just the
              name but also the Blessed Sister Irene Stefani Shrine whose
              fountains jet out water meters high as a symbol of life, is
              Errected at DeKUT's Hero's Garden
            </p>
            <br />
            <p>
              Her essence at the Hero's garden if found from her acts of
              courage, Charity and faith. Her famous quote,"All for Jesus and
              Nothing For me", is the DeKUT CA motto!
            </p>

            <Button
              className="learn-more-btn"
              color="secondary"
              variant="contained"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <div className="word">
        <h1>Dive into the Word of God</h1>
        <div className="wbtns">
          <Button className="wbtn" color="primary" variant="contained">
            Daily Readings
          </Button>
          <Button className="wbtn sbtn" color="secondary" variant="contained">
            Saint of the Day
          </Button>
          <Button className="wbtn dbtn" color="secondary" variant="contained">
            Daily Prayers
          </Button>
        </div>
      </div>

      {/* Shrine */}
      {/* <div className="shrine">
        <div className="container shrine-content">
          <div className="shrine-left">
            <img alt="Blessed Sister Irene Shrine" src={shrine} />
          </div>
          <div className="shrine-right">
            <Title title="Blessed Sister Irene Shrine" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              fugiat nesciunt perspiciatis commodi distinctio doloribus nulla,
              architecto sunt deserunt facere!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa
              fugiat nesciunt perspiciatis commodi distinctio doloribus nulla,
              architecto sunt deserunt fa fugiat nesciunt perspiciatis commodi
              distinctio doloribus nulla, architecto sunt deserunt facere!
            </p>

            <Button
              className="learn-more-btn"
              color="secondary"
              variant="contained"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div> */}

      {/* Events */}
      <div className="events">
        <div className="container events-content">
          <Title title="Event Calendar" />
          <hr />
          <div className="event">
            <div className="event-date">
              <h2>22-34</h2>
              <h3>July-24</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <hr />
          <div className="event">
            <div className="event-date">
              <h2>22-34</h2>
              <h3>July-24</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <hr />
          <div className="event">
            <div className="event-date">
              <h2>22-34</h2>
              <h3>July-24</h3>
            </div>
            <hr />
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <hr />
          <Button
            className="more-events-btn"
            color="secondary"
            variant="contained"
          >
            View Calendar
          </Button>
        </div>
      </div>

      {/* Live */}
      <div className="live">
        <div className="container live-content">
          <h1>Missed our Service? Catch up here or watch us live.</h1>
          <p>
            Did you end up missing our service? No worries, you can watch and or
            listen to our live service, along with many of our other messages on
            our media page.
          </p>
          <p>
            We hope that you enjoy our latest message and many other messages
            from Garden Valley Church.
          </p>

          <Button>Watch Now</Button>
        </div>
      </div>

      
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
