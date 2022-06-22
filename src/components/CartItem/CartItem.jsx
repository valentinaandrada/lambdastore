// React
import { Link } from "react-router-dom";
// Context
import { useCartContext } from "../../context/CartContext";
// Styles
import "./CartItem.css";

function CartItem({ item, quantity }) {
  const { removeItem } = useCartContext();

  return (
    <div className="container d-flex ps-0 pb-4">
      <Link to={`/${item.category}/${item.id}`}>
        <img src={item.img} alt="" className="cartItem-img me-3" />
      </Link>
      <div className="cartItem-detail ff-secondary">
        <div>
          <h5 className="ff-primary text-uppercase">{item.name}</h5>
          <p>REF-{item.ref}</p>
        </div>
        <div>
          <p>{quantity > 1 && `${item.quantity} X ${item.price} EUR`}</p>
          <p>{(item.price * quantity).toFixed(2)} EUR</p>
          <button
            className="bg-transparent text-secondary border-0 mt-4"
            onClick={() => removeItem(item, quantity)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
