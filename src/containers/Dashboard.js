import profile from "../profile.jpg";
import edit from "../edit.svg";

const Dashboard = () => {
  return (
    <main className="dashboard">
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
        <li className="internships__item"></li>
        <li className="internships__item"></li>
      </ul>
    </main>
  );
};

export default Dashboard;
