import classes from "./Services.module.css";
import service1 from "../../imgs/services/star.png";
import service2 from "../../imgs/services/key.png";
import service3 from "../../imgs/services/diamond.png";
function Services() {
  return (
    <>
      <section id="services" className={classes.services}>
        <div className="container">
          <div className={classes.row_1}>
            <h2>SERVICES</h2>
            <h3>Services</h3>
          </div>
          <div className={`row ${classes.row_2}`}>
            <div className="col-md-4">
              <img src={service1} alt="service-1" />
              <h4>Car sales</h4>
              <p>
                At YourCar, we offer a wide selection of luxury vehicles for
                sale. Whether you're in the market for a sleek sports car or a
                spacious SUV, we have the perfect vehicle to fit your needs.
              </p>
            </div>
            <div className="col-md-4">
              <img src={service2} alt="service-1" />
              <h4>Car rental</h4>
              <p>
                If you're in need of a luxury car rental, look no further than
                YourCar. Our fleet of high-end vehicles is regularly maintained
                and serviced to ensure that you have a safe and comfortable
                driving experience.
              </p>
            </div>
            <div className="col-md-4">
              <img src={service3} alt="service-1" />
              <h4>Car selling</h4>
              <p>
                At YourCar, we make it easy to sell your car. Simply bring your
                vehicle in for an appraisal, and we'll handle the rest. We offer
                fair prices and a hassle-free selling process, so you can get
                your vehicle with minimal effort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Services;
