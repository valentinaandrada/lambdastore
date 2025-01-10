// React
import { memo } from "react";
// Components
import Item from "../Item/Item";
// Styles
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = memo(({ items }) => {
  return (
    <Row xs={1} sm={2} lg={3} className="g-3 g-md-4">
      {items.map((item) => (
        <Col key={item.id}>
          <Item item={item}></Item>
        </Col>
      ))}
    </Row>
  );
});

export default ItemList;
