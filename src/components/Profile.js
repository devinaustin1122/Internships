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
          <svg
            className="logo"
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
          <h2>Welcome!</h2>
          <h3>Lets get you started...</h3>
          <p>
            Other people and companies would like to know a little more about
            you! In order to advertise yourself, first you need to setup a
            profile. You can add you name, organization and more! Add a profile
            picture if you want to get a little more personal.
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
            <StyledButton onClick={() => navigate("/internship/create")}>
              CREATE INTERNSHIP
            </StyledButton>
            <ul className="internships__list">
              {props.internships.length ? (
                props.internships.map((internship) => {
                  return (
                    <li key={internship.id} className="internships__item">
                      <h3>{internship.title}</h3>
                      <h4>{internship.organization}</h4>
                      <StyledBadge status={internship.status}>
                        {internship.status}
                      </StyledBadge>
                    </li>
                  );
                })
              ) : (
                <>
                  <h3>You got nothing.</h3>
                </>
              )}
            </ul>
          </section>
        </>
      )}
    </>
  );
};

export default Profile;
