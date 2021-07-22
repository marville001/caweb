import React from "react";

import "../styles/home.scss";
import dkut from "../images/dkut.jpeg";
import Title from "../components/Title";
import { Button } from "@material-ui/core";
import HomeCarousel from "../components/HomeCarousel";
const Home = (props) => {
  console.log(props);
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
            <HomeCarousel />
      </div>

      <div className="new-mass">
        <div className="container new-mass-content">
          <h1>NEW! MASS TIME</h1>
          <h2>Weekdays Mass: Wed 1:15 pm, Thur 4:00 pm</h2>
          <h3>Sunday Mass: 9:00 am - 11:00 am</h3>

          <h4>Please wear a mask if you are not vaccinated</h4>

          <p>all are welcome!</p>
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome">
        <div className="container welcome-content">
          <h1>WELCOME TO DEKUT CATHOLIC CHAPLAINCY</h1>
          <p>We come together as a Parish family. As a Eucharistic people celebrating our diverse cultures, we unite as one Body of Christ strengthened by the Sacraments and nourished by the Living Word of God. As a Faith Community striving to become disciples of Jesus Christ our Lord, we commit ourselves to serve one another and the community at large.</p>
          <h3><i>"All are welcome"</i></h3>
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
        
          <Title title="Event Calendar" />
        <div className="container events-content">
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
            from us.
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
