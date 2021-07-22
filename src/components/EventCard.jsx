import React from 'react'

const EventCard = ({month,image,name, day, date, description}) => {
    return (
        <div className="event">
            <div className="event-left">
              <img src={image} alt="Event Placeholder" />
              <div className="event-left-date">
                <span>{month}</span>
                <span>{day}</span>
              </div>
            </div>
            <div className="event-right">
              <h2>{name}</h2>
              <h3>{date}</h3>
              <p>{description}</p>
            </div>
          </div>
    )
}

export default EventCard
