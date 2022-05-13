import profile from "../profile.jpg";
import edit from "../edit.svg";
import StyledBadge from "../styles/StyledBadge";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <figure className="profile">
        <div className="profile__crop">
          <img className="profile__img" src={profile} />
        </div>
        <img className="profile__edit" src={edit} />
        <h2>Dr. Stephen Brule</h2>
        <h3>Internship Coordinator</h3>
        <h4>Longwood University</h4>
      </figure>
      <hr />
      <ul className="internships">
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
  );
};

export default Dashboard;
