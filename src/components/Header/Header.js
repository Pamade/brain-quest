import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <p className="header__name">Quest Brain</p>
        <ul className="header__list">
          <li className="header__list-item">
            <Link className="header__list-link" to="#">
              Game 1
            </Link>
          </li>
          <li className="header__list-item">
            <Link className="header__list-link" to="#">
              Game 2
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
