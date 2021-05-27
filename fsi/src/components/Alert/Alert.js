import React from "react";
import Transition from "../Transition/Transition";

function Alert(props) {
  return (
    <Transition
      id="search-modal"
      className="fixed overflow-hidden inset-0 z-50 overflow-hidden  flex items-start mb-4 justify-center transform px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      show={props.show}
      appear={props.show}
      enter="transition ease-in-out duration-500"
      enterStart="opacity-0 translate-y-4"
      enterEnd="opacity-100 translate-y-0"
      leave="transition ease-in-out duration-200"
      leaveStart="opacity-100 translate-y-0"
      leaveEnd="opacity-0 translate-y-4"
    >
      <div className="m-auto w-5/6 md:w-88 fixed md:right-12 top-12 ">
        <div className="bg-white rounded-lg p-3 shadow-lg">
          <div className="flex flex-row">
            <div className="px-2">
              {!props.errorN ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 1792 1792"
                  fill="#44C997"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#ff304f"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              )}
            </div>
            <div className="ml-2 mr-6">
              <span className=" font-semibold capitalize">{props.title}</span>
              <span className="block text-gray-500 capitalize text-sm font-normal ">
                {props.body}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Alert;
