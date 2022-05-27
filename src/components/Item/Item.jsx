// React
import { Link } from "react-router-dom";
// Styles
import Card from "react-bootstrap/Card";

const Item = ({item}) => {
  
  return (
    <Card className="border-0">
      <Link to={`/${item.category}/${item.id}`}>
        <Card.Img variant="top" src={item.img} onMouseMove={e => (e.currentTarget.src = item.img2)} onMouseLeave= {e => (e.currentTarget.src = item.img)} />
      </Link>
      <Card.Body className="px-0 d-flex justify-content-between">
        <div className="ff-primary">
        <Card.Title className="card-title mb-0 fs-6 text-uppercase">{item.name}</Card.Title>
        <Card.Text className="f-color">€ {item.price}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Item;
