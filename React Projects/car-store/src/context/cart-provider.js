import React, { useState, useEffect } from "react";
import { CartContext } from "./cart-context";

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    cartItems.forEach((item) => {
      localStorage.setItem(`car_${item.id}_quantity`, item.quantity);
    });
  }, [cartItems]);

  const increaseItemToCart = (newItem) => {
    setCartItems((prevCartItems) => {
      const existingCartItemIndex = prevCartItems.findIndex(
        (item) => item.id === newItem.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingCartItemIndex].quantity += 1;
        return updatedCartItems;
      }

      return [...prevCartItems, { ...newItem, quantity: 1 }];
    });
  };

  const decreaseItemFromCart = (itemId) => {
    setCartItems((prevCartItems) => {
      const existingCartItem = prevCartItems.find((item) => item.id === itemId);

      if (existingCartItem.quantity === 1) {
        localStorage.removeItem(`car_${itemId}_quantity`);
        return prevCartItems.filter((item) => item.id !== itemId);
      }

      return prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const deleteItemFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
    const itemQuantity = localStorage.getItem(`car_${itemId}_quantity`);
    if (itemQuantity) {
      localStorage.removeItem(`car_${itemId}_quantity`);
    }
  };

  const clearAllCartItems = () => {
    setCartItems([]);
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("car_")) {
        localStorage.removeItem(key);
      }
    }
  };

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartContextValue = {
    cart: cartItems,
    totalQuantity: totalQuantity,
    increaseItem: increaseItemToCart,
    decreaseItem: decreaseItemFromCart,
    deleteItem: deleteItemFromCart,
    clearCart: clearAllCartItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};
