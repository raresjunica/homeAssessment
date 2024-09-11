import React, { Dispatch, SetStateAction } from "react";
import "./Popup.css";

interface PopupProps {
  isVisible: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isVisible, onClose, children }) => {
  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="popup__overlay" onClick={handleOutsideClick}>
      <div className="popup__content">
        <button className="popup__close" onClick={() => onClose(false)}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
