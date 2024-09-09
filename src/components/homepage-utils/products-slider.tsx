import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Slider.css";

import image1 from "../../assets/products-slider/image1.png";
import image2 from "../../assets/products-slider/image2.png";

export default function ProductsSlider() {
  return (
    <Slider
      className="slider"
      dots
      infinite
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      <div className="slider__product">
        <img src={image1} alt="Splash image1" />
        <div className="slider__overlay">
          <h2>Enjoy the most colourful rides with us</h2>
          <p>
            Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor, sit
            amet ipsum dolor sit amet ipsum dolor sit amet{" "}
          </p>
        </div>
      </div>
      <div className="slider__product">
        <img src={image2} alt="Splash image2" />
        <div className="slider__overlay">
          <h2>Welcome to our amazing website</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </Slider>
  );
}
