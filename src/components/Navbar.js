import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/main.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const handleLinkClick = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <header>
      <h1>Carrot</h1>
      <nav ref={navRef}>
        <a href="/#" onClick={handleLinkClick}>
          Product
        </a>
        <a href="/#" onClick={handleLinkClick}>
          Our Why
        </a>
        <a href="/#" onClick={handleLinkClick}>
          About Us
        </a>
        <a href="/#" onClick={handleLinkClick}>
          Contact Us
        </a>
        <button
          className="nav-btn nav-close-btn cursor:pointer"
          onClick={showNavbar}
          aria-label="Close navigation"
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn cursor:pointer"
        onClick={showNavbar}
        aria-label="Toggle navigation"
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
