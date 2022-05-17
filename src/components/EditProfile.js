import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.jpeg";
import back from "../images/back.svg";
import StyledButton from "../styles/StyledButton";
import StyledTextbox from "../styles/StyledTexbox";

const EditProfile = (props) => {
  const [input, setInput] = useState({
    name: props.user.name,
    organization: props.user.organization,
    title: props.user.title,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  const handleSelect = (e) => {
    e.preventDefault();
    console.log("handle select");
  };

  return (
    <section className="profile">
      <Link className="back" to="/profile">
        <svg
          className="back__img"
          width="96"
          height="96"
          viewBox="0 0 96 96"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M46.68 15.48L39.6 8.40002L0 48L39.6 87.6L46.68 80.52L14.16 48L46.68 15.48Z" />
        </svg>
      </Link>
      <div className="profile__crop">
        <img className="profile__img" src={profile} />
      </div>
      <a onClick={handleSelect}>select profile picture</a>
      <form className="form" onSubmit={handleSubmit}>
        <StyledTextbox
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          type="text"
          required
        />
        <StyledTextbox
          value={input.organization}
          onChange={(e) => setInput({ ...input, organization: e.target.value })}
          type="text"
          required
        />
        <StyledTextbox
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          type="text"
          required
        />
        <StyledButton value="SAVE" type={"submit"} />
      </form>
    </section>
  );
};

export default EditProfile;
