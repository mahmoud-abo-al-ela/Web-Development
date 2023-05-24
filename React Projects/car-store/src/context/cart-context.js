import React from "react";

export const CartContext = React.createContext({
  items: [],
  totalQuantity: 0,
  increaseItem: (item) => {},
  decreaseItem: (id) => {},
  deleteItem: (id) => {},
  clearCart: () => {},
});
