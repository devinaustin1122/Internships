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
      <img
        className="navbar__toggle"
        src={menu}
        onClick={() => setToggle(!toggle)}
      />
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
