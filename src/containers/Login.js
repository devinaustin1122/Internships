import TextboxStyled from "../styles/TextboxStyled";
import ButtonStyled from "../styles/ButtonStyled";
import LinkStyled from "../styles/LinkStyled";

function Login() {
  return (
    <div className="login">
      <section className="hero">
        <img className="hero__img--left" src="corner.svg" />
        <img className="hero__img--right" src="corner.svg" />
        <img className="hero__img" src="internship.svg" />
        <img className="hero__logo" src="logo.svg" />
        <h1 className="hero__title">INTERNSHIPS</h1>
      </section>
      <section className="form">
        <form className="form__content">
          <TextboxStyled placeholder="USERNAME" />
          <TextboxStyled placeholder="PASSWORD" />
          <ButtonStyled backgroundColor={"#004280"} value="LOGIN" />
          <LinkStyled>forgot your password?</LinkStyled>
          <ButtonStyled backgroundColor={"#64CC6F"} value="CREATE AN ACCOUNT" />
        </form>
      </section>
    </div>
  );
}

export default Login;
