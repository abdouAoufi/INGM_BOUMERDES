import React, { useState } from "react";
import * as assets from "../../assets/assetes";

function HeaderHome({ title, text, type }) {
  let src = assets.illustrationSVG.welcome;
  const res = useState(null);
  return (
    <div>
      <div className=" mx-auto border lg:shadow  flex px-4 py-3 justify-between  my-4 rounded">
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-base">{text}</p>
        </div>
        <div>
          {type === "desc" ? (
            <img src={assets.landSVG.land_one} alt="wait" className="w-40" />
          ) : (
            <img src={assets.illustrationSVG.welcome} alt="wait" className="w-40" />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
