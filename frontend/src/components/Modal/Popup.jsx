import { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

import './Popup.scss'

const Popup = forwardRef(({ id, children }, ref) => {
  const [display, setDisplay] = useState(false);
  console.log(id)

  useImperativeHandle(ref, () => {
    return {
      openModal: () => open(),
      close: () => close(),
    };
  });

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  if (display) {
    return createPortal(
      <div className={"modal-wrapper"}>
        <div onClick={close} className={"modal-backdrop"}/>
        <div className={"modal-box"}>
          {children}
        </div>
      </div>, document.getElementById("modal-root")
    )
  } else {
    return null;
  }
});

export default Popup;
