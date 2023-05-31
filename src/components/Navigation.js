import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <div className="bandeau_nav">
      <div>
        <Logo />
      </div>

      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
