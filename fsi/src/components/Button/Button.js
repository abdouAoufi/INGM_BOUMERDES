import React from "react";

function Button(props) {
  return (
    <div>
      <button
        type="button"
        class="py-2 px-6   bg-primary  focus:ring-primary focus:ring-offset-primary text-white  transition ease-in duration-200 text-center text-base font-semibold  focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        {props.children}
      </button>
    </div>
  );
}

export default Button;
