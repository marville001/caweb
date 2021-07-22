import React from "react";
import "../styles/events.scss";

import eventsBg from "../images/events-header-bg.jpg";
import PageHeader from "../components/PageHeader";
import EventCard from "../components/EventCard";

const EventsAndActivities = () => {
  return (
    <div className="events">
      <PageHeader
        image={eventsBg}
        title="Events and Activities"
        subtitle="upcoming"
      />
      <div className="container events-container">
          {[1,2,3,4,5,6].map(item=>
          <EventCard
            image={eventsBg}
            day="16"
            month="Jul"
            name="Charity Activity Mweiga"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, enim voluptates eveniet nostrum quisquam, perferendis."
          />)}
      </div>
    </div>
  );
};

export default EventsAndActivities;
