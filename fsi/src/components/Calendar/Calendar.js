import React from "react";
import "./Calendar.css";
import Events from "./Events/Events";
import Header from "../HeaderHome/HeaderHome";
import * as assetes from "../../assets/assetes"
function Calendar() {
  return (
    <div>
      <div className=" text-left">
        <Header
          title="Time line"
          text="Here you can ask for help !"
          image={assetes.headerIcons.timeLineIconHeader}
        />
      </div>
      <div className="mobile-wrapper">
        

        <section className="today-box" id="today-box">
          <span className="breadcrumb">Aujourduit</span>
          <h3 className="date-title">Mercredi 03 - May</h3>
        </section>
        <Events />
      </div>
    </div>
  );
}

export default Calendar;
