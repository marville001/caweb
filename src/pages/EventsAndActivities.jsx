import React from "react";
import "../styles/events.scss";

import eventsBg from "../images/events-header-bg.jpg";
import PageHeader from "../components/PageHeader";

const EventsAndActivities = () => {
  return (
    <div className="events">
      <PageHeader
        image={eventsBg}
        title="Events and Activities"
        subtitle="upcoming"
      />
      <div className="container events-container">
      <div className="event">
            <div className="event-left">
              <img src={eventsBg} alt="Event Placeholder" />
              <div className="event-left-date">
                <span>May</span>
                <span>21</span>
              </div>
            </div>
            <div className="event-right">
              <h2>Name</h2>
              <h3>May 13, 12:00pm - May 13, 4:00pm</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim voluptates eveniet nostrum quisquam, perferendis.</p>
            </div>
          </div>
          <div className="event">
            <div className="event-left">
              <img src={eventsBg} alt="Event Placeholder" />
              <div className="event-left-date">
                <span>May</span>
                <span>21</span>
              </div>
            </div>
            <div className="event-right">
              <h2>Name</h2>
              <h3>May 13, 12:00pm - May 13, 4:00pm</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim voluptates eveniet nostrum quisquam, perferendis.</p>
            </div>
          </div>
          <div className="event">
            <div className="event-left">
              <img src={eventsBg} alt="Event Placeholder" />
              <div className="event-left-date">
                <span>May</span>
                <span>21</span>
              </div>
            </div>
            <div className="event-right">
              <h2>Name</h2>
              <h3>May 13, 12:00pm - May 13, 4:00pm</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim voluptates eveniet nostrum quisquam, perferendis.</p>
            </div>
          </div>
          <div className="event">
            <div className="event-left">
              <img src={eventsBg} alt="Event Placeholder" />
              <div className="event-left-date">
                <span>May</span>
                <span>21</span>
              </div>
            </div>
            <div className="event-right">
              <h2>Name</h2>
              <h3>May 13, 12:00pm - May 13, 4:00pm</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim voluptates eveniet nostrum quisquam, perferendis.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default EventsAndActivities;
