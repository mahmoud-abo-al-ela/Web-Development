import classes from "./Gallery.module.css";
import car1 from "../../imgs/cars/Car2.png";
import car2 from "../../imgs/cars/Car1.png";
import car3 from "../../imgs/cars/Car3.png";
import car4 from "../../imgs/cars/Car4.png";
import car5 from "../../imgs/cars/Rectangle2.png";
import car6 from "../../imgs/cars/Car5.png";
import car7 from "../../imgs/cars/Car6.png";
import car8 from "../../imgs/cars/Car7.png";
import car9 from "../../imgs/cars/Car.png";
function Gallery() {
  return (
    <section id="gallery" className={classes.gallery}>
      <div className="row">
        <div className={`col-md-4 ${classes.col_1} d-none d-md-block`}>
          <img src={car9} alt="car-img" />
          <img src={car2} alt="car-img" />
          <img src={car1} alt="car-img" />
        </div>
        <div className={`col-md-4 ${classes.col_2}`}>
          <img src={car3} alt="car-img" />
          <div className={classes.info}>
            <div className={classes.imageContainer}>
              <img src={car5} alt="car-img" />
              <div className={classes.textContainer}>
                <h3>Tesla Model 3</h3>
                <p>Disruptive, avant-garde, futuristic, innovative.</p>
                <button>
                  <a href="#contact-us">Contact</a>
                </button>
              </div>
            </div>
          </div>
          <img src={car4} alt="car-img" />
        </div>
        <div className={`col-md-4 ${classes.col_3} d-none d-md-block`}>
          <img src={car6} alt="car-img" />
          <img src={car7} alt="car-img" />
          <img src={car8} alt="car-img" />
        </div>
      </div>
    </section>
  );
}
export default Gallery;
