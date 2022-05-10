import profile from "../profile.jpg";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <div className="profile">
        <img className="profile__img" src={profile} />
        <h2>Dr. Stephen Brule</h2>
        <h3>Internship Coordinator</h3>
        <h4>Longwood University</h4>
        <p>
          This page provides a list of fake memoirs and journals. A fake memoir
          is a book that was published with the assertion that the events
          depicted are substantially true, but are later discovered or strongly
          asserted to be false. A book does not have to be entirely fictional to
          be considered a fake memoir.
        </p>
      </div>
    </main>
  );
};

export default Dashboard;
