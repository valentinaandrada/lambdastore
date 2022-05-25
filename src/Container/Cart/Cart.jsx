// Context
import { useCartContext } from "../../context/CartContext";
// Components
import CartItem from "../../components/CartItem/CartItem";
// Styles
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart() {
  const { cartList, clearCart, totalItems, totalAmount } = useCartContext();

  const delivery = totalAmount < 40 ? 3.9 : 0.0;
  const total = totalAmount + delivery;

  if (cartList.length === 0) {
    return (
      <div className="container text-center vh-100 d-flex flex-column justify-content-center p-5 ff-secondary">
        <p className="fs-5 fw-bold ">Your shopping bag is empty.</p>
        <p className="f-smaller">Be inspired and discover something new to renew your wardrobe.</p>
        <Link to="/" className="link">
          <button className="btn-gral btn-color w-auto mt-5 px-5 fw-bold">Discover the latest</button>
        </Link>
      </div>
    );
  } 
    return (
      <div className="container cart-cont ff-primary">
        <div>
          <p className="fs-5 mb-4">
            SHOPPING BAG <span className="text-secondary">({totalItems})</span>{" "}
          </p>
          {cartList.map((item) => (
            <CartItem key={item.id} item={item} quantity={item.quantity} />
          ))}
          <button onClick={clearCart} className="btn-gral btn-white">
            Clear Cart
          </button>
        </div>
        <div className="cart-detail p-5">
          <p className=" fs-5">SUMMARY</p>
          <p className="text-secondary f-smaller">
            {totalAmount < 40
              ? `Free home delivery if you add ${
                  40 - totalAmount
                } EUR to your shopping bag`
              : `Free home delivery on your purchase`}
          </p>
          <div className="d-flex justify-content-between mt-5">
            <p className=" fs-5">Subtotal</p>
            <p>{totalAmount} EUR</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Delivery</p>
            <p>{delivery === 0 ? `FREE` : `${delivery} EUR`}</p>
          </div>
          <div className="d-flex justify-content-between mt-5">
            <p className=" fs-5 mb-0">Total</p>
            <p className="mb-0">{total} EUR</p>
          </div>
          <p className="text-end text-secondary f-smaller">*TAXES INCLUDED</p>
          <button className="btn-gral btn-white mt-5">Checkout</button>
        </div>
      </div>
    );
  }


export default Cart;
