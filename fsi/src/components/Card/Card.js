import React from "react";

function Card(props) {
  return (
    <div className="border-2 lg:py-2 hover focus:outline-none transform transition hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent cursor-pointer border-gray text-center m-auto mx-2 px-2 my-2 rounded-lg md:w-64">
      <img src={props.src} alt={props.title} className="w-32 h-32 object-fit mx-auto pt-4" />
      <h2 className="my-4 text-lg font-bold leading-tight">{props.title}</h2>
      <p className=" text-sm mb-8 font-medium mx-auto">{props.body}</p>
    </div>
  );
}

export default Card;
