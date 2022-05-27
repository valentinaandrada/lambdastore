// React
import { useState } from "react";
// Styles
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(initial);

  const add = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const substract = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const addToCart = () => {
    onAdd(quantity);
  };

  return (
    <div className="d-flex justify-content-center align-items-center py-2 f-color">
      <button className="btn-count" onClick={substract}>
        -
      </button>
      <div className="fs-5 mx-3">{quantity}</div>
      <button className="btn-count" onClick={add}>
        +
      </button>
      <button className="ms-4 btn-add" onClick={addToCart}>
        ADD
      </button>
    </div>
  );
};

export default ItemCount;
