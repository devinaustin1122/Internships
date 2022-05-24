import profile from "../../images/profile.jpeg";
import StyledButton from "../../styles/StyledButton";
import StyledTextbox from "../../styles/StyledTexbox";

const ProfileEdit = (props) => {
  return (
    <>
      <svg
        className="close"
        onClick={() => props.setToggle(false)}
        viewBox="0 0 24 24"
      >
        <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
      </svg>
      <figure className="profile__crop">
        <img className="profile__img" src={profile} />
      </figure>
      <a className="link">select profile picture</a>
      <StyledTextbox>{props.profile.name}</StyledTextbox>
      <StyledTextbox>{props.profile.organization}</StyledTextbox>
      <StyledTextbox>{props.profile.title}</StyledTextbox>
      <StyledButton>SAVE CHANGES</StyledButton>
    </>
  );
};

export default ProfileEdit;
