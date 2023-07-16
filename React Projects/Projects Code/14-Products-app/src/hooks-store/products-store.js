import { initStore } from './store';

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (curState, productId) => {
      const prodIndex = curState.products.findIndex(p => p.id === productId);
      const newFavStatus = !curState.products[prodIndex].isFavorite;
      const updatedProducts = [...curState.products];
      updatedProducts[prodIndex] = {
        ...curState.products[prodIndex],
        isFavorite: newFavStatus
      };
      return { products: updatedProducts };
    }
  };
  initStore(actions, {
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
    ]
  });
};

export default configureStore;