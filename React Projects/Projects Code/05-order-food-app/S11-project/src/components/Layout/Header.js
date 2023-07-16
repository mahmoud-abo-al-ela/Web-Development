import React from "react";
import HeaderCartBtn from "./HeaderCartBtn";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartBtn onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true"
          alt="meal"
        />
      </div>
    </>
  );
};

export default Header;
