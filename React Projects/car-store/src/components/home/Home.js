import classes from "./Home.module.css";
import Navs from "./Navbar";
function Home() {
  return (
    <header id="home" className={classes.header}>
      <div className="row">
        <div className="container">
          <Navs />
          <div className={`col-md-6 col-10 ${classes.title}`}>
            <h1>Find the perfect car for you at YourCar.</h1>
            <p>
              We offer a wide range of cars that cater to your needs and budget.
              Visit us today and drive away with your dream car!
            </p>
            <button>
              <a href="#gallery">Discover</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
