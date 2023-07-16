import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="error" />
        <h3>Ooh! page not found</h3>
        <p>We can't seem to find page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
