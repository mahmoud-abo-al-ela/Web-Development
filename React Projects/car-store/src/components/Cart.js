import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import classes from "./Cart.module.css";
import { CartContext } from "../context/cart-context";
import CartDropdown from "./CartDropdown";

export default function Cart() {
  const { cart, totalQuantity } = useContext(CartContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownOpen = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={classes.cart} onClick={handleDropdownOpen}>
      <FontAwesomeIcon
        className={classes.icon}
        icon={faShoppingCart}
        size="lg"
      />
      <p className={classes.amount}>{totalQuantity}</p>
      {isDropdownOpen && <CartDropdown cart={cart} />}
    </div>
  );
}
