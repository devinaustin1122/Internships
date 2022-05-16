import { useState } from "react";
import { Link } from "react-router-dom";
import profile from "../profile.jpeg";
import back from "../back.svg";
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
        <img src={back} />
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
