import React, { useState } from "react";
import "../styles/Accordion.css";

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={toggleAccordion}>
        <span className="accordion__title">{title}</span>
        <button className="accordion__toggle">{isOpen ? "-" : "+"}</button>
      </div>
      <div className={`accordion__content ${isOpen ? "expanded" : ""}`}>
        {content}
      </div>
    </div>
  );
};

export default Accordion;
