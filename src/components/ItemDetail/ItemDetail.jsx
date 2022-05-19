import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function ItemDetail({ item }) {
  return (
    <div className="detail-cont">
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
        <ItemCount stock={item.stock} initial={1}></ItemCount>
      </div>
    </div>
  );
}

export default ItemDetail;
