import { Link } from "react-router-dom";
import profile from "../images/profile.jpeg";
import edit from "../images/edit.svg";
import StyledBadge from "../styles/StyledBadge";
import StyledButton from "../styles/StyledButton";

const internships = [
  {
    id: "279651e9d22da08a344cc8bb620326633e5f8686",
    title: "Assistant Developer",
    organization: "Longwood University",
    status: "Approved",
  },
  {
    id: "94076a6ad332930c2b7cd687b4672e6ea0084821",
    title: "Engineers Assistant",
    organization: "Longwood University",
    status: "Pending",
  },
  {
    id: "57e6f32a7a87dec9b1aa7d5ced303ce741861f48",
    title: "Mail Room Coordinator",
    organization: "Longwood University",
    status: "Pending",
  },
];
const user = {
  id: "db3995d64344242e877f9f24f320c099a858868e",
  name: "Devin Dyer",
  organization: "Longwood University",
  title: "Internship Coordinator",
};

const Profile = () => {
  return (
    <main className="dashboard">
      <section className="profile">
        <div className="profile__crop">
          <img className="profile__img" src={profile} />
        </div>
        <h2>{user.name}</h2>
        <h3>{user.organization}</h3>
        <h4>{user.title}</h4>
        <Link to={"/profile/edit"}>
          <img className="profile__edit" src={edit} />
        </Link>
      </section>
      <section className="internship">
        <StyledButton type="button" value="CREATE INTERNSHIP" />
        <ul className="internships__list">
          {internships.map((internship) => {
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
    </main>
  );
};

export default Profile;
