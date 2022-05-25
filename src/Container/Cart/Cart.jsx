import { useCartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.css";

function Cart() {
  const { cartList, clearCart, totalItems, totalAmount} = useCartContext();

  const delivery = totalAmount < 40 ? 3.9 : 0.0;
  const total = totalAmount + delivery;

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
        <p>
          {" "}
          {totalAmount < 40
            ? `Free home delivery if you add ${
                40 - totalAmount
              } EUR to the shopping bag`
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
          <p className="text-end f-smaller">*TAXES INCLUDED</p>
        <button className="btn-gral btn-white mt-5">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
