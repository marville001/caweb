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
    </div>
  );
};

export default EventsAndActivities;
