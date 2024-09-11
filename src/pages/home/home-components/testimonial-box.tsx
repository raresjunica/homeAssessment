import React, { useState, useEffect } from "react";
import "../../../styles/TestimonialBox.css";
import leftQuote from "../../../assets/quotes/left-quote.png";
import rightQuote from "../../../assets/quotes/right-quote.png";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    author: "Ion Luca Caragiale",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    author: "Mihai Eminescu",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna, efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat suscipit nec.",
    author: "Nicolae Iorga",
  },
];

const TestimonialBox: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial">
      <img
        className="testimonial__icon-left"
        src={leftQuote}
        alt="Left Quote"
      />
      <div className="testimonial__content">
        <p>{testimonials[currentTestimonial].text}</p>
        <span className="testimonial__author">
          {testimonials[currentTestimonial].author}
        </span>
      </div>
      <img
        className="testimonial__icon-right"
        src={rightQuote}
        alt="Right Quote"
      />
    </div>
  );
};

export default TestimonialBox;
