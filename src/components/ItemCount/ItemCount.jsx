import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const add = () => {
    quantity < stock ? setQuantity(quantity + 1) : alert("Out of stock");
  };

  const substract = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  const addToCart = () => {
    onAdd = quantity;
    alert(`${onAdd} item/s added to your cart succesfully`)
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
