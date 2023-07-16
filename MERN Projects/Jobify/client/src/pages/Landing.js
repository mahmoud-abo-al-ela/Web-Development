import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link, Navigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
const Landing = () => {
  const { user } = useAppContext();
  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking </span>app
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
              iste ullam dolorem iusto, ex, laboriosam praesentium eius dolor
              sint, quo omnis nesciunt soluta nam! Ullam!
            </p>
            <Link to="/register">
              <button className="btn btn-hero">Login/Register</button>
            </Link>
          </div>
          <img src={main} alt="main_image" className="img main-img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Landing;
