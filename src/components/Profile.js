import { Link, useNavigate } from "react-router-dom";
import profile from "../images/profile.jpeg";
import StyledBadge from "../styles/StyledBadge";
import StyledButton from "../styles/StyledButton";

const Profile = (props) => {
  let navigate = useNavigate();
  return (
    <>
      {console.log(props.profile.name)}
      {props.profile.name == undefined ? (
        <section className="profile-cta">
          <h2>Welcome!</h2>
          <h3>Lets get you started...</h3>
          <p>
            Other people and companies would like to know a little more about
            you! In order to advertise yourself, first you need to setup your
            profile. You can add you name, organization and more! Add a profile
            picture if you want to be more personal.
          </p>
          <StyledButton onClick={() => navigate("/profile/edit")}>
            CREATE PROFILE
          </StyledButton>
        </section>
      ) : (
        <>
          <section className="profile">
            <div className="profile__crop">
              <img className="profile__img" src={profile} />
            </div>
            <h2>{props.profile.name}</h2>
            <h4>{props.user.email}</h4>
            <h3>{props.profile.organization}</h3>
            <h4>{props.profile.title}</h4>
            <Link to={"/profile/edit"}>
              <svg
                className="profile__edit"
                width="96"
                height="96"
                viewBox="0 0 96 96"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 69V84H27L71.24 39.76L56.24 24.76L12 69ZM82.84 28.16C84.4 26.6 84.4 24.08 82.84 22.52L73.48 13.16C71.92 11.6 69.4 11.6 67.84 13.16L60.52 20.48L75.52 35.48L82.84 28.16V28.16Z" />
              </svg>
            </Link>
          </section>
          <section className="internships">
            <StyledButton>CREATE INTERNSHIP</StyledButton>
            <ul className="internships__list">
              {props.internships.map((internship) => {
                return (
                  <li key={internship.id} className="internships__item">
                    <h3>{internship.title}</h3>
                    <h4>{internship.organization}</h4>
                    <StyledBadge status={internship.status}>
                      {internship.status}
                    </StyledBadge>
                  </li>
                );
              })}
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export default Profile;
