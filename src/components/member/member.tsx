import React from "react";
import male from "../../assets/genders/male.png";
import female from "../../assets/genders/female.png";
import "./Member.css";

interface MemberProps {
  gender: string;
  name: string;
  title: string;
  description: string;
}

const Member: React.FC<MemberProps> = ({
  gender,
  name,
  title,
  description,
}) => {
  return (
    <div className="member">
      <div className="member__image-wrapper">
        <img
          className="member__image"
          src={gender === "male" ? male : female}
          alt="Gender image"
        />
      </div>
      <div className="member__text">
        <h2>{name}</h2>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Member;
