import React from "react";
import "../Calendar.css";

function Events() {
  const events = [
    {
      time: "8:00",
      duration: "1h:30min",
      descreption: "Systeme embarquee",
      active: false,
    },
    {
      time: "9:40",
      duration: "1h:30min",
      descreption: "System non linear",
      active: false,
    },
    {
      time: "11:00",
      duration: "1h:00min",
      descreption: "Electronique appliquee",
      active: true,
    },
    {
      time: "12:30",
      duration: "1h:50min",
      descreption: "Reseaux informatique",
      active: false,
    },
    {
      time: "13:40",
      duration: "1h:00min",
      descreption: "Mathematique",
      active: false,
    },
    {
      time: "15:00",
      duration: "1h:30min",
      descreption: "Mecanic",
      active: false,
    },
  ];
  return (
    <div>
      <section className="upcoming-events">
        <div className="container">
          <h3 className="misajour">Total horaire : 4h </h3>
          <div className="events-wrapper">
            {events.map((event) => {
              return (
                <div className={`event ${event.active ? "active" : null}`}>
                  <i className="ion ion-ios-flame hot" />
                  <h4
                    className={`event__point ${
                      event.active ? "active-time" : null
                    }`}
                  >
                    {event.time}
                  </h4>
                  <span className="event__duration">{event.duration}</span>
                  <p className="event__description">{event.descreption}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
