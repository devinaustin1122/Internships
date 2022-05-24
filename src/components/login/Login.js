import axios from "axios";
import { useState, useEffect, useInsertionEffect } from "react";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import StyledTextbox from "../../styles/StyledTexbox";
import StyledButton from "../../styles/StyledButton";
import LoginCreate from "./LoginCreate";
import LoginRecover from "./LoginRecover";
import Alert from "../common/Alert";

const Login = (props) => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  const handleLogin = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/accounts/authenticate", {
        email: input.email,
        password: input.password,
      })
      .then(({ data }) => {
        props.setUser(data);
        setError(undefined);
        navigate("/profile");
      })
      .catch((err) => setError(err.response.data));
  };

  return (
    <section className="login">
      <div className="login__container">
        <svg
          className="login__logo"
          width="9"
          height="41"
          viewBox="0 0 9 41"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.421021 36.9189L2.10111 12.7329H6.9002L8.57893 36.9202L4.5211 40.4642L0.421021 36.9189Z" />
          <path d="M6.51734 13.1308L8.15246 36.7474L4.51976 39.9282L0.840727 36.75L2.48266 13.1308H6.51734ZM7.28176 12.3269H1.71824L0 37.0904L4.52248 41.0001L9 37.0904L7.28176 12.3269Z" />
          <path d="M2.07932 9.01722L0.772583 0.401855H8.27236L6.96698 9.01722H2.07932Z" />
          <path d="M7.79816 0.803922L6.61405 8.61536H2.43086L1.24675 0.803922H7.79816ZM8.75198 0H0.303833L1.72639 9.41928H7.31307L8.74653 0H8.75198Z" />
        </svg>
        <h1 className="login__heading">INTERNSHIPS</h1>
        <Routes>
          <Route
            path="/login"
            element={
              <form onSubmit={handleLogin} className="form">
                <Alert message={error} setError={setError}></Alert>
                <StyledTextbox
                  value={input.email}
                  onChange={(e) =>
                    setInput({ ...input, email: e.target.value })
                  }
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
            }
          />
          <Route path="/account/create" element={<LoginCreate />} />
          <Route path="/account/recover" element={<LoginRecover />} />
          <Route path="*" element={<Navigate to="/login" />} />{" "}
        </Routes>
      </div>
    </section>
  );
};

export default Login;
