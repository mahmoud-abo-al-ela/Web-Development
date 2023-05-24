import classes from "./About.module.css";
import car from "../../imgs/car.png";
function About() {
  return (
    <>
      <section id="about" className={classes.about}>
        <div className="container">
          <div className="row">
            <div className="column_1 col-md-7">
              <h2>ABOUT US</h2>
              <h3>About</h3>
              <p>
                YourCar is a luxury car dealership that offers a personalized
                and first-class experience to its clients. Our team of
                experienced professionals is dedicated to providing exceptional
                service and finding the perfect vehicle to match our clients'
                unique preferences and requirements. We have an extensive
                selection of high-end vehicles, ranging from sports cars to
                SUVs, all of which are maintained to the highest standards of
                quality and safety.
              </p>
              <p>
                At YourCar, we are committed to creating a stress-free and
                enjoyable car buying experience. We understand that purchasing a
                luxury car can be a significant investment, which is why we
                offer flexible financing options to make the process more
                manageable. Our team is available to answer any questions and
                provide guidance throughout the entire buying process. We take
                pride in our outstanding customer service and attention to
                detail, and we are confident that our clients will be satisfied
                with their experience at YourCar
              </p>
            </div>
            <div className={`${classes.column_2} col-md-5 d-none d-md-block `}>
              <img src={car} alt="car" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
