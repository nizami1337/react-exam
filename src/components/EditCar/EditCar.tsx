import { useEffect } from "react";
import "./EditCar.scss"
import { X } from "react-feather";

function Modal({ children, isOpen, handleClose }) {
  useEffect(() => {
    const closeOnEscapeKey = e => e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">{children}</div>
      <button onClick={handleClose} className="close-btn"><X size={20}/> Close</button>
    </div>
  );
};

export default Modal;