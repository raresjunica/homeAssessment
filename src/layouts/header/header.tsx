import React, { useState } from "react";
import "../../styles/Header.css";
import Button from "../../components/button";
import { LuAlignJustify, LuX } from "react-icons/lu";
import logo from "../../assets/logos/splash.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`header__logo ${isMenuOpen ? "expanded" : ""}`}>
        <img src={logo} alt="Splash Logo" />
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="header__hamburger" onClick={toggleMenu}>
        {isMenuOpen ? (
          <LuX className="hamburger__icon expanded" size={30} />
        ) : (
          <LuAlignJustify className="hamburger__icon" size={30} />
        )}
      </div>

      {/* Desktop Menu */}
      <nav className="header__nav">
        <Button
          label="About"
          onClick={() => console.log("About clicked")}
          variant="secondary"
        />
        <Button
          label="Jobs"
          onClick={() => console.log("Jobs clicked")}
          variant="secondary"
        />
        <Button
          label="Cities"
          onClick={() => console.log("Cities clicked")}
          variant="secondary"
        />
        <Button
          label="Charging"
          onClick={() => console.log("Charging clicked")}
          variant="secondary"
        />
        <Button
          label="RIDE ME"
          onClick={() => console.log("RIDE ME clicked")}
          variant="primary"
        />
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="mobile__menu">
          <ul>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#jobs" onClick={toggleMenu}>
                Jobs
              </a>
            </li>
            <li>
              <a href="#cities" onClick={toggleMenu}>
                Cities
              </a>
            </li>
            <li>
              <a href="#charging" onClick={toggleMenu}>
                Charging
              </a>
            </li>
            <li>
              <Button label="RIDE ME" onClick={toggleMenu} variant="primary" />
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
