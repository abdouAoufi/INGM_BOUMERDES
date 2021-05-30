import React from "react";
import * as assets from "../../assets/assetes";

function BottomNavbar() {
  return (
    <div>
      <section
        id="bottom-navigation"
        className="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
      >
        <section className="block fixed inset-x-0 bottom-0 z-10 bg-white shadow">
          <div id="tabs" className="flex justify-between">
            <a
              href="/"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <span className="tab tab-home block text-xs">Home</span>
            </a>
            <a
              href="/"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              {/* <img src={assets.td} alt="courses" className="h-8 m-auto mb-1" /> */}
              <span className="tab tab-kategori font-normal block text-xs">
                Courses
              </span>
            </a>
            <a
              href="/"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <span className="tab tab-explore block text-xs">Explore</span>
            </a>
            <a
              href="/"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <span className="tab tab-whishlist block text-xs">Whishlist</span>
            </a>
            <a
              href="/"
              className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <span className="tab tab-account block text-xs">Account</span>
            </a>
          </div>
        </section>
      </section>
    </div>
  );
}

export default BottomNavbar;
