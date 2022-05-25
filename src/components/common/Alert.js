import { useEffect, useState } from "react";
import "./Alert.css";

const Alert = (props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (props.message) {
      setToggle(true);
      setTimeout(() => {
        setToggle(false);
        props.setError(undefined);
      }, 4000);
    } else {
      setToggle(false);
    }
  }, [props.message]);

  return (
    <aside className={toggle ? "alert alert--open" : "alert"}>
      {props.message}
    </aside>
  );
};

export default Alert;
