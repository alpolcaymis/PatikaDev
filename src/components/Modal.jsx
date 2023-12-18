import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useCartContext } from "../context/cart-context";

function Modal({ children }) {
  const { modalIsOpen, onCloseModal } = useCartContext();

  const dialog = useRef();

  useEffect(() => {
    if (modalIsOpen) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [modalIsOpen]);

  //
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onCloseModal}>
      {modalIsOpen ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
