import "./Modal.css";
import { useState, useEffect } from "react";

const Modal = (props) => {
  useEffect(() => {
    if (props.toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [props.toggle]);

  return (
    <div className={props.toggle ? "modal modal--open" : "modal"}>
      <aside className="modal__content">{props.children}</aside>
    </div>
  );
};

export default Modal;
