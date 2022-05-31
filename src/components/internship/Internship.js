import "./Internship.css";

const Internship = () => {
  return (
    <>
      <div className="internship">
        <figure className="internship_crop">
          <svg
            className="internship__img"
            width="409"
            height="409"
            viewBox="0 0 409 409"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="409" height="409" fill="#ECECEC" />
            <path d="M186.871 277.883L194.338 170.521H215.668L223.129 277.889L205.094 293.621L186.871 277.883Z" />
            <path d="M213.966 172.288L221.233 277.122L205.088 291.242L188.737 277.134L196.034 172.288H213.966ZM217.363 168.719H192.637L185 278.645L205.1 296L225 278.645L217.363 168.719Z" />
            <path d="M194.242 154.028L188.434 115.784H221.766L215.964 154.028H194.242Z" />
            <path d="M219.659 117.569L214.396 152.244H195.804L190.541 117.569H219.659ZM223.898 114H186.351L192.673 155.812H217.503L223.874 114H223.898Z" />
          </svg>
        </figure>
        <h2>Support Analyst, IT</h2>
        <h4>Longwood University</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam
          ligula, dignissim in libero eget, ullamcorper faucibus elit. Nam
          placerat, lacus a sodales convallis, magna quam pretium dui, eget
          congue leo nulla sit amet nunc.{" "}
        </p>
        <div className="internship__tags">
          <span className="internship__tag">IT</span>
          <span className="internship__tag">Software Development</span>
          <span className="internship__tag">Hiring</span>
        </div>
      </div>
    </>
  );
};

export default Internship;
