import React from "react";
import InfoBox from "../../../components/info-box/info-box";

import miniature from "../../../assets/logos/miniature.png";

import "./InfoBoxes.css";

const InfoBoxes: React.FC = () => {
  return (
    <div className="info-boxes">
      <h1>Our main features</h1>
      <div className="info-boxes-container">
        <InfoBox
          image={miniature}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus."
          isNew={false}
        />
        <InfoBox
          image={miniature}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          isNew={false}
        />
        <InfoBox
          image={miniature}
          text="Morbi consectetur aliquam urna."
          isNew={false}
        />
        <InfoBox
          image={miniature}
          text="Morbi consectetur aliquam urna."
          isNew={false}
        />
        <InfoBox
          image={miniature}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna."
          isNew={true}
        />
      </div>
    </div>
  );
};

export default InfoBoxes;
