import Item from "../Item/Item";

import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col'

function ItemList({items}) {
  return (
    <Row sm={2} lg={3} className="g-3 g-md-4">
      {items.map((prod) => (
        <Col>
          <Item key={prod.id} category={prod.category} name={prod.name} price={prod.price} img={prod.img} stock={prod.stock}></Item>
        </Col>
      ))}
    </Row>
  );
}

export default ItemList;
