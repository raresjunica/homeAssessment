import React from "react";
import "../styles/Card.css";
import Button from "./button";

interface CardProps {
  title: string;
  buttonText: string;
  onButtonClick: () => void;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  buttonText,
  onButtonClick,
  children,
}) => {
  return (
    <div className="card">
      <h2 className="card__title">{title}</h2>
      <div className="card__content">{children}</div>
      <Button label={buttonText} onClick={onButtonClick} variant="primary" />
    </div>
  );
};

export default Card;
