import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { useImperativeHandle } from "react";
import { useRef } from "react";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-gray-600/90 p-4 rounded-md shadow-sm"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <button
          className="bg-gray-400 px-2 py-1 rounded-md hover:bg-gray-200"
          style={{ fontSize: "14px" }}
        >
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
