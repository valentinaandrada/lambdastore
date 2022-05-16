import Card from "react-bootstrap/Card";

import ItemCount from "../ItemCount/ItemCount";

const Item = ({name, price, img, stock}) => {
  

  return (
    <Card className="border-0">
      <Card.Img variant="top" src={img}  />
      <Card.Body className="px-0 d-flex justify-content-between">
        <div>
        <Card.Title className="card-title ff-secondary mb-0 fs-6">{name}</Card.Title>
        <Card.Text className="f-color">€ {price}</Card.Text>
        </div>
        <ItemCount stock={stock} initial={1}></ItemCount>
      </Card.Body>
    </Card>
  );
};

export default Item;
