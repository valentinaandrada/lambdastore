// Context
import { useCartContext } from "../../context/CartContext";
// Components
import CheckoutForm from "../CheckoutForm/CheckoutForm";
// Styles
import "./CartDetail.css";
import { MdOutlineLocalShipping } from "react-icons/md";
import { BsArrowCounterclockwise, BsBagCheck } from "react-icons/bs";

function CartDetail() {
  const { totalAmount, createOrder } = useCartContext();

  const delivery = totalAmount < 40 ? 3.9 : 0.0;
  const total = (totalAmount + delivery).toFixed(2);

  function sendOrder(customer) {
    createOrder(customer);
  }

  return (
    <div className="cart-detail p-5">
      <p className=" fs-5">SUMMARY</p>
      <p className="text-secondary f-smaller">
        {totalAmount < 40
          ? `Free home delivery if you add ${(40 - totalAmount).toFixed(
              2
            )} EUR to your shopping bag`
          : `Free home delivery on your purchase`}
      </p>
      <div className="d-flex justify-content-between mt-5">
        <p className=" fs-5">Subtotal</p>
        <p>{totalAmount.toFixed(2)} EUR</p>
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
      <div className=" my-4 text-secondary f-smaller">
        <div className="d-flex">
          <h4>
            <MdOutlineLocalShipping />
          </h4>
          <p className="ff-secondary ps-3 pt-2">
            Free shipping for orders over 40 EUR
          </p>
        </div>
        <div className="d-flex">
          <h4>
            <BsArrowCounterclockwise />
          </h4>
          <p className="ff-secondary ps-3 pt-2">Easy returns in 60 days</p>
        </div>
        <div className="d-flex">
          <h4>
            <BsBagCheck />
          </h4>
          <p className="ff-secondary ps-3 pt-2">Secure payment</p>
        </div>
      </div>
      <hr />
      <CheckoutForm sendOrder={sendOrder} />
    </div>
  );
}

export default CartDetail;
