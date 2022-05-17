import { useState } from "react";
import menu from "../images/menu.svg";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    props.setUser({ token: "" });
    console.log("logout");
  };

  return (
    <nav className="navbar">
      <svg
        className="navbar__toggle"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 36H42V32H6V36ZM6 26H42V22H6V26ZM6 12V16H42V12H6Z" />
      </svg>
      <ul
        className={
          toggle ? "navbar__items navbar__items-open" : "navbar__items"
        }
      >
        <Link to="/explore">
          <li className="navbar__item">Explore</li>
        </Link>
        <Link to="/profile">
          <li className="navbar__item">Profile</li>
        </Link>
        <li
          className="navbar__item navbar__item-logout"
          onClick={() => handleLogout()}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
