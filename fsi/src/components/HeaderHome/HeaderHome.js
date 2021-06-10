import React from "react";

function HeaderHome({ title, text, image }) {
  return (
    <div>
      <div className="h-48 mx-auto bg-color_add lg:shadow-sm  flex px-4 py-3 justify-between items-center  my-4 rounded-xl">
        <div>
          <p className="text-base font-thin mb-2 align-start text-gray-500 italic">
            {" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 inline-block pb-1 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#ff9f68"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
            {text}
          </p>
          <h1 className="text-3xl font-extrabold mb-2 text-black">{title}</h1>
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
