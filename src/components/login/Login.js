import "./Login.css";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginAuthenticate from "./LoginAuthenticate";
import LoginCreate from "./LoginCreate";
import LoginRecover from "./LoginRecover";

const Login = (props) => {
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
            element={<LoginAuthenticate setUser={props.setUser} />}
          />
          <Route path="/account/create" element={<LoginCreate />} />
          <Route path="/account/recover" element={<LoginRecover />} />
          <Route path="*" element={<Navigate to="/login" />} />{" "}
        </Routes>
      </div>

      <svg
        className="circle-1"
        width="196"
        height="196"
        viewBox="0 0 196 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="98" cy="98" r="98" fill="url(#paint0_radial_2_2)" />
        <defs>
          <radialGradient
            id="paint0_radial_2_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(98 98) rotate(90) scale(98)"
          >
            <stop stop-color="#004280" stop-opacity="0.2" />
            <stop offset="1" stop-color="#004280" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
      <svg
        className="circle-2"
        width="196"
        height="196"
        viewBox="0 0 196 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="98" cy="98" r="98" fill="url(#paint0_radial_2_2)" />
        <defs>
          <radialGradient
            id="paint0_radial_2_2"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(98 98) rotate(90) scale(98)"
          >
            <stop stop-color="#004280" stop-opacity="0.22" />
            <stop offset="1" stop-color="#004280" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Login;
