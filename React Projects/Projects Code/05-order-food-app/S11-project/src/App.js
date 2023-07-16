import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShow, setCartShow] = useState(false);
  const showCart = () => {
    setCartShow(true);
  };
  const hideCart = () => {
    setCartShow(false);
  };

  return (
    <CartProvider>
      {cartShow && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <Meals />
    </CartProvider>
  );
}

export default App;
