import React from "react";
import "./Calendar.css";
import Events from "./Events/Events";
import Header from "../HeaderHome/HeaderHome";
import * as assetes from "../../assets/assetes";
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
          <button class="bg-yellow-400 mt-4 px-5 py-3 text-sm shadow-sm font-bold tracking-wider  text-white  rounded-full  hover:bg-yellow-500">
            Telecharger l'empoloi
          </button>
        </section>
        <Events />
      </div>
    </div>
  );
}

export default Calendar;
