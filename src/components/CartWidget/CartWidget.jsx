// React
import { Link } from "react-router-dom";
// Context
import { useCartContext } from "../../context/CartContext";
// Styles
import "./CartWidget.css";
import { BsCart2 } from "react-icons/bs";

export const CartWidget = (showCart) => {
  const { totalItems } = useCartContext();
  return (
    <div>
      <Link to="/cart">
        <button className="px-3 pt-1 border-0 bg-transparent">
          <BsCart2 color="black" size={25} />
        </button>
      </Link>
      {totalItems !== 0 && (
        <p className="cart-qty text-center f-color-accent ms-3 ps-4 fw-bold">
          {totalItems}
        </p>
      )}
    </div>
  );
};
