import React, { useState } from "react";
import image from "../../../../assets/images/real/eln.jpg";
import * as assets from "../../../../assets/assetes";

function ModuleDisplayer() {
  const [selectedYear, setSelctedYear] = useState("2020 - 2021");
  return (
    <div>
      {/* //! Image header */}
      <div className="h-64 lg:h-72 lg:m-2 lg:rounded-lg  relative overflow-hidden bg-opacity-50">
        <div>
          <div className="absolute  px-5  absolute top-10   right-0    shadow-lg  ">
            <div className=" ">
              <div className="relative inline-flex">
                <svg
                  className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 412 232"
                >
                  <path
                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                    fill="#648299"
                    fillRule="nonzero"
                  />
                </svg>
                <select
                  onChange={(e) => setSelctedYear(e.target.value)}
                  onClick={() => console.log(selectedYear)}
                  className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>Select a year </option>
                  <option>2020 - 2021 </option>
                  <option>2019 - 2020</option>
                </select>
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#107a8b"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute  px-4 flex items-center justify-between absolute bottom-0  right-0 left-0 h-20 bg-gray-900 bg-opacity-30">
          <h1 className=" font-bold text-white text-3xl">Electronique</h1>
          <div className="bg-white rounded-2xl px-4 py-1 ">
            <p className=" font-semibold  text-primary  ">10 files</p>
          </div>
        </div>

        <img className="w-full h-full object-fit" src={image} alt="headet" />
      </div>
      {/* Information holder */}
      <div className=" p-3 mt-2 ">
        <p className="font-light my-1 italic text-base  text-gray-400">
          Chapitre 1{" "}
        </p>
        <h3 className="font-medium my-1 text-2xl text-gray-600">
          La methode de sous contrain :{" "}
        </h3>
        {/*  // ! LES COURS  */}
        <div>
          <p className="font-bold my-1  text-base text-primary ">Les cours :</p>
          <ul>
            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className=" text-medium font-medium text-gray-500">
                  cour-1-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>
            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className="mtext-medium font-medium text-gray-500">
                  cour-2-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>
            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className=" text-medium font-medium text-gray-500">
                  cour-3-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>

            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className=" text-medium font-medium text-gray-500">
                  cour-3-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>
          </ul>
        </div>
        {/*  // ! LES TD  */}
        <div>
          <p className="font-bold my-1  text-base text-primary ">
            Travaux direger TD :
          </p>
          <ul>
            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className=" text-medium font-medium text-gray-500">
                  cour-1-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>
            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className="mtext-medium font-medium text-gray-500">
                  cour-2-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>
            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className=" text-medium font-medium text-gray-500">
                  cour-3-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>

            <li className="cursor-pointer  rounded border-opacity-30   border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
              <div className="flex items-center">
                <p className=" text-medium font-medium text-gray-500">
                  cour-3-[module].pdf
                </p>
              </div>
              <img className="w-8" src={assets.icons.pdf} alt="pdf" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModuleDisplayer;
