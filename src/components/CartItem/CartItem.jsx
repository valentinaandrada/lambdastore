import React from "react";
import { Link } from "react-router-dom";
import './CartItem.css'

function CartItem({ item, quantity, del}) {


  return (
    <div className="container d-flex ps-0 pb-3">
        <Link to={`/${item.category}/${item.id}`}>
      <img src={item.img} alt="" className="cartItem-img me-3" />
        </Link>
      <div className="cartItem-detail">
          <div>

        <h4 className="ff-secondary">{item.name}</h4>
        <p className="ff-secondary">{item.id}</p>
          </div>
        <div>
        <p className="ff-secondary">Unit price: <span className="f-color fs-5">€ {item.price}</span></p>
        <p className="ff-secondary">Quantity: {quantity}</p>
      <button className='bg-transparent text-secondary border-0' onClick={del}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
