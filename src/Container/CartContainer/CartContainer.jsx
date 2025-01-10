// React
import { Link } from "react-router-dom";
// Context
import { useCartContext } from "../../context/CartContext";
// Components
import CartList from "../../components/CartList/CartList";
import CartDetail from "../../components/CartDetail/CartDetail";
// Styles
import "./CartContainer.css";

function CartContainer() {
  const { cartList, clearCart, totalItems, orderID, resetOrder } =
    useCartContext();

  if (cartList.length === 0) {
    if (orderID) {
      return (
        <div className="container text-center vh-100 d-flex flex-column justify-content-center p-5 ff-secondary">
          <p className="fs-5 fw-bold ">Thank you for your purchase!</p>
          <p className="f-smaller">Order number: {orderID}</p>
          <Link to="/" className="link">
            <button
              className="btn-gral btn-color w-auto mt-3 px-5 fw-bold"
              onClick={resetOrder}
            >
              Back to homepage
            </button>
          </Link>
        </div>
      );
    }
    return (
      <div className="container text-center vh-100 d-flex flex-column justify-content-center p-5 ff-secondary">
        <p className="fs-5 fw-bold ">Your shopping bag is empty.</p>
        <p className="f-smaller">
          Be inspired and discover something new to renew your wardrobe.
        </p>
        <Link to="/" className="link">
          <button className="btn-gral btn-color w-auto mt-5 px-5 fw-bold">
            Discover the latest
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-cont ff-primary">
      <div className="cart-cont-sec">
        <p className="fs-5 mb-4">
          SHOPPING BAG <span className="text-secondary">({totalItems})</span>{" "}
        </p>
        <CartList />
        <button onClick={clearCart} className="btn-white">
          Clear Cart
        </button>
      </div>
      <div className="cart-cont-sec">

      <CartDetail />
      </div>
    </div>
  );
}

export default CartContainer;
