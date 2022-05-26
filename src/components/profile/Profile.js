import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/profile.svg";
import StyledButton from "../../styles/StyledButton";
import ProfileEdit from "./ProfileEdit";
import InternshipList from "../internship/InternshipList";
import Modal from "../common/Modal";

const Profile = (props) => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  return (
    <main className={"profile"}>
      <div className="profile__content">
        <section className="profile__header">
          <div className="profile__header__content">
            <figure className="profile__crop">
              <svg
                className="profile__img"
                width="409"
                height="409"
                viewBox="0 0 409 409"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="409" height="409" fill="#ECECEC" />
                <path d="M186.871 277.883L194.338 170.521H215.668L223.129 277.889L205.094 293.621L186.871 277.883Z" />
                <path d="M213.966 172.288L221.233 277.122L205.088 291.242L188.737 277.134L196.034 172.288H213.966ZM217.363 168.719H192.637L185 278.645L205.1 296L225 278.645L217.363 168.719Z" />
                <path d="M194.242 154.028L188.434 115.784H221.766L215.964 154.028H194.242Z" />
                <path d="M219.659 117.569L214.396 152.244H195.804L190.541 117.569H219.659ZM223.898 114H186.351L192.673 155.812H217.503L223.874 114H223.898Z" />
              </svg>
            </figure>
            <h3>{props.user.email}</h3>
            <h2>{props.profile.name}</h2>
            <h3>{props.profile.organization}</h3>
            <h4>{props.profile.title}</h4>
            <svg
              className="profile__edit-toggle"
              onClick={() => setToggle(true)}
              width="96"
              height="96"
              viewBox="0 0 96 96"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 69V84H27L71.24 39.76L56.24 24.76L12 69ZM82.84 28.16C84.4 26.6 84.4 24.08 82.84 22.52L73.48 13.16C71.92 11.6 69.4 11.6 67.84 13.16L60.52 20.48L75.52 35.48L82.84 28.16V28.16Z" />
            </svg>
          </div>
        </section>
        <section className="profile__internships">
          <StyledButton onClick={() => navigate("/internship/create")}>
            CREATE INTERNSHIP
          </StyledButton>
          <InternshipList />
        </section>
      </div>
      <Modal toggle={toggle}>
        <ProfileEdit profile={props.profile} setToggle={setToggle} />
      </Modal>
    </main>
  );
};

export default Profile;
