import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({ item }) {
  return (
    <div className="d-md-flex m-5">
      <div className="d-md-flex detail-img-cont">
      <img src={item.img} alt="" className="pb-3 m-md-2 detail-img" />
      <img src={item.img2} alt="" className="pb-3 m-md-2 detail-img" />
      </div>
      <div className="w-md-25 mt-4 mt-md-1">
        <div className="ms-md-4">
          <h2 className="card-title ff-secondary mb-0">{item.name}</h2>
          <p className="ff-secondary py-2 text-secondary">{item.category}-{item.id}</p>
        </div>
        <hr className="ms-md-4 mt-3 w-100"/>
        <div className="mt-4 ms-md-4 d-flex">
          <h5 className="f-color my-2 me-5">€ {item.price}</h5>
          <ItemCount Count stock={item.stock} initial={1}></ItemCount>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
