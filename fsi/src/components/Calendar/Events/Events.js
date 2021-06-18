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
            {/* <div className="event">
              <i className="ion ion-ios-flame hot" />
              <h4 className="event__point">08:00 am</h4>
              <span className="event__duration">in 30 minutes.</span>
              <p className="event__description">Système embarqué</p>
            </div>
            <div className="event">
              <i className="ion ion-ios-flame done" />
              <h4 className="event__point">09:45 am</h4>
              <span className="event__duration">in 1 hour.</span>
              <p className="event__description">System non linear</p>
            </div>
            <div className="event ">
              <i className="ion ion-ios-radio-button-on icon-in-active-mode" />
              <h4 className="event__point">11:15 am</h4>
              <p className="event__description">Electronique appliquee</p>
            </div>
            <div className="event active">
              <i className="ion ion-ios-flame-outline upcoming" />
              <h4 className="event__point active-time">12:45 am</h4>
              <span className="event__duration">in 45 minutes.</span>
              <p className="event__description">Reseaux informatique</p>
            </div>
            <div className="event">
              <i className="ion ion-ios-flame-outline upcoming" />
              <h4 className="event__point">01:15 pm</h4>
              <span className="event__duration">in 20 minutes.</span>
              <p className="event__description">API</p>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
