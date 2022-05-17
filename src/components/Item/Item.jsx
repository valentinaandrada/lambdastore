import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";

const Item = ({item}) => {

  return (
    <Card className="border-0">
      <Link to={`/${item.category}/${item.id}`}>
        <Card.Img variant="top" src={item.img}  />
      </Link>
      <Card.Body className="px-0 d-flex justify-content-between">
        <div>
        <Card.Title className="card-title ff-secondary mb-0 fs-6">{item.name}</Card.Title>
        <Card.Text className="f-color">€ {item.price}</Card.Text>
        </div>
        <ItemCount stock={item.stock} initial={1}></ItemCount>
      </Card.Body>
    </Card>
  );
};

export default Item;
