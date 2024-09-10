import React from "react";
import "../../styles/Footer.css";
import logo from "../../assets/logos/splash.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={logo} alt="Splash Logo" />{" "}
        </div>
        <div className="footer__description">
          <h4>Some headline</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            consectetur aliquam urna. Lorem ipsum dolor sit amet, adipiscing
            elit. Morbi consectetur aliquam urna.
          </p>
        </div>
        <div className="footer__links">
          <h4>Other links</h4>
          <ul>
            <li>
              <a href="/coffee">Coffee</a>
            </li>
            <li>
              <a href="/tea">Tea</a>
            </li>
            <li>
              <a href="/water">Water</a>
            </li>
            <li>
              <a href="/juice">Juice</a>
            </li>
            <li>
              <a href="/beer">Beer</a>
            </li>
            <li>
              <a href="/wine">Wine</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright © 2022 Codelalla</p>
      </div>
    </footer>
  );
};

export default Footer;
