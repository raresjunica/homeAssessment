import React from "react";
import Accordion from "../../../components/accordion/accordion";

import "./Faq.css";

const Faq: React.FC = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
      <Accordion
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
        }
      />
      <Accordion
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
        }
      />
      <Accordion
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
        }
      />
      <Accordion
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
        }
      />
      <Accordion
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit?"
        content={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
        }
      />
    </div>
  );
};

export default Faq;
