import TextboxStyled from "../styles/TextboxStyled";
import ButtonStyled from "../styles/ButtonStyled";
import LinkStyled from "../styles/LinkStyled";

function Login() {
  return (
    <div className="login">
      <div className="container">
        <h1 className="mb-1">INTERNSHIPS</h1>
        <p className="mb-3">
          the app for creating and managing internships for your organization
        </p>
        <TextboxStyled placeholder="USERNAME" className="mb-1" />
        <TextboxStyled placeholder="PASSWORD" className="mb-3" />
        <ButtonStyled
          backgroundColor={"#004280"}
          value="LOGIN"
          className="mb-2"
        />
        <LinkStyled className="mb-2">forgot your password?</LinkStyled>
        <ButtonStyled
          backgroundColor={"#64CC6F"}
          value="CREATE AN ACCOUNT"
          className="mb-2"
        />
      </div>
    </div>
  );
}

export default Login;
