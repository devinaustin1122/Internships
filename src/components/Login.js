import axios from "axios";
import { useState } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import StyledTextbox from "../styles/StyledTexbox";
import StyledButton from "../styles/StyledButton";
import logo from "../tie.svg";

const Login = (props) => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    username: "",
    password: "",
    confirm: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/authenticate", {
        username: input.username,
        password: input.password,
      })
      .then(({ data }) => {
        props.setUser(data);
        navigate("/profile");
      })
      .catch((err) => console.log(err));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (input.password === input.confirm) {
      await axios.post("http://localhost:3001/users/create", {
        username: input.username,
        password: input.password,
      });
      navigate("/login");
    }
  };

  const handleRecover = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login">
      <div className="login__container">
        <img className="login__logo" src={logo} />
        <h1 className="login__heading">INTERNSHIPS</h1>
        <Routes>
          <Route
            path="/login"
            element={
              <form onSubmit={handleLogin} className="form">
                <StyledTextbox
                  value={input.username}
                  onChange={(e) =>
                    setInput({ ...input, username: e.target.value })
                  }
                  placeholder="USERNAME"
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
                <StyledButton value="LOGIN" type="submit" />
                <Link to={"/account/recover"}>forgot your password?</Link>
                <Link to={"/account/create"}>
                  <StyledButton
                    backgroundColor={"var(--success-color)"}
                    type="button"
                    value="CREATE AN ACCOUNT"
                  />
                </Link>
              </form>
            }
          />
          <Route
            path="/account/create"
            element={
              <form onSubmit={handleCreate} className="form">
                <StyledTextbox
                  value={input.username}
                  onChange={(e) => {
                    setInput({ ...input, username: e.target.value });
                  }}
                  placeholder="USERNAME"
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
                <StyledButton value="CREATE ACCOUNT" type="submit" />
                <Link to={"/"}>return to login</Link>
              </form>
            }
          />
          <Route
            path="/account/recover"
            element={
              <form onSubmit={handleRecover} className="form">
                <StyledTextbox
                  value={input.username}
                  onChange={(e) => {
                    setInput({ ...input, username: e.target.value });
                  }}
                  placeholder="USERNAME"
                  type="text"
                  required
                />
                <StyledButton value="SEND RECOVERY EMAIL" type="submit" />
                <Link to={"/login"}>return to login</Link>
              </form>
            }
          />
          <Route path="*" element={<Navigate to="/login" />} />{" "}
        </Routes>
      </div>
    </section>
  );
};

export default Login;
