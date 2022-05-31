import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledTextbox from "../../styles/StyledTexbox";
import StyledButton from "../../styles/StyledButton";
import Alert from "../common/Alert";

const Login = (props) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/accounts/authenticate", {
        email: input.email,
        password: input.password,
      })
      .then(({ data }) => {
        props.setUser(data);
        navigate("/profile");
      })
      .catch((err) => setError(err.response.data));
  };

  // Maybe I can use a custom hook here for my alerts?

  return (
    <form onSubmit={handleLogin} className="form">
      <Alert message={error} setError={setError}></Alert>
      <StyledTextbox
        value={input.email}
        onChange={(e) => setInput({ ...input, email: e.target.value })}
        placeholder="Email"
        type="text"
        required
      />
      <StyledTextbox
        value={input.password}
        onChange={(e) => {
          setInput({ ...input, password: e.target.value });
        }}
        placeholder="Password"
        type="password"
        required
      />
      <StyledButton type="submit">LOGIN</StyledButton>
      <Link className="link" to={"/account/recover"}>
        forgot your password?
      </Link>
      <Link to={"/account/create"}>
        <StyledButton backgroundColor={"var(--success-color)"}>
          CREATE AN ACCOUNT
        </StyledButton>
      </Link>
    </form>
  );
};

export default Login;
