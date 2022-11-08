import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LibraryLogo from "../assets/Library.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div className="nav__container">
        <Link to="/">
          <img src={LibraryLogo} alt="" className="logo" />
        </Link>
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/about" className="nav__link">
              About
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
          </li>
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon="shopping-cart" />
            </Link>
            <span className="cart__length">2</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
