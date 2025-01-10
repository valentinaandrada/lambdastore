// Context
import { useCartContext } from "../../context/CartContext";
// Components
import CheckoutForm from "../CheckoutForm/CheckoutForm";
// Styles
import "./CartDetail.css";

function CartDetail() {
  const { totalAmount, createOrder } = useCartContext();

  const delivery = totalAmount < 40 ? 3.9 : 0.0;
  const total = (totalAmount + delivery).toFixed(2);

  function sendOrder(customer) {
    createOrder(customer);
  }

  return (
    <div className="cart-detail p-4">
      <p className="fs-5">SUMMARY</p>
      <p className="text-secondary f-smaller">
        {totalAmount < 40
          ? `Free home delivery if you add € ${(40 - totalAmount).toFixed(
              2
            )} to your shopping bag`
          : `Free home delivery on your purchase`}
      </p>
      <div className="d-flex justify-content-between mt-4">
        <p className=" fs-5">Subtotal</p>
        <p>€ {totalAmount.toFixed(2)}</p>
      </div>
      <div className="d-flex justify-content-between">
        <p>Delivery</p>
        <p>{delivery === 0 ? `FREE` : `€ ${delivery}`}</p>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <p className=" fs-5 mb-0">Total</p>
        <p className="mb-0">€ {total}</p>
      </div>
      <p className="text-end text-secondary f-smaller">*TAXES INCLUDED</p>

      <CheckoutForm sendOrder={sendOrder} />
    </div>
  );
}

export default CartDetail;
