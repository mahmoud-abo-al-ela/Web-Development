import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <section id="contact-us" className={`${classes.footer}`}>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div
            className={`col-12 col-md-3 mb-4  d-flex flex-column justify-content-start align-items-start ${classes.col_1}`}
          >
            <h2>
              <span>Your</span>Car
            </h2>
            <p className="pt-3 pb-3">
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </p>
            <p>
              we are dedicated to providing our customers with a first-class car
              buying, selling, and renting experience.
            </p>
          </div>
          <div
            className={`col-12 col-md-3 mb-4 d-flex flex-column justify-content-center align-items-center ${classes.col_2}`}
          >
            <h3 className="mb-3">News Letter</h3>
            <p className="mt-4 mb-4 ">
              Subscribe to our news letter for updates, news and exclusive
              offers
            </p>
            <div
              className={`mt-4 mb-4 d-flex align-items-center ${classes.sub}`}
            >
              <input
                className="mr-4"
                type="text"
                placeholder="Email"
                name="subscribe"
                id="subscribe"
              />
              <button>Subscribe</button>
            </div>
          </div>
          <div
            className={`col-12 col-md-3 d-flex flex-column align-items-center ${classes.col_3}`}
          >
            <h3 className="pb-4">Contact</h3>
            <div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon className="fa-lg" icon={faMapMarkerAlt} />
                <div className="ml-3">
                  <p className="d-flex flex-column ">
                    2038 2nd Avenue
                    <span>Las Vegas, United States</span>
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon className="fa-lg" icon={faPhone} />
                <div className="ml-3">
                  <p className="d-flex flex-column">
                    01444773421423 <span>01477678449405</span>
                  </p>
                </div>
              </div>

              <p>
                <FontAwesomeIcon className="fa-lg mr-3" icon={faEnvelope} />{" "}
                info@YourCar.com
              </p>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="mt-4 pb-3 d-flex ">
            <div className="mr-5 ">
              <FontAwesomeIcon
                className={`fa-2x ${classes.icon} `}
                icon={faFacebook}
              />
            </div>
            <div className="mr-5 cursor-pointer">
              <FontAwesomeIcon
                className={`fa-2x ${classes.icon} `}
                icon={faTwitter}
              />
            </div>
            <div className="mr-5 cursor-pointer">
              <FontAwesomeIcon
                className={`fa-2x ${classes.icon} `}
                icon={faInstagram}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className={classes.copy}>
          <p>
            © Copyright 2023 · <span>YourCar</span> All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
export default Footer;
