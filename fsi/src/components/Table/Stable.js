import React from "react";

function Table(props) {
  return (
    <div>
      <div>
        <div className="text-left my-2">
          <div>
            <div className=" text-center border inline-block min-w-full md:shadow-sm md:rounded-lg overflow-hidden">
              <table className="min-w-full  overflow-hidden">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Module
                    </th>

                    <th
                      scope="col"
                      className=" py-3 bg-white  border-b border-gray-200 text-gray-800   text-left  text-sm uppercase font-semibold"
                    >
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data.map((item, index) => (
                    <tr key={index} className=" text-left ">
                      <td className=" py-5 border-b border-gray-200 bg-white text-sm ">
                        <div>
                          <p className="pl-5 text-gray-900 whitespace-no-wrap">
                            {item.NAME}
                          </p>
                        </div>
                      </td>

                      <td className=" py-5 border-b border-gray-200 bg-white text-sm">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          />
                          <span className="relative">{item.MOY}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
