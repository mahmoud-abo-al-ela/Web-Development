import { testimonials } from "../../api/data";
import Slider from "react-slick";
import classes from "./Testominial.module.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../../imgs/testmonials/bmw.png";
import "./custom-slider-style.css";

function Testominial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className={classes.testo}>
      <div className="container">
        <div className={`row ${classes.row_1}`}>
          <h2>TESTIMONIALS</h2>
          <h3>Testimonials</h3>
        </div>
        <div className={`row d-flex justify-content-center ${classes.row_2}`}>
          <div className="col-md-10 col-12 p-0">
            <Slider className="mb-5 slider" {...settings}>
              {testimonials.map((person, index) => {
                return (
                  <>
                    <article key={`testimonial-${index}`}>
                      <p className={classes.desc}>{person.description}</p>
                      <div className={classes.icons}>
                        <FontAwesomeIcon
                          className="mr-3"
                          icon={faStar}
                          size="3x"
                          color="gold"
                        />
                        <FontAwesomeIcon
                          className="mr-3"
                          icon={faStar}
                          size="3x"
                          color="gold"
                        />
                        <FontAwesomeIcon
                          className="mr-3"
                          icon={faStar}
                          size="3x"
                          color="gold"
                        />
                        <FontAwesomeIcon
                          className="mr-3"
                          icon={faStar}
                          size="3x"
                          color="gold"
                        />
                        <FontAwesomeIcon
                          className="mr-3"
                          icon={faStar}
                          size="3x"
                          color="gold"
                        />
                      </div>
                      <h3 className={classes.name}>{person.name}</h3>
                    </article>
                  </>
                );
              })}
            </Slider>
            <div className={classes.img}>
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Testominial;
