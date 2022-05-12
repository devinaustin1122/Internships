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
      <img className="navbar__icon" src={tie} />
      <img
        className="navbar__toggle"
        src={menu}
        onClick={() => setToggle(!toggle)}
      />
      <ul className={toggle ? "list list-open" : "list"}>
        <li className="list__item">Profile</li>
        <li className="list__item">Internship</li>
        <li className="list__item">Explore</li>
        <li
          className="list__item list__item-logout"
          onClick={() => handleLogout()}
        >
          Logout
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
