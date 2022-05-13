import { useState } from "react";
import menu from "../menu.svg";
import tie from "../tie.svg";

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
        <li className="navbar__item">Profile</li>
        <li className="navbar__item">Explore</li>
        <li className="navbar__item">Create</li>
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
