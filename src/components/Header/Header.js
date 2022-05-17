import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <header className="header">
      <nav onClick={() => setIsMenu(!isMenu)} className="header__nav">
        <Link className="header__list-home" to="/">
          Brain Quest
        </Link>
        <ul
          className={
            isMenu ? "header__list header__nav-mobile-show" : "header__list"
          }
        >
          <li className="header__list-item">
            <Link className="header__list-link" to="/">
              Home
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="dashboard">
              Dashboard
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="rememberNumber">
              Remember Number
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/whereItWas">
              Where it was
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/wordsMemory">
              Words Memory
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="/circleNinja">
              Circle Ninja
            </Link>
          </li>
        </ul>
        <GiHamburgerMenu
          onClick={() => setIsMenu(true)}
          className="header__hamburger"
          fontSize={"25px"}
        />
      </nav>
    </header>
  );
}

export default Header;
