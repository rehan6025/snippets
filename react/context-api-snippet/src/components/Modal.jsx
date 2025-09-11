import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                top: "50px",
                backgroundColor: "#151469",
                color: "white",
            }}
        >
            {children}
        </div>,
        document.body
    );
};

export default Modal;
