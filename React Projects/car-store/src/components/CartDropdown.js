import classes from "./CartDropdown.module.css";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";
import { faMinus, faPlus, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartDropdown() {
  const { cart, decreaseItem, increaseItem, deleteItem, clearCart } =
    useContext(CartContext);

  const handleDecreaseAmount = (event, id) => {
    event.stopPropagation();
    decreaseItem(id);
  };

  const handleIncreaseAmount = (event, item) => {
    event.stopPropagation();
    increaseItem(item);
  };
  const handleDeleteItem = (event, id) => {
    event.stopPropagation();
    deleteItem(id);
  };

  const handleClear = (event) => {
    event.stopPropagation();
    clearCart();
  };

  return (
    <>
      <div className={`${classes.cartDropdown} `}>
        {cart.length > 0 ? (
          <>
            <ul className={classes.cartItems}>
              {cart.map((item) => (
                <li key={item.id} className={classes.cartItem}>
                  <div className={classes.info}>
                    <p>{item.class}</p>
                    <p>{item.name}</p>
                    <div className={classes.edit}>
                      <button
                        onClick={(event) =>
                          handleDecreaseAmount(event, item.id)
                        }
                        className={classes.btn_1}
                      >
                        <FontAwesomeIcon size="xl" icon={faMinus} />
                      </button>
                      <div className={classes.amount}>{item.quantity}</div>
                      <button
                        onClick={(event) => handleIncreaseAmount(event, item)}
                        className={classes.btn_2}
                      >
                        <FontAwesomeIcon size="xl" icon={faPlus} />
                      </button>
                      <button
                        onClick={(event) => handleDeleteItem(event, item.id)}
                        className={classes.btn_3}
                      >
                        <FontAwesomeIcon size="xl" icon={faTrashAlt} />
                      </button>
                    </div>
                  </div>
                  <img src={item.image} alt={item.title} />
                </li>
              ))}
            </ul>
            <div
              className={classes.delete}
              onClick={(event) => handleClear(event)}
            >
              <div>
                <p>Dalete All</p>
                <button className={classes.btn_4}>
                  <FontAwesomeIcon size="lg" icon={faTrashAlt} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className={classes.empty}>
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
}
