import React from "react";
import ProductsSlider from "../../components/homepage-utils/products-slider";
import "../../styles/Home.css";
import Button from "../../components/button";
import scooters from "../../assets/home-images/scooters.png";
import banner from "../../assets/home-images/banner.png";
import Card from "../../components/card";
import ContactForm from "../../components/homepage-utils/contact-form";
import Popup from "../../components/popup";

const Home: React.FC = () => {
  const [popupVisible, setPopupVisible] = React.useState(false);
  return (
    <div className="home">
      <ProductsSlider />
      <div className="home__content">
        <div className="home__text-content">
          <h1>Bored to stay in traffic?</h1>
          <p>Download the app</p>
        </div>
        <div className="home__buttons">
          <Button
            label="DOWNLOAD 1"
            onClick={() => console.log("DOWNLOAD 1 clicked")}
            variant="neutral"
            style={{ fontSize: "0.6rem" }}
          />
          <Button
            label="DOWNLOAD 2"
            onClick={() => console.log("DOWNLOAD 2 clicked")}
            variant="neutral"
            style={{ fontSize: "0.6rem" }}
          />
        </div>
        <div className="home__product-display">
          <img src={scooters} alt="Scooters" />
          <div className="text">
            <h2>Nice scooters, right?</h2>
            <p>
              Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet
              efficitur. Praesent justo mauris, facilisis eu magna et, varius
              lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas
              id justo at quam faucibus euismod. Proin eu urna blandit, pharetra
              enim scelerisque, malesuada justo. Sed commodo velit id augue
              lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae
              diam ultricies tempor. Praesent in posuere ante. Aenean dui mi,
              imperdiet id placerat quis, fringilla et neque. Suspendisse porta
              justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum vel
              dui ac sodales. Vivamus consectetur tortor at mauris vulputate
              finibus.
            </p>
          </div>
        </div>
        <Card
          title="Some boring text, good for SEO"
          buttonText="DO SOMETHING"
          onButtonClick={() => setPopupVisible(true)}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
          <p>
            Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet
            efficitur. <b>Praesent</b> justo mauris, facilisis eu magna et,
            varius lobortis ex. Nunc ultrices ipsum at tincidunt suscipit.
            Maecenas id justo at quam faucibus euismod. Proin eu urna blandit,
            pharetra enim scelerisque, malesuada justo. Sed commodo velit id
            augue lacinia, quis dignissim urna consectetur. Vestibulum et arcu
            vitae diam ultricies tempor. Praesent in posuere ante. Aenean dui
            mi, imperdiet id placerat quis, fringilla et n eque. Suspendisse
            porta justo odio, ut aliquet felis volutpat sit amet. Nunc fermentum
            vel dui ac sodales. Vivamus consectetur tortor at mauris vulputate
            finibus.
          </p>
        </Card>
        <div className="home__product-display-reversed">
          <img src={scooters} alt="Scooters" />
          <div className="text">
            <h2>Still nice, right?</h2>
            <p>
              Maecenas eget feugiat augue. Nulla faucibus vitae urna sit amet
              efficitur. Praesent justo mauris, facilisis eu magna et, varius
              lobortis ex. Nunc ultrices ipsum at tincidunt suscipit. Maecenas
              id justo at quam faucibus euismod. Proin eu urna blandit, pharetra
              enim scelerisque, malesuada justo. Sed commodo velit id augue
              lacinia, quis dignissim urna consectetur. Vestibulum et arcu vitae
              diam ultricies tempor.
            </p>
          </div>
        </div>
      </div>
      <div className="home__banner-wrapper">
        <img className="home__banner" src={banner} alt="Scooters banner" />
      </div>
      <div className="home__content">
        <Card
          title="Some more boring text, also good for SEO"
          buttonText="DO SOMETHING"
          onButtonClick={() => setPopupVisible(true)}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
            eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
            efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit
            amet tempus commodo. Phasellus nec libero laoreet, finibus libero
            rhoncus, pellentesque elit. Mauris facilisis commodo justo, eget
            venenatis erat suscipit nec.
          </p>
        </Card>
      </div>
      <ContactForm />
      <Popup isVisible={popupVisible} onClose={setPopupVisible}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
          eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
          Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
          Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
          consectetur aliquam urna. Pellentesque et ullamcorper ipsum. Morbi
          eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit. Mauris facilisis commodo justo, eget venenatis erat
          suscipit nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi consectetur aliquam urna. Pellentesque et ullamcorper ipsum.
          Morbi eget hendrerit purus, in tempor lectus. Curabitur lorem magna,
          efficitur et molestie ut, rutrum in nisi. Sed lobortis sapien sit amet
          tempus commodo. Phasellus nec libero laoreet, finibus libero rhoncus,
          pellentesque elit.{" "}
        </p>
      </Popup>
    </div>
  );
};

export default Home;
