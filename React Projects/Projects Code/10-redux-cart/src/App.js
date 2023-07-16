import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./components/store/ui-slice";
import { cartActions } from "./components/store/cart-slice";
import Notificationn from "./components/UI/Notification";

let init = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchCartData = async () => {
      const response = await fetch(
        "https://cart-f3d89-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch cart data.");
      }
      const data = await response.json();
      dispatch(
        cartActions.replaceCart({
          items: data.items || [],
          totalQuantity: data.totalQuantity,
        })
      );
      setDataFetched(true);
    };
    fetchCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          state: "error",
          title: "Error!",
          message: error.message,
        })
      );
    });
  }, [dispatch]);

  useEffect(() => {
    if (dataFetched) {
      const sendCartData = async () => {
        if (init) {
          init = false;
          return;
        }
        dispatch(
          uiActions.showNotification({
            state: "pending",
            title: "sending...",
            message: "sending cart data",
          })
        );
        const response = await fetch(
          "https://cart-f3d89-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({
              items: cart.items,
              totalQuantity: cart.totalQuantity,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Sending cart data failed");
        }

        dispatch(
          uiActions.showNotification({
            state: "success",
            title: "success",
            message: "cart data sent successfully",
          })
        );
      };
      sendCartData().catch((error) => {
        dispatch(
          uiActions.showNotification({
            state: "error",
            title: "Error!",
            message: "failed to send cart data ",
          })
        );
      });
    }
  }, [cart, dispatch, dataFetched]);
  return (
    <>
      {notification && (
        <Notificationn
          state={notification.state}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
