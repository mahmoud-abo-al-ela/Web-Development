import { TOGGLE_FAV } from "../actions/products";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Jacket",
      description: "Cool jacket.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "T-Shirt",
      description: "Pretty t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Shoes",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Hat",
      description: "An orange hat.",
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );
      const newFavStatus = !state.products[prodIndex].isFavorite;
      const updatedProducts = [...state.products];
      updatedProducts[prodIndex] = {
        ...state.products[prodIndex],
        isFavorite: newFavStatus,
      };
      return {
        ...state,
        products: updatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
