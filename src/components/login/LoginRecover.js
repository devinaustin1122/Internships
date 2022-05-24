import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import StyledTextbox from "../../styles/StyledTexbox";
import StyledButton from "../../styles/StyledButton";
import Alert from "../common/Alert";

const LoginRecover = () => {
  const [email, setEmail] = useState();

  const handleRecover = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleRecover} className="form">
      <StyledTextbox
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="EMAIL"
        type="text"
        required
      />
      <StyledButton type="submit">SEND RECOVERY EMAIL</StyledButton>
      <Link className="link" to={"/login"}>
        return to login
      </Link>
    </form>
  );
};

export default LoginRecover;
