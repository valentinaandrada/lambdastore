// React
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
// Components
import Buttons from "../Buttons/Buttons";
import ItemCount from "../ItemCount/ItemCount";
// Styles
import "./ItemDetail.css";

function ItemDetail({ item }) {
  
  const [btnShown, setBtnShown] = useState('counter')

  const {addToCart} = useCartContext()
  
  const onAdd = (quantity) => {
      addToCart({...item, quantity}) 
      setBtnShown('buttons')
  }

  return (
    <div className="container detail-cont">
      <div className="img-cont">
        <img src={item.img} alt="" className="detail-img" />
        <img src={item.img2} alt="" className="detail-img" />
      </div>
      <div className="text-cont">
        <h3 className="card-title ff-primary text-uppercase">{item.name}</h3>
        <p className="ff-secondary">
          REF-{item.ref}
        </p>
        <p className="f-smaller mt-5 ff-secondary">{item.description}</p>
        <p className="f-smaller ff-secondary">Color: <span className="text-uppercase">{item.color}</span></p>
        <hr />
        <h5 className="f-color text-center">€ {item.price}</h5>
        { btnShown === 'counter' ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> : <Buttons/>}
      </div>
    </div>
  );
}

export default ItemDetail;
