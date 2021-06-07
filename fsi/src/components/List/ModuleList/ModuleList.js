import React from "react";
function ModuleList(props) {
  const modules = {
    fundamentals: [
      { name: "Electronique", count: 9 },
      { name: "System non linear", count: 3 },
      { name: "Programmation API", count: 5 },
      { name: "Math", count: 6 },
    ],
    Tp: [
      { name: "Tp algo", count: 9 },
      { name: "Resaux informatique", count: 3 },
      { name: "Actionneur", count: 5 },
      { name: "Vibration", count: 6 },
    ],
    expose: [
      { name: "Etique", count: 9 },
      { name: "System non linear", count: 3 },
      { name: "Programmation API", count: 5 },
      { name: "Math", count: 6 },
    ],
  };

  const nextPage = () => {
    props.history.push("/semester/list/module");
  };
  const moduleFundamentals = React.Children.toArray(
    modules.fundamentals.map((mdl) => (
      <li
        onClick={nextPage}
        className="cursor-pointer lg:rounded border-opacity-30  border-b border-t lg:border border-gray-400  my-2 flex justify-between py-4 items-center   px-4"
      >
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={"#1f4287"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <p className="ml-4 text-medium font-medium text-gray-500">
            {mdl.name}
          </p>
        </div>
        <p className="bg-primary rounded-full px-2 py-1 font-semibold text-center text-white text-sm  ">
          {mdl.count}
        </p>
      </li>
    ))
  );

  const modulesTP = React.Children.toArray(
    modules.Tp.map((mdl) => (
      <li className="cursor-pointer border-opacity-30  md:rounded border-b border-t md:border border-gray-400  my-2 flex justify-between py-4 items-center   px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#278ea5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
          </svg>
          <p className="ml-4 text-medium font-medium text-gray-500">
            {mdl.name}
          </p>
        </div>
        <p className="bg-primary rounded-full px-2 py-1 font-semibold text-center text-white text-sm  ">
          {mdl.count}
        </p>
      </li>
    ))
  );

  const modulesExpose = React.Children.toArray(
    modules.expose.map((mdl) => (
      <li className="cursor-pointer border-opacity-30 lg:rounded border-b border-t lg:border border-gray-400 my-2 flex justify-between py-4 items-center   px-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="#21e6c1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>
          <p className="ml-4 text-medium font-medium text-gray-500">
            {mdl.name}
          </p>
        </div>
        <p className="bg-primary rounded-full px-2 py-1 font-semibold text-center text-white text-sm  ">
          {mdl.count}
        </p>
      </li>
    ))
  );
  return (
    <div className="mx-auto ">
      <div className="mt-2 md:w-full">
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              className="w-8 h-8"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
              Shooting Stars
            </h2>
            <p className="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine.
            </p>
          </div>
        </div>
      </div>

      {/* //! List */}
      <div className="mt-4">
        <p className="font-semibold text-medium text-gray-600 py-2 pl-1 ">
          Fundamentals
        </p>
        <ul>{moduleFundamentals}</ul>
        <p className="font-semibold text-medium text-gray-600 py-2 pl-1 ">
          Travaux pratique{" "}
        </p>
        <ul>{modulesTP}</ul>
        <p className="font-semibold text-medium text-gray-600 py-2 pl-1 ">
          Exposee{" "}
        </p>
        <ul>{modulesExpose}</ul>
      </div>
    </div>
  );
}

export default ModuleList;
