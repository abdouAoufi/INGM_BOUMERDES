import React from "react";
import NavbarHome from "../../components/Navbar/NavbarHome";
import Navbar from "../../components/Navbar/NavBar";
import Button from "../../components/Button/Button";
import bg from "../../assets/images/hero.png";
import logo from "../../assets/images/logoS.svg";
import * as assets from "../../assets/assetes"
import Card from "../../components/Card/Card";
function Welcome() {
  window.document.title = "FSI";
  return (
    <div>
      {/* // ! NAVBAR-HOME  */}

      <NavbarHome />

      {/* Hero section */}
      <main>
        <div className="pt-12 bg-bgcolor lg:h-screen">
          <div className=" px-12  mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose w-full">
                What business are you?
              </p>
              <h1 className="my-4 text-5xl font-bold leading-tight">
                Main Hero Message to sell yourself!
              </h1>
              <p className="leading-normal text-2xl mb-8">
                Sub-hero message, not too long and not too short. Make it just
                right!
              </p>
              <button className="mx-auto lg:mx-0 hover:underline bg-primary text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Sign up
              </button>
            </div>

            <div className=" w-full md:w-3/5 py-6 text-center">
              <img className="w-full mx-auto md:w-4/5 z-50" src={bg} alt="bg" />
            </div>
          </div>
        </div>
      </main>

      {/* //! Features  */}

      <div className="pt-16 text-center ">
        <div className=" font-semibold uppercase text-primary py-2 px-4 bg-bgcolor border-0 inline-block rounded-xl">
          Features
        </div>
        <h1 className="my-4 text-3xl font-bold leading-tight">
          Our core features
        </h1>
        <p className=" lg:text-lg mb-8 w-1/2  mx-auto">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor .
        </p>
      </div>

      <div className="md:flex px-12 mb-8">
        <Card
          title="consectetuer"
          body="Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes"
          src={assets.feature_one}
          alt="consectetuer"
        />

        <Card
          title="Aenean"
          body="Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes"
          src={assets.feature_two}
          alt="consectetuer"
        />

        <Card
          title="Dommodo"
          body="Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes"
          src={assets.feature_three}
          alt="consectetuer"
        />

        <Card
          title="Penatibus"
          body="Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes"
          src={assets.feature_four}
          alt="consectetuer"
        />
      </div>
    </div>
  );
}

export default Welcome;
