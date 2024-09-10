import React from "react";
import "../styles/InfoBox.css";

interface InfoBoxProps {
  image: string;
  text: string;
  isNew?: boolean;
}

const InfoBox: React.FC<InfoBoxProps> = ({ image, text, isNew = false }) => {
  return (
    <div className="infobox">
      {isNew && <div className="infobox__new-flag">NEW</div>}
      <div className="infobox__image-wrapper">
        <img className="infobox__image" src={image} alt="InfoBox visual" />
      </div>
      <div className="infobox__text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default InfoBox;
