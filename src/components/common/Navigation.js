import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = (props) => {
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    props.handleLogout();
  };

  return (
    <nav className="navbar">
      <svg
        className="navbar__toggle"
        onClick={() => setToggle(!toggle)}
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
          toggle ? "navbar__items navbar__items--open" : "navbar__items"
        }
      >
        <li className="navbar__item navbar__item--brand">
          <svg
            className="navbar__logo"
            width="9"
            height="41"
            viewBox="0 0 9 41"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.421021 36.9189L2.10111 12.7329H6.9002L8.57893 36.9202L4.5211 40.4642L0.421021 36.9189Z" />
            <path d="M6.51734 13.1308L8.15246 36.7474L4.51976 39.9282L0.840727 36.75L2.48266 13.1308H6.51734ZM7.28176 12.3269H1.71824L0 37.0904L4.52248 41.0001L9 37.0904L7.28176 12.3269Z" />
            <path d="M2.07932 9.01722L0.772583 0.401855H8.27236L6.96698 9.01722H2.07932Z" />
            <path d="M7.79816 0.803922L6.61405 8.61536H2.43086L1.24675 0.803922H7.79816ZM8.75198 0H0.303833L1.72639 9.41928H7.31307L8.74653 0H8.75198Z" />
          </svg>
          Internships
        </li>
        <Link to="/home">
          <li className="navbar__item">Home</li>
        </Link>
        <Link to="/explore">
          <li className="navbar__item">Explore</li>
        </Link>
        <Link to="/profile">
          <li className="navbar__item">Profile</li>
        </Link>
        <li
          className="navbar__item navbar__item--logout"
          onClick={() => handleLogout()}
        >
          LOGOUT
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
