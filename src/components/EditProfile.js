import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profile from "../images/profile.jpeg";
import StyledButton from "../styles/StyledButton";
import StyledTextbox from "../styles/StyledTexbox";

const EditProfile = (props) => {
  let navigate = useNavigate();

  const [input, setInput] = useState({
    name: props.user.name,
    organization: props.user.organization,
    title: props.user.title,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/profiles/edit", {
        ...input,
        token: props.user.token,
      })
      .then(({ data }) => {
        props.setUser(data);
        navigate("/profile");
      })
      .catch((err) => console.log(err));
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
      <h3>{props.user.username}</h3>
      <a onClick={handleSelect}>upload profile picture</a>
      <form className="form" onSubmit={handleSubmit}>
        <StyledTextbox
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          placeholder="FULL NAME"
          type="text"
          required
        />
        <StyledTextbox
          value={input.organization}
          onChange={(e) => setInput({ ...input, organization: e.target.value })}
          placeholder="ORGANIZATION"
          type="text"
          required
        />
        <StyledTextbox
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
          placeholder="TITLE"
          type="text"
          required
        />
        <StyledButton value="SAVE" type={"submit"} />
      </form>
    </section>
  );
};

export default EditProfile;
