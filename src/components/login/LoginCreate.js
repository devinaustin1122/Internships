import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import StyledTextbox from "../../styles/StyledTexbox";
import StyledButton from "../../styles/StyledButton";
import Alert from "../common/Alert";

const LoginCreate = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const handleCreate = async (e) => {
    e.preventDefault();
    if (input.password === input.confirm) {
      await axios.post("http://localhost:3001/accounts/create", {
        email: input.email,
        password: input.password,
      });
      navigate("/login");
    }
  };

  return (
    <form onSubmit={handleCreate} className="form">
      <StyledTextbox
        value={input.email}
        onChange={(e) => {
          setInput({ ...input, email: e.target.value });
        }}
        placeholder="EMAIL"
        type="text"
        required
      />
      <StyledTextbox
        value={input.password}
        onChange={(e) => {
          setInput({ ...input, password: e.target.value });
        }}
        placeholder="PASSWORD"
        type="password"
        required
      />
      <StyledTextbox
        value={input.confirm}
        onChange={(e) => {
          setInput({ ...input, confirm: e.target.value });
        }}
        invalid={input.confirm !== input.password}
        placeholder="CONFIRM PASSWORD"
        type="password"
        required
      />
      <StyledButton type="submit">CREATE ACCOUNT</StyledButton>
      <Link className="link" to={"/"}>
        return to login
      </Link>
    </form>
  );
};

export default LoginCreate;
