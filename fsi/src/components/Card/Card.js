import React from "react";

function Card(props) {
  return (
    <div className="border text-center m-auto mx-2 my-2 rounded lg:w-42">
      <img src={props.src} alt={props.alt} className="w-24 mx-auto pt-4" />
      <h2 className="my-4 text-lg font-bold leading-tight">{props.title}</h2>
      <p className=" text-sm mb-8   mx-auto">{props.body}</p>
    </div>
  );
}

export default Card;
