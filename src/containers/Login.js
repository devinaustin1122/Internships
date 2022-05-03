import axios from "axios";
import bcrypt from "bcryptjs/dist/bcrypt";
import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import StyledTextbox from "../styles/StyledTexbox";
import StyledButton from "../styles/StyledButton";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("username: " + username);
    var hash = bcrypt.hashSync(password, 8);
    console.log(hash);

    axios
      .post("http://localhost:3001/users/authenticate", {
        username,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleCreate = (e) => {
    e.preventDefault();
  };

  const handleRecover = (e) => {
    e.preventDefault();
  };

  return (
    <section className="login">
      <img className="login__logo" src="logo.svg" />
      <h1 className="login__heading">INTERNSHIPS</h1>
      <Routes>
        <Route
          path="/login"
          element={
            <form onSubmit={handleLogin} className="form">
              <StyledTextbox
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="USERNAME"
                type="text"
              />
              <StyledTextbox
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                type="password"
              />
              <StyledButton value="LOGIN" type="submit" />
              <Link to={"/account/recover"}>forgot your password?</Link>
              <Link to={"/account/create"}>
                <StyledButton
                  backgroundColor={"#64CC6F"}
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="USERNAME"
                type="text"
              />
              <StyledTextbox
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                type="password"
              />
              <StyledTextbox
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm password"
                type="password"
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="USERNAME"
                type="text"
              />
              <StyledButton value="SEND RECOVERY EMAIL" type="submit" />
              <Link to={"/login"}>return to login</Link>
            </form>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />{" "}
      </Routes>
    </section>
  );
}

export default Login;
