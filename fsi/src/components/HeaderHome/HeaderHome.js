import React, { useState } from "react";
import * as assets from "../../assets/assetes";

function HeaderHome() {
  const res = useState(null);
  return (
    <div>
      <div className="flex px-4 py-2 justify-between  my-4 rounded">
        <div>
          <h1 className="text-2xl font-extrabold mb-2">Home news</h1>
          <p className="text-base">
            this is the future of the web developpement !
          </p>
        </div>
        <div>
          <img
            src={assets.illustrationSVG.welcome}
            alt="wait"
            className="w-40"
          />
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
