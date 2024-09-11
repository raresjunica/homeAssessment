import React from "react";
import Slider from "react-slick";
import Member from "../../../components/member/member";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Members.css";

const Members: React.FC = () => {
  // Slider settings for mobile devices
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
  };

  return (
    <div className="members">
      <h1>Our fantastic team</h1>

      {/* For mobile (carousel) */}
      <div className="members-slider">
        <Slider {...sliderSettings}>
          <Member
            gender="male"
            name="Ion Popescu"
            title="the fixer"
            description="He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna."
          />
          <Member
            gender="female"
            name="Andreea Ghica"
            title="the colourful"
            description="She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Member
            gender="male"
            name="Alexandru Ioanovici Cuza"
            title="the entertainer"
            description="He likes to entertain."
          />
          <Member
            gender="female"
            name="Roxana"
            title="HR"
            description="She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
          <Member
            gender="female"
            name="Mihaela Acatrinei"
            title="the coffee addict"
            description=""
          />
          <Member
            gender="male"
            name="Alexandru Ioanovici Cuza"
            title="the IT guy"
            description="He likes to kick the keyboard."
          />
          <Member
            gender="male"
            name="Ion Popescu"
            title="the fixer"
            description="He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </Slider>
      </div>

      {/* For larger screens (grid layout) */}
      <div className="members-container">
        <Member
          gender="male"
          name="Ion Popescu"
          title="the fixer"
          description="He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna."
        />
        <Member
          gender="female"
          name="Andreea Ghica"
          title="the colourful"
          description="She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Member
          gender="male"
          name="Alexandru Ioanovici Cuza"
          title="the entertainer"
          description="He likes to entertain."
        />
        <Member
          gender="female"
          name="Roxana"
          title="HR"
          description="She likes to lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Member
          gender="female"
          name="Mihaela Acatrinei"
          title="the coffee addict"
          description=" "
        />
        <Member
          gender="male"
          name="Alexandru Ioanovici Cuza"
          title="the IT guy"
          description="He likes to kick the keyboard."
        />
        <Member
          gender="male"
          name="Ion Popescu"
          title="the fixer"
          description="He likes to lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default Members;
