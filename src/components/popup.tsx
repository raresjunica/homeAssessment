import React from "react";
import "../styles/Popup.css";

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div className="popup__overlay">
      <div className="popup__content">
        <button className="popup__close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
