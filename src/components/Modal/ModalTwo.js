import React, {forwardRef, useImperativeHandle, useState} from "react";
import {createPortal} from "react-dom";
import "./Modal.css";

const ModalTwo = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close()
    }
  });

  const open = () => {
    setDisplay(true)
  };

  const close = () => {
    setDisplay(false)
  };

  if (display) {
    return createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"}/>
        <div className={"modal-box"}>
          {props.children}
        </div>
      </div>, document.getElementById("modal-root")
    )
  }
  return null;
})

export default ModalTwo

