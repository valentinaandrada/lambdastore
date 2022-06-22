// React
import { useEffect, useState } from "react";
// Context
import { useCartContext } from "../../context/CartContext";
// Components
import Buttons from "../Buttons/Buttons";
import ItemCount from "../ItemCount/ItemCount";
// Styles
import "./ItemDetail.css";

function ItemDetail({ item }) {
  const [btnShown, setBtnShown] = useState("counter");

  const { addToCart, stockPre, stockPreview } = useCartContext();

  const onAdd = (quantity) => {
    addToCart({ ...item, quantity });
    setBtnShown("buttons");
  };

  useEffect(() => {
    stockPre(item);
  });

  return (
    <div className="container detail-cont">
      <div className="img-cont">
        <img src={item.img} alt="" className="detail-img" />
        <img src={item.img2} alt="" className="detail-img" />
      </div>
      <div className="text-cont">
        <h3 className="card-title ff-primary text-uppercase">{item.name}</h3>
        <p className="ff-secondary">REF-{item.ref}</p>
        <p className="f-smaller mt-5 ff-secondary">{item.description}</p>
        <p className="f-smaller ff-secondary">
          Color: <span className="text-uppercase">{item.color}</span>
        </p>
        <hr />
        {stockPreview > 0 && (
          <p className="text-secondary text-center">
            {stockPreview} products available
          </p>
        )}
        <h5 className="f-color text-center">€ {item.price}</h5>
        {btnShown === "counter" ? (
          <ItemCount stock={stockPreview} initial={0} onAdd={onAdd} />
        ) : (
          <Buttons />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
