import React from "react";

function HeaderHome({ title, text, image }) {
  return (
    <div>
      <div className="h-56 mx-auto  lg:shadow-lg  flex px-4 py-3 justify-between items-center  my-4 rounded-xl">
        <div>
          <h1 className="text-2xl font-bold mb-2">{title}</h1>
          <p className="text-base">{text}</p>
        </div>
        <div>
          <img src={image} alt={title} className="w-40" />
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
