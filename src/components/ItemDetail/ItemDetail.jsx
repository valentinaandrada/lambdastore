
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";

import Buttons from "../Buttons/Buttons";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  
  const [btnShown, setBtnShown] = useState('counter')

  const {cartList, addToCart} = useCartContext()

  const handleInput = () => {
    setBtnShown('buttons')    
  }
  
  const onAdd = (quantity) => {
    console.log(quantity)
    addToCart({...item, quantity})
  }
  

  console.log(cartList)

  return (
    <div className="container detail-cont">
      <div className="img-cont">
        <img src={item.img} alt="" className="detail-img" />
        <img src={item.img2} alt="" className="detail-img" />
      </div>
      <div className="text-cont">
        <h2 className="card-title ff-secondary">{item.name}</h2>
        <p className="ff-secondary">
          {item.category}-{item.id}
        </p>
        <hr />
        <h5 className="f-color text-center">€ {item.price}</h5>
        {btnShown === 'counter' ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} handleInput={handleInput}/> : <Buttons/>}
      </div>
    </div>
  );
}

export default ItemDetail;
