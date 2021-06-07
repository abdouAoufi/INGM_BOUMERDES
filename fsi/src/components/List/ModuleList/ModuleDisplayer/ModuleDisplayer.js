import React from "react";
import image from "../../../../assets/images/real/eln.jpg";
import * as assets from "../../../../assets/assetes";

function ModuleDisplayer() {
  return (
    <div>
      {/* Image header */}
      <div className="h-64 lg:h-72 lg:m-2 lg:rounded-lg  relative overflow-hidden bg-opacity-50">
        <div className="absolute  px-4 flex items-center justify-between absolute bottom-0  right-0 left-0 h-20 bg-gray-900 bg-opacity-30">
          <h1 className=" font-bold text-white text-3xl">Electronique</h1>
          <div className="bg-white rounded-2xl px-4 py-1 ">
            <p className=" font-semibold   text-primary  ">10 files</p>
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
