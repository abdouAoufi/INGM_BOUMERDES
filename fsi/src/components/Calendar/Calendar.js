import React from "react";
import "./Calendar.css";
function Calendar() {
  return (
    <div>
      <div className="mobile-wrapper">
        <header className="header">
          <div className="container">
            <span>Welcome Back!</span>
            <h1>Calendar Plan</h1>
          </div>
        </header>

        <section className="today-box" id="today-box">
          <span className="breadcrumb">Today</span>
          <h3 className="date-title">May 15, 2018</h3>
        </section>
        <section className="upcoming-events">
          <div className="container">
            <h3>Lastest Events</h3>
            <div className="events-wrapper">
              <div className="event">
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
                <h4 className="event__point">12:45 am</h4>
                <span className="event__duration">in 45 minutes.</span>
                <p className="event__description">Reseaux informatique</p>
              </div>
              <div className="event">
                <i className="ion ion-ios-flame-outline upcoming" />
                <h4 className="event__point">01:15 pm</h4>
                <span className="event__duration">in 20 minutes.</span>
                <p className="event__description">API</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Calendar;
