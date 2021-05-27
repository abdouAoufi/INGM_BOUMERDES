import React from "react";

function Button(props) {
  return (
    <div>
      <button
        onClick = {props.click}
        type="button"
        className="py-3 px-4 text-sm bg-primary  focus:ring-black focus:ring-offset-primary text-white  transition ease-in duration-200 text-center  font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
