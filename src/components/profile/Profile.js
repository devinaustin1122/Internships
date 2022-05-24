import "./Profile.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../../images/profile.jpeg";
import StyledButton from "../../styles/StyledButton";
import InternshipList from "../internship/InternshipList";

const Profile = (props) => {
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    setEdit(!edit);
    document.body.style.overflow = "hidden";
  };

  return (
    <main className={"profile"}>
      <section className="profile__header">
        <figure className="profile__crop">
          <img className="profile__img" src={profile} />
        </figure>
        <h2>{props.profile.name}</h2>
        <h3>{props.profile.organization}</h3>
        <h4>{props.profile.title}</h4>
        <svg
          className="profile__edit-toggle"
          onClick={handleEdit}
          width="96"
          height="96"
          viewBox="0 0 96 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 69V84H27L71.24 39.76L56.24 24.76L12 69ZM82.84 28.16C84.4 26.6 84.4 24.08 82.84 22.52L73.48 13.16C71.92 11.6 69.4 11.6 67.84 13.16L60.52 20.48L75.52 35.48L82.84 28.16V28.16Z" />
        </svg>
      </section>
      <section className="profile__internships">
        <StyledButton onClick={() => navigate("/internship/create")}>
          CREATE INTERNSHIP
        </StyledButton>
        <InternshipList />
      </section>
      <div className={edit ? "profile__edit--open" : "profile__edit--closed"}>
        <section className="profile__modal">
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
          <p>Hiasl;djfla;sjfl;asdfjas</p>
        </section>
      </div>
    </main>
  );
};

export default Profile;
