

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/images/Meubel House_Logos-05.png";
import Cart from "../Cart/Cart";
import CartModal from "../CartModal/CartModal";

function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const [showCartModal, setShowCartModal] = useState(false);

  const toggleCartModal = () => {
    setShowCartModal(!showCartModal);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Meubel House" />
            <span className="brand-name">Furniro</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link mx-20 ${activeLink === "home" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-20">
                <Link
                  className={`nav-link ${activeLink === "shop" ? "active" : ""}`}
                  aria-current="page"
                  to="/shop"
                  onClick={() => handleLinkClick("shop")}
                >
                  Shop
                </Link>
              </li>
              <li className="nav-item mx-20">
                <Link
                  className={`nav-link ${activeLink === "about" ? "active" : ""}`}
                  aria-current="page"
                  to="/about"
                  onClick={() => handleLinkClick("about")}
                >
                  About
                </Link>
              </li>
              <li className="nav-item mx-20">
                <Link
                  className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
                  aria-current="button"
                  to="/contact"
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-20">
                <Link to="/" className="nav-link">
                  <i className="fas fa-search text-dark"></i>
                </Link>
              </li>
              <li className="nav-item mx-20">
                <Link to="/" className="nav-link">
                  <i className="far fa-heart text-dark"></i>
                </Link>
              </li>
              <li className="nav-item mx-20">
                <button onClick={toggleCartModal} className="nav-link btn">
                  <i className="fas fa-shopping-cart text-dark"></i>
                </button>
              </li>
              <li className="nav-item mx-20">
                <Link to="/" className="nav-link">
                  <i className="far fa-user text-dark"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {showCartModal && <CartModal show={showCartModal} onClose={toggleCartModal} />}
    </>
  );
}

export default Navbar;

