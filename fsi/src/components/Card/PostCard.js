import React from "react";

function PostCard(props) {
  return (
    <div className=" w-full bg-white   border my-1  rounded-md px-2 py-2">
      <div className="flex-none lg:flex">
        <div className="rounded-lg overflow-hidden h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
          <img
            className="object-fit w-full"
            src="https://images.unsplash.com/photo-1585254208021-9f33921350a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt={props.title}
          />
        </div>
        <div className="flex-auto ml-3 justify-evenly py-2">
          <div className="flex flex-wrap mb-2 ">
            <div className="w-full flex-none text-xs text-blue-700 font-medium ">
              {props.tag}
            </div>
            <h2 className="flex-auto text-lg font-medium">{props.title}</h2>
          </div>

          <div className="flex p-2 pb-2 border-t border-gray-100 "></div>
          <div className=" text-sm font-medium">
            <div className="flex-auto justify-around px-3 flex ">
              <button className="mb-1 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
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

              <button className="mb-1 md:mb-0 bg-white px-5 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
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
