import React, { useState, useEffect, useRef } from "react";
import Loader from "../../components/Loader/Loader";
import Transition from "../../components/Transition/Transition";
import Modal from "../../components/Modal/Modal";

function Test() {
  const [openModal, setOpenModal] = useState(false);
  const trigger = useRef(null);

  useEffect(() => {
    const clickHandler = ({ target }) => {};
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {};
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const clickButtonHandler = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <Modal openModal={openModal}>something like that ...</Modal>
      <button ref={trigger} onClick={clickButtonHandler}>
      
      </button>
    </div>
  );
}

export default Test;
