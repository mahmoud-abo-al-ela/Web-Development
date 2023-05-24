import logo1 from "../../imgs/logos/Vector.png";
import logo2 from "../../imgs/logos/Vector1.png";
import logo3 from "../../imgs/logos/vector2.png";
import logo4 from "../../imgs/logos/vector3.png";
import logo5 from "../../imgs/logos/vector4.png";
import logo6 from "../../imgs/logos/vector5.png";
import logo7 from "../../imgs/logos/vector6.png";
import logo8 from "../../imgs/logos/vector7.png";
import classes from "./Logo.module.css";
function Logos() {
  return (
    <section className={`mb-5 ${classes.logos}`}>
      <div className="container">
        <div className="row d-block">
          <div
            className={`d-flex justify-content-around align-items-center text-align-center flex-wrap`}
          >
            <img className="col-md-1 " src={logo1} alt="logo" />
            <img className="col-md-1 " src={logo2} alt="logo" />
            <img className="col-md-1 " src={logo3} alt="logo" />
            <img className="col-md-1 " src={logo4} alt="logo" />
            <img className="col-md-1 " src={logo5} alt="logo" />
            <img className="col-md-1 " src={logo6} alt="logo" />
            <img className="col-md-1 " src={logo7} alt="logo" />
            <img className="col-md-1 " src={logo8} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Logos;
