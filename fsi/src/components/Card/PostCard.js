import React from "react";

function PostCard(props) {
  const btnClass = "mb-1 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 "
  return (
    <div className=" lg:w-1/2 m-auto lg:shadow w-full bg-white text-black border my-2 rounded-md px-2 py-1">
      <div className="flex-none ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className="h-8 w-8 mr-2 my-4 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <h2 className="text-lg font-semibold">{props.name}</h2>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
        <div className="mx-1 rounded-lg overflow-hidden h-full w-full   lg:mb-0 ">
          <img
            className="object-fit w-full"
            src="https://images.unsplash.com/photo-1585254208021-9f33921350a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt={props.title}
          />
        </div>

        <div className="flex-auto ml-2 justify-evenly py-2">
          <div className="flex flex-wrap  ">
            <div className="w-full italic flex-none text-xs text-blue-700 font-medium ">
              {props.tag}
            </div>
            <h2 className="flex-auto text-medium font-semibold">{props.title}</h2>
          </div>

          <p className="w-full mb-2 text-gray-600 flex-none text-sm font-medium">
            The world's most popular and easiest to use icon set just got an
            upgrade. More icons.
          </p>

          <div className="flex p-2 pb-2 border-t border-gray-100 "></div>
          <div className=" text-sm font-medium">
            <div className="flex-auto justify-around px-3 flex ">
              <button className={btnClass}>
                <span className="text-green-400 hover:text-green-500 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </span>
                <span>16 Like</span>
              </button>

              <button className={btnClass}>
                <span className="text-green-400 hover:text-green-500 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </span>
                <span>3 comment</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
