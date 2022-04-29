import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import TextboxStyled from "../styles/TextboxStyled";
import ButtonStyled from "../styles/ButtonStyled";
import LinkStyled from "../styles/LinkStyled";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  return (
    <section className="login">
      <img className="login__logo" src="logo.svg" />
      <h1 className="login__heading">INTERNSHIPS</h1>
      <Routes>
        <Route
          path="/login"
          element={
            <form className="form">
              <TextboxStyled
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <TextboxStyled
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <ButtonStyled value="LOGIN" />
              <Link to={"/account/recover"}>
                <LinkStyled>forgot your password?</LinkStyled>
              </Link>
              <Link to={"/account/create"}>
                <ButtonStyled
                  backgroundColor={"#64CC6F"}
                  value="CREATE AN ACCOUNT"
                />
              </Link>
            </form>
          }
        />
        <Route
          path="/account/create"
          element={
            <form className="form">
              <TextboxStyled
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <TextboxStyled
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <TextboxStyled
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Confirm password"
              />
              <ButtonStyled value="CREATE ACCOUNT" />
              <Link to={"/login"}>
                <LinkStyled>return to login</LinkStyled>
              </Link>
            </form>
          }
        />
        <Route
          path="/account/recover"
          element={
            <form className="form">
              <TextboxStyled
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
              />
              <ButtonStyled value="SEND RECOVERY EMAIL" />
              <Link to={"/login"}>
                <LinkStyled>return to login</LinkStyled>
              </Link>
            </form>
          }
        />
      </Routes>
    </section>
  );
}

export default Login;
