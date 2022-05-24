import { useEffect, useState } from "react";
import "./Alert.css";

const Alert = (props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (props.message === undefined) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, [props.message]);

  return (
    <aside className={toggle ? "alert alert--open" : "alert"}>
      {props.message}
    </aside>
  );
};

export default Alert;
