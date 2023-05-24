import React, { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import classes from "./Cars.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import seats from "../../imgs/seats.png";
import luggage from "../../imgs/lugage.png";
import "./custom-slider-styles.css";
function Cars() {
  const [carData, setCarData] = useState([]);
  const cartCtx = useContext(CartContext);

  const fetchData = async () => {
    const response = await fetch("cars.json");
    const data = await response.json();
    const carsWithQuantity = data.cars.map((car) => {
      const storedQuantity = localStorage.getItem(`car_${car.id}_quantity`);
      const quantity = storedQuantity ? parseInt(storedQuantity) : 0;
      return {
        ...car,
        quantity,
      };
    });
    setCarData(carsWithQuantity);
  };

  useEffect(() => {
    fetchData();
  }, [cartCtx]);

  const handleDecreaseAmount = (index) => {
    const updatedCarData = [...carData];
    const car = updatedCarData[index];

    if (car.quantity >= 1) {
      car.quantity -= 1;

      setCarData(updatedCarData);
    }
    if (car.quantity === 0) {
      localStorage.removeItem(`car_${car.id}_quantity`);
    } else {
      localStorage.setItem(`car_${car.id}_quantity`, car.quantity);
    }
    cartCtx.decreaseItem(car.id);
  };

  const handleIncreaseAmount = (index) => {
    const updatedCarData = [...carData];
    const car = updatedCarData[index];

    car.quantity += 1;
    setCarData(updatedCarData);
    localStorage.setItem(`car_${car.id}_quantity`, car.quantity);
    cartCtx.increaseItem({
      id: car.id,
      name: car.name,
      quantity: car.quantity,
      class: car.class,
      image: car.image,
    });
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
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
          centerMode: true,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: true,
          centerPadding: "15px",
        },
      },
    ],
  };

  return (
    <section id="cars" className={classes.cars}>
      <div className="container">
        <div className={`row ${classes.row_1}`}>
          <h2>CARS</h2>
          <h3>Cars</h3>
        </div>
      </div>
      <div className={`row ${classes.row_2}`}>
        <div className="col-md-10 col-12 p-0">
          <Slider className="slider" {...settings}>
            {carData.map((car) => {
              return (
                <div key={car.id} className={classes.card}>
                  <div className={classes.img}>
                    <img src={car.image} alt="Car" />
                  </div>
                  <div>
                    <h3 className={classes.class}>{car.class}</h3>
                    <h5 className={classes.name}>{car.name}</h5>
                  </div>
                  <p className={classes.desc}>{car.description}</p>
                  <div className={classes.b_card}>
                    <div className={classes.info}>
                      <div>
                        <img src={seats} alt="seats" />
                        <img src={luggage} alt="luggage" />
                      </div>
                      <div className={classes.seats}>
                        <p>{car.seats} Seats</p>
                        <p>{car.luggage} Luggage</p>
                      </div>
                    </div>
                    <div className={classes.btns}>
                      <div className={classes.amount_toggle}>
                        <button
                          onClick={() => handleDecreaseAmount(car.id)}
                          className={classes.btn_1}
                        >
                          <FontAwesomeIcon size="2x" icon={faMinus} />
                        </button>
                        <div className={classes.amount}>{car.quantity}</div>
                        <button
                          onClick={() => handleIncreaseAmount(car.id)}
                          className={classes.btn_2}
                        >
                          <FontAwesomeIcon size="2x" icon={faPlus} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </section>
  );
}
export default Cars;
