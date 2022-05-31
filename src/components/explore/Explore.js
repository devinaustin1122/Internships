import "./Explore.css";
import InternshipList from "../internship/InternshipList";

const Explore = () => {
  return (
    <main className="explore">
      <div className="explore__content">
        <header className="explore__header">Search</header>
        <section className="explore__feed">
          <InternshipList />
        </section>
      </div>
    </main>
  );
};

export default Explore;
