import React from "react";

function Semestre({ year, spec, semestre , click}) {
   let isMaster = year === "Master 1" ? "hidden" : year === "Master 2" ? "hidden" : "block";
  let bg =
    year === 2 ? "bg-card_one" : year === 3 ? "bg-card_two" : "bg-card_three";
  return (
    <div
      onClick={click}
      className={`w-full cursor-pointer rounded-2xl ${bg} p-4 mx-auto my-2 shadow-md`}
    >
      <h1 className="mb-3 text-white font-semibold text-3xl  ">
        {" "}
        {year}{" "}
        <span className={`${isMaster} inline`}>
          <span>eme</span> Anee{" "}
        </span>
      </h1>
      <div className="flex text-white justify-between items-baseline">
        <p className="italic font-thin">{spec} </p>
        <h3 className="text-xl font-medium">
          Semestre{" "}
          <span className="font-semibold  ml-1 text-5xl">{semestre}</span>
        </h3>
      </div>
    </div>
  );
}

export default Semestre;
