import React from "react";
import * as assets from "../../assets/assetes";
import { Link } from "react-router-dom";

function BottomNavbar() {
  return (
    <div>
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10  shadow"
      >
        <section className="block fixed inset-x-0 bottom-0 z-10 bg-gray-100 shadow">
          <div id="tabs" className="flex justify-between">
            <Link
              to="/feed"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <img
                src={assets.bottomNavigation.homeICON}
                alt="courses"
                className="h-8 m-auto mb-1"
              />
              <span className="tab tab-home block text-xs">Home</span>
            </Link>
            <Link
              to="/descussion"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <img
                src={assets.bottomNavigation.descICON}
                alt="courses"
                className="h-8 m-auto mb-1"
              />
              <span className="tab tab-kategori font-normal block text-xs">
                Descussion
              </span>
            </Link>
            <Link
              to="/course"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <img
                src={assets.bottomNavigation.courseICON}
                alt="courses"
                className="h-8 m-auto mb-1"
              />
              <span className="tab tab-explore block text-xs">Courses</span>
            </Link>
            <Link
              to="/td"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <img
                src={assets.bottomNavigation.tdICON}
                alt="courses"
                className="h-8 m-auto mb-1"
              />
              <span className="tab tab-whishlist block text-xs">TD</span>
            </Link>
            <Link
              to="/timeline"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <img
                src={assets.bottomNavigation.timelineICON}
                alt="courses"
                className="h-8 m-auto mb-1"
              />
              <span className="tab tab-account block text-xs">Emploi</span>
            </Link>
          </div>
        </section>
      </section>
    </div>
  );
}

export default BottomNavbar;
