import profile from "../profile.jpg";
import edit from "../edit.svg";
import StyledBadge from "../styles/StyledBadge";
import StyledButton from "../styles/StyledButton";

const internships = [
  { title: "Assistant Developer", organization: "Longwood University" },
  { title: "Engineers Assistant", organization: "Longwood University" },
  { title: "Mail Room Coordinator", organization: "Longwood University" },
];
const user = {
  name: "Devin Dyer",
  organization: "Longwood University",
  title: "Internship Coordinator",
};

const Dashboard = () => {
  return (
    <main className="dashboard">
      <section className="profile">
        <div className="profile__crop">
          <img className="profile__img" src={profile} />
        </div>
        <img className="profile__edit" src={edit} />
        <h2>Dr. Stephen Brule</h2>
        <h3>Internship Coordinator</h3>
        <h4>Longwood University</h4>
      </section>
      <StyledButton
        type="button"
        backgroundColor={"#64CC6F"}
        value="CREATE INTERNSHIP"
      />
      <hr />
      <section className="internship">
        <ul className="internships__list">
          <li className="internships__item">
            <h3>Assistant Developer</h3>
            <h4>Longwood University</h4>
            <StyledBadge backgroundColor={"#64CC6F"}>Approved</StyledBadge>
          </li>
          <li className="internships__item">
            <h3>Assistant Engineer</h3>
            <h4>Longwood University</h4>
            <StyledBadge backgroundColor={"#F29100"}>Pending</StyledBadge>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Dashboard;
