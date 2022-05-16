import profile from "../profile.jpg";
import StyledButton from "../styles/StyledButton";
import StyledTextbox from "../styles/StyledTexbox";

const EditProfile = (props) => {
  return (
    <form className="profile-edit form">
      <div className="profile__crop">
        <img className="profile__img" src={profile} />
      </div>
      <StyledTextbox value={props.user.name} type="text" required />
      <StyledTextbox value={props.user.organization} type="text" required />
      <StyledTextbox value={props.user.title} type="text" required />
      <StyledButton value="SAVE" type={"submit"} />
    </form>
  );
};

export default EditProfile;
